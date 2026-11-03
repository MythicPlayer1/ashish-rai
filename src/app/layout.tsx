import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { BackgroundMesh } from "@/components/animations/BackgroundMesh";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG, PERSON_SCHEMA, WEBSITE_SCHEMA } from "@/data/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Ashish Rai | Senior Frontend Developer & Systems Architect",
    template: "%s | Ashish Rai",
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: "Ashish Rai — Portfolio & Systems Architecture",
    title: "Ashish Rai | Senior Frontend Developer & Systems Architect",
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Ashish Rai — Senior Frontend Developer & Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Rai | Senior Frontend Developer & Systems Architect",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: "@ashishrai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <head>
        <JsonLd data={PERSON_SCHEMA} />
        <JsonLd data={WEBSITE_SCHEMA} />
      </head>
      <body className="relative min-h-screen bg-[#08090b] text-[#f3f4f6] font-sans selection:bg-emerald-500/30 selection:text-white flex flex-col">
        {/* Skip to Main Content Link for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-black focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        <GoogleAnalytics />
        <SmoothScroll>
          <BackgroundMesh />
          <Navbar />
          <main id="main-content" className="relative z-10 flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
