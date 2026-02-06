const pillars = [
  {
    title: "Billing & Invoicing",
    desc: "GST-aware pricing, discounts, professional invoices, WhatsApp sharing.",
    icon: "🧾",
  },
  {
    title: "GST Compliance",
    desc: "GSTR-1, GSTR-1A, GSTR-3B, HSN summaries, export-ready reports.",
    icon: "📊",
  },
  {
    title: "GSTR-2B Reconciliation",
    desc: "Clear identification of matched, mismatched and missing ITC.",
    icon: "🔍",
  },
  {
    title: "Business Intelligence",
    desc: "Sales, profit, stock valuation and actionable insights.",
    icon: "📈",
  },
];

export default function Pillars() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            One Platform. Complete Control.
          </h2>
          <p className="mt-3 text-slate-600">
            Everything you need to run billing, GST and business reporting —
            without juggling multiple tools.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition
                         hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 text-3xl">
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
