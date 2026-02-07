import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import TrustHighlights from "../components/TrustHighlights";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          SmartBilling – Simple Billing and GST App for Small Businesses
        </title>

        <meta
          name="description"
          content="SmartBilling is a simple billing and GST app for retail shops, distributors, and small businesses in India. Manage billing, expenses, GST, and business reports easily."
        />

        <meta
          name="keywords"
          content="billing and gst app, gst billing app, billing app for small business, offline billing app, billing software india"
        />
      </Helmet>

      <Hero />
      <Pillars />
      <TrustHighlights />
    </>
  );
}
