const highlights = [
  {
    title: "Offline & Private",
    desc: (
      <>
        Works with GST Offline Tool compatible files.
        Your data is <strong>not shared with anyone</strong> and
        stays completely in your control.
      </>
    ),
    icon: "🔒",
  },
  {
    title: "Data in Your Hands",
    desc: (
      <>
        Your business data remains <strong>safe and local</strong>.
        No forced cloud dependency. No third-party access.
      </>
    ),
    icon: "💾",
  },
  {
    title: "Easy for Everyone",
    desc: (
      <>
        Designed for business owners.
        <strong> No accounting background</strong> required.
        No dependency on CA / CS / accountant.
      </>
    ),
    icon: "🤝",
  },
  {
    title: "Ease of Operation",
    desc: (
      <>
        Simple screens, guided workflows and
        minimal learning curve for daily use.
      </>
    ),
    icon: "⚡",
  },
  {
    title: "Compliance-Ready",
    desc: (
      <>
        Generate filing-ready reports and JSON files
        compatible with official GST Offline Tools.
      </>
    ),
    icon: "📑",
  },
  {
    title: "Business-First Design",
    desc: (
      <>
        Focused on real business needs — billing,
        compliance, reports and control.
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
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Simple. Secure. Self-Sufficient.
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Built for Indian businesses that want full control
            without compromising on compliance or clarity.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6
                         transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 text-3xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
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
