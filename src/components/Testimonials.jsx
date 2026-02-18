const testimonials = [
  {
    name: "Mayoor Modi",
    role: "Travel Agent & Tour Operator",
    initial: "M",
    rating: 5,
    quote:
      "SnapBilling has made invoicing for my travel packages so much easier. I can create GST-compliant bills for tour packages instantly and share them on WhatsApp with clients. Works perfectly even when I'm travelling in low-network areas.",
  },
  {
    name: "Rajasekhar",
    role: "Chemical & Yarn Business",
    initial: "R",
    rating: 5,
    quote:
      "Managing GST for both chemicals and yarn was always complicated. SnapBilling keeps everything organised — billing, stock, and GST reports all in one place. The offline feature is a lifesaver when internet is unreliable at the warehouse.",
  },
  {
    name: "MSN Shastri",
    role: "Photo Processing Unit",
    initial: "S",
    rating: 5,
    quote:
      "Simple and straightforward. I create bills for my photo processing orders quickly and the GST reports are always ready when needed. No accounting background required — anyone can use it from day one.",
  },
  {
    name: "Ratnakar",
    role: "Photo Processing Unit",
    initial: "R",
    rating: 5,
    quote:
      "I've tried other billing apps but SnapBilling is the most hassle-free. My data stays on my device, billing is fast, and I don't need to worry about internet connectivity. Highly recommended for small business owners.",
  },
  {
    name: "Saikiran",
    role: "Chartered Accountant",
    initial: "S",
    rating: 5,
    quote:
      "As a CA I recommend SnapBilling to all my small business clients. The GST reports are accurate, reconciliation is straightforward, and the interface is simple enough that my clients can manage it themselves without calling me every day.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
            Real Users
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Trusted by Indian Business Owners
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            From travel agents to chartered accountants — here's what real
            SnapBilling users have to say.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-slate-200
                         bg-slate-50 p-6 transition duration-200
                         hover:-translate-y-1 hover:shadow-md hover:border-indigo-200"
            >
              {/* Stars */}
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg key={s} className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-600 italic mb-5">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full
                                bg-indigo-600 text-sm font-bold text-white flex-shrink-0">
                  {t.initial}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">{t.name}</span>
                  <span className="text-xs text-slate-400">{t.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
