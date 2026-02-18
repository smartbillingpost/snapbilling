export default function Pillars() {
  const pillars = [
    {
      title: "Easy Billing",
      desc: "Make clean, professional GST invoices with discounts and share them instantly on WhatsApp — in seconds.",
      icon: "🧾",
    },
    {
      // ✅ Added: Offline pillar — your biggest differentiator
      title: "Works Fully Offline",
      desc: "No internet? No problem. SnapBilling works completely offline so your business never stops, even in low-connectivity areas.",
      icon: "📴",
    },
    {
      // ✅ Fixed encoding: â€" → –
      title: "GST Made Simple",
      desc: "Your regular billing data automatically prepares GST returns and required reports — no extra work needed.",
      icon: "📊",
    },
    {
      // ✅ Fixed encoding: â€" → –
      title: "Clear Tax Credit View",
      desc: "See which GST credits are available and which need attention, in a simple and clear way — no CA needed.",
      icon: "🔍",
    },
    {
      title: "Know Your Business",
      desc: "See sales, expenses, profit, and stock value so you understand exactly how your business is performing.",
      icon: "📈",
    },
    {
      // ✅ Added: e-Way Bill pillar — mentioned in hero but missing from features
      title: "e-Way Bill Ready",
      desc: "Generate and manage e-Way Bills directly from your billing data — fully compliant with Indian GST rules.",
      icon: "📋",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Section heading */}
        <div className="mb-14 text-center">
          {/* ✅ Added: section label */}
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
            Core Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Everything your business needs, in one place
          </h2>
          {/* ✅ Fixed encoding + fixed brand name (was "SmartBilling") */}
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            From daily billing to GST compliance — SnapBilling handles it all,
            even without internet.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6
                         transition duration-200 hover:-translate-y-1 hover:shadow-lg
                         hover:border-indigo-200 overflow-hidden"
            >
              {/* ✅ Top accent bar on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-indigo-600
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center
                              rounded-xl bg-indigo-50 text-2xl">
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-slate-900">
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
