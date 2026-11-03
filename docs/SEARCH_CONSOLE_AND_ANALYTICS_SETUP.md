# Google Search Console, Analytics & Indexing Operations Guide

This guide provides step-by-step instructions for deploying, verifying, and monitoring the portfolio on **Google Search Console (GSC)** and **Google Analytics 4 (GA4)** once published to your custom domain (`https://ashishrai.dev`).

---

## 1. Google Search Console (GSC) Verification

To verify ownership of your domain on Google Search Console:

### Method A: DNS Verification (Recommended for Root Domains)
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Select **Domain** property type and enter `ashishrai.dev`.
3. Copy the provided `TXT` verification record (e.g., `google-site-verification=...`).
4. Log into your domain registrar (e.g., Namecheap, Cloudflare, GoDaddy).
5. Add a `TXT` DNS record at the root `@` with the copied value.
6. Return to Google Search Console and click **Verify**.

### Method B: Meta Tag Verification (Directly Supported in Next.js)
1. In Search Console, choose **URL Prefix** property type and enter `https://ashishrai.dev`.
2. Choose **HTML Tag** verification.
3. Copy the verification code from the `content` attribute.
4. Set the environment variable in your production hosting platform (Vercel, Cloud Run, Netlify):
   ```bash
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your_verification_code_here"
   ```
5. Deploy the application and click **Verify** in Search Console.

---

## 2. Sitemap Submission & Indexing

Once verified in GSC:
1. In the left sidebar, click **Sitemaps** under *Index*.
2. In the **Add a new sitemap** field, enter:
   ```
   sitemap.xml
   ```
3. Click **Submit**.
4. Googlebot will queue and crawl all 18 pre-rendered routes:
   - `https://ashishrai.dev` (Priority: 1.0)
   - `https://ashishrai.dev/projects` (Priority: 0.9)
   - `https://ashishrai.dev/projects/mymealcrates` (Priority: 0.85)
   - `https://ashishrai.dev/projects/proclaim-projection` (Priority: 0.85)
   - `https://ashishrai.dev/projects/digiticki` (Priority: 0.85)
   - `https://ashishrai.dev/projects/snaparca` (Priority: 0.85)
   - `https://ashishrai.dev/projects/fasbas` (Priority: 0.85)
   - `https://ashishrai.dev/projects/travo-nepal` (Priority: 0.85)
   - `https://ashishrai.dev/projects/redtab` (Priority: 0.85)
   - `https://ashishrai.dev/experience` (Priority: 0.8)
   - `https://ashishrai.dev/about` (Priority: 0.8)
   - `https://ashishrai.dev/resume` (Priority: 0.8)
   - `https://ashishrai.dev/contact` (Priority: 0.7)

### Requesting Priority Indexing for Your Homepage:
1. Paste `https://ashishrai.dev` into the top search bar (*Inspect any URL in "ashishrai.dev"*).
2. Click **Test Live URL**.
3. If successful, click **Request Indexing**.

---

## 3. Google Analytics 4 (GA4) Configuration

The website includes a zero-overhead, privacy-first Google Analytics component (`<GoogleAnalytics />`) using Next.js `next/script` with `strategy="afterInteractive"`.

### Enabling GA4:
1. Create a GA4 property at [Google Analytics](https://analytics.google.com).
2. Create a Web Data Stream for `https://ashishrai.dev`.
3. Copy your Measurement ID (`G-XXXXXXXXXX`).
4. Set the environment variable in your production hosting:
   ```bash
   NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
   ```
5. Deploy. The script will automatically activate with zero impact on LCP or First Contentful Paint.

---

## 4. Search Query Tracking Strategy

Monitor ranking and impressions for targeted branded and professional queries:
- `Ashish Rai`
- `Ashish Rai Frontend Developer`
- `Ashish Rai React Developer`
- `Ashish Rai Next.js Developer`
- `Ashish Rai React Native Developer`
- `Ashish Rai Tuppl`

Under GSC **Performance > Search results**, monitor:
- **Total Clicks**
- **Total Impressions**
- **Average CTR**
- **Average Position**

---

## 5. Core Web Vitals Auditing Checklist

Before and after deployment, audit real user metrics using:
1. **Google PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
2. **WebPageTest**: Test mobile 4G latency.
3. Target benchmarks:
   - **LCP (Largest Contentful Paint)**: <= 1.2s (Well below Google's 2.5s threshold)
   - **INP (Interaction to Next Paint)**: <= 50ms (Well below Google's 200ms threshold)
   - **CLS (Cumulative Layout Shift)**: 0.00 (Perfect stability)
