import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Smart Billing A Complete Business Solution for Indian Businesses just on your Fingertips
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Simple billing, powerful GST reports, exports, and
            actionable business intelligence — all in one platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary CTA */}
            <NavLink
              to="/product"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition"
            >
              Get Started
            </NavLink>

            {/* Secondary CTA */}
            <NavLink
              to="/product"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-white transition"
            >
              View Features
            </NavLink>
          </div>

        </div>
      </div>
    </section>
  );
}
