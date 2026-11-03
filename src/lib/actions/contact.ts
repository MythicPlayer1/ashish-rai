"use server";

import { headers } from "next/headers";
import { checkRateLimit, sanitizeInput } from "@/lib/security";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitContactForm(
  prevState: ContactActionResult | null,
  formData: FormData
): Promise<ContactActionResult> {
  // 1. Bot Honeypot Check
  const honeypot = formData.get("bot_trap_field") as string;
  if (honeypot && honeypot.trim().length > 0) {
    // Silently succeed to trick bots without processing
    return {
      success: true,
      message: "Thank you for reaching out! Your message has been received.",
    };
  }

  // 2. Submission timestamp check (reject if filled faster than 1.5 seconds)
  const renderedAtStr = formData.get("form_rendered_at") as string;
  const renderedAt = parseInt(renderedAtStr || "0", 10);
  const duration = Date.now() - renderedAt;
  if (renderedAt > 0 && duration < 1500) {
    return {
      success: false,
      message: "Submission was too fast. Please verify you are human.",
    };
  }

  // 3. Client IP Rate Limiting
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

  const rateCheck = checkRateLimit(clientIp, 4, 10 * 60 * 1000);
  if (!rateCheck.allowed) {
    return {
      success: false,
      message: "Too many messages sent. Please wait a few minutes before trying again.",
    };
  }

  // 4. Extract and validate fields
  const nameRaw = (formData.get("name") as string) || "";
  const emailRaw = (formData.get("email") as string) || "";
  const subjectRaw = (formData.get("subject") as string) || "";
  const messageRaw = (formData.get("message") as string) || "";

  const name = sanitizeInput(nameRaw);
  const email = sanitizeInput(emailRaw).toLowerCase();
  const subject = sanitizeInput(subjectRaw);
  const message = sanitizeInput(messageRaw);

  const errors: Record<string, string> = {};

  if (!name || name.length < 2) {
    errors.name = "Please provide your name (at least 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  // In production with Resend API key configured, send transactional email
  // Example: await resend.emails.send({ ... })
  // For now, securely log and return success
  console.log(`[Contact Submission] From: ${name} <${email}> | Subject: ${subject}`);

  return {
    success: true,
    message: "Thank you for reaching out! Your message was sent successfully. I will get back to you shortly.",
  };
}
