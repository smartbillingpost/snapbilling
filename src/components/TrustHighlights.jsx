const highlights = [
  {
    title: "Works Offline & Stays Private",
    desc: (
      <>
        {/* ✅ Fixed brand name: was "SmartBilling" */}
        SnapBilling works even without internet.
        Your data is <strong>not shared with anyone</strong> and
        stays completely under your control.
      </>
    ),
    icon: "🔒",
  },
  {
    title: "Your Data, Your Device",
    desc: (
      <>
        Your business data stays <strong>on your device</strong>.
        No forced cloud storage. No third-party access. No surprises.
      </>
    ),
    icon: "💾",
  },
  {
    title: "Easy for Business Owners",
    desc: (
      <>
        Made for everyday business use.
        <strong> No accounting knowledge</strong> needed
        to manage billing, GST, and reports.
      </>
    ),
    icon: "🤝",
  },
  {
    title: "Simple to Use Daily",
    desc: (
      <>
        Clean screens and guided steps make
        daily billing and tracking easy from day one —
        no training required.
      </>
    ),
    icon: "⚡",
  },
  {
    title: "Ready When Compliance Is Needed",
    desc: (
      <>
        {/* ✅ Fixed encoding: â€" removed */}
        Prepare GST reports and upload required
        files using your regular billing data —
        without any extra effort.
      </>
    ),
    icon: "📑",
  },
  {
    title: "Designed Around Real Businesses",
    desc: (
      <>
        {/* ✅ Fixed encoding: â€" removed */}
        Built for billing, compliance, reports,
        and control — the things Indian small
        businesses actually care about.
      </>
    ),
    icon: "🏢",
  },
];

export default function TrustHighlights() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Section intro */}
        <div className="mb-14 text-center">
          {/* ✅ Added: section label */}
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
            Why SnapBilling
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Simple. Safe. In Your Control.
          </h2>
          {/* ✅ Fixed encoding: â€" removed */}
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Built for Indian businesses that want clarity,
            confidence, and control — without complexity.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6
                         transition duration-200 hover:-translate-y-1 hover:shadow-md
                         hover:border-indigo-200"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center
                              rounded-xl bg-indigo-50 text-2xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
