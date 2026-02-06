import { NavLink } from "react-router-dom";

const modules = [
  {
    title: "Billing & Invoicing",
    desc:
      "Fast GST-ready billing with discounts, tax breakup, professional PDFs and WhatsApp sharing.",
    benefits: [
      "Zero manual tax calculation",
      "Professional invoices",
      "Faster billing & collections",
    ],
    link: "/product/billing",
  },
  {
    title: "Client & Product Management",
    desc:
      "Centralized masters for clients, products, pricing, tax rates and stock.",
    benefits: [
      "Single source of truth",
      "No duplicate data",
      "Accurate reports",
    ],
    link: "/product/masters",
  },
  {
  title: "Reports & Financial Statements",
  desc:
    "Comprehensive business reports designed to meet bank, audit and financial requirements.",
  benefits: [
    "Stock, debtors & creditors reports",
    "Stock movement & ageing analysis",
    "Bank-ready financial summaries",
    "Annual financial statements",
  ],
 link: "/reports/business",
},

  {
  title: "GST Compliance & Returns",
  desc:
    "Complete GST solution covering Regular, Composition and even Non-GST businesses.",
  benefits: [
    "GSTR-1 / GSTR-1A (Regular)",
    "GSTR-3B with ITC & liability summary",
    "CMP-08 & GSTR-4 (Composition dealers)",
    "Support for Non-GST clients",
  ],
  link: "/product/gst",
},

  {
    title: "GSTR-2B Reconciliation",
    desc:
      "Match purchase data with 2B to identify eligible, mismatched and missing ITC.",
    benefits: [
      "ITC risk visibility",
      "Audit-ready reconciliation",
      "Better tax planning",
    ],
    link: "/product/reconciliation",
  },
  {
  title: "Backup, Restore & Migration",
  desc:
    "Your data is always safe and portable — even if your device is lost, damaged or replaced.",
  benefits: [
    "One-click backup & restore",
    "Easy migration to new device",
    "No data loss on phone change",
    "Secure storage & controlled access",
  ],
  link: "/product/backup",
},
{
  title: "Easy Data Import & Adaptability",
  desc:
    "Start using SmartBilling without breaking your existing business records.",
  benefits: [
    "One-click data import",
    "Supports existing data in any format",
    "No business disruption",
    "Instant access to all SmartBilling features",
  ],
  link: "/product/import",
},

  {
    title: "Business Intelligence",
    desc:
      "Sales, profit, stock valuation and trend-based insights.",
    benefits: [
      "Know what’s profitable",
      "Control stock & margins",
      "Data-driven decisions",
    ],
    link: "/product/bi",
  },
  {
  title: "Reports, Exports & E-Way Bill",
  desc:
    "Compliance-ready reports and exports compatible with GST and E-Way Bill portals.",
  benefits: [
    "E-Way Bill – single & bulk generation",
    "Manual E-Way Bill data entry support",
    "JSON files for GST Offline Tool",
    "PDF & CSV exports for banks and audits",
  ],
  link: "/product/reports",
},
{
  title: "Help, Documentation & Support",
  desc:
    "Comprehensive guidance and responsive support to help you use SmartBilling confidently.",
  benefits: [
    "Detailed in-app help files",
    "Step-by-step usage guidance",
    "Online support for quick assistance",
    "Designed for non-technical users",
  ],
  link: "/product/support",
},

];

export default function Product() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-dark mb-4">
          SmartBilling – Complete Business Platform
        </h1>
        <p className="text-slate-600 text-lg">
          Built for Indian businesses to manage billing, GST, reconciliation
          and business intelligence from one place.
        </p>
      </section>

      {/* Modules */}
      <section className="grid md:grid-cols-2 gap-10">
        {modules.map((m) => (
          <ModuleCard key={m.title} module={m} />
        ))}
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Designed for Compliance. Built for Growth.
        </h2>
        <NavLink
          to="/contact"
          className="inline-block mt-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-blue-700 transition"
        >
          Request Demo
        </NavLink>
      </section>
    </main>
  );
}

function ModuleCard({ module }) {
  return (
    <NavLink
      to={module.link}
      className="border rounded-2xl p-8 hover:shadow-lg transition block group"
    >
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary">
        {module.title}
      </h3>

      <p className="text-slate-600 mb-4">{module.desc}</p>

      <ul className="space-y-1 text-sm text-slate-700">
        {module.benefits.map((b, i) => (
          <li key={i}>✓ {b}</li>
        ))}
      </ul>

      <div className="mt-4 text-primary font-medium">
        Learn more →
      </div>
    </NavLink>
  );
}
