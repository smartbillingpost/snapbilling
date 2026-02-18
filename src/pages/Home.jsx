import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import TrustHighlights from "../components/TrustHighlights";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Helmet>
        {/* ✅ Fixed encoding bug — clean dash */}
        <title>SnapBilling – Offline GST Billing &amp; Invoicing App for Small Businesses in India</title>

        {/* ✅ Fixed duplicate word, improved copy */}
        <meta
          name="description"
          content="SnapBilling is a simple offline GST billing app for Indian retail shops, distributors, and small businesses. Create invoices, track expenses, manage GST reports – works without internet."
        />

        {/* ✅ Expanded keyword set */}
        <meta
          name="keywords"
          content="GST billing app, offline billing app, billing app for small business, GST invoice app, free billing software india, vyapar alternative, retail billing software android, small business accounting app india, offline invoice maker india, billing app for accountants, gst billing android app"
        />

        {/* ✅ Added robots tag */}
        <meta name="robots" content="index, follow" />

        {/* ✅ Added canonical URL */}
        <link rel="canonical" href="https://snapbilling.in" />

        {/* ✅ Open Graph for social sharing (WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://snapbilling.in" />
        <meta property="og:title" content="SnapBilling – Offline GST Billing App for Small Businesses in India" />
        <meta property="og:description" content="Simple offline GST billing for Indian small businesses, retail shops and accountants. Works without internet. Free download on Android." />
        <meta property="og:image" content="https://snapbilling.in/og-image.png" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SnapBilling – Offline GST Billing App" />
        <meta name="twitter:description" content="Simple offline GST billing for Indian small businesses. Free on Android." />
        <meta name="twitter:image" content="https://snapbilling.in/og-image.png" />

        {/* ✅ Schema.org structured data — helps Google show rich results */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SnapBilling",
            "operatingSystem": "Android",
            "applicationCategory": "BusinessApplication",
            "description": "Simple offline GST billing and invoicing app for Indian small businesses, retail shops, distributors and accountants.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "url": "https://snapbilling.in",
            "downloadUrl": "https://drive.google.com/file/d/1uRTkUelqwJtLRdDbmiySEIZmCGUNFcwC/view?usp=drive_link"
          }
        `}</script>
      </Helmet>

      <Hero />
      <Pillars />
      <TrustHighlights />
      <Testimonials />
    </>
  );
}
