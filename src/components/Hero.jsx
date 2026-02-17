import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
  SnapBilling – A Simple Billing and GST App for Businesses
</h1>


          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
  Billing, expenses, compliance, and business reports — all made simple.
  SnapBilling helps you manage your day-to-day business easily and smartly,
  while keeping GST, e-Way Bills, and financial statements ready when needed.
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
