import { NavLink } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="bg-slate-50">
      <main className="mx-auto max-w-7xl px-6 py-20 space-y-20">

        {/* Intro */}
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Simple. Transparent. Affordable.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Choose a plan that fits your business size and compliance needs.
          </p>
        </section>

        {/* Plans */}
        <section className="grid gap-8 md:grid-cols-3">

          <Plan
            name="Starter"
            price="₹999 / year"
            to="/get-started?plan=starter"
            features={[
              "Basic Billing & Invoicing",
              "GST Reports (GSTR-1, GSTR-3B)",
              "PDF & CSV Export",
            ]}
          />

          <Plan
            highlighted
            name="Professional"
            price="₹2,499 / year"
            to="/get-started?plan=professional"
            features={[
              "Everything in Starter",
              "GSTR-2B Reconciliation",
              "Client & Product Reports",
              "Priority Support",
            ]}
          />

          <Plan
            name="Enterprise"
            price="Custom"
            to="/get-started?plan=enterprise"
            features={[
              "All Professional features",
              "Advanced Business Intelligence",
              "Multi-user Access",
              "Dedicated Support",
            ]}
          />

        </section>

        {/* Note */}
        <section className="text-center text-sm text-slate-500">
          * Prices are indicative. GST applicable as per law.
        </section>

      </main>
    </div>
  );
}

function Plan({ name, price, features, highlighted, to }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-white p-8 transition
        ${
          highlighted
            ? "border-indigo-300 shadow-lg scale-[1.02]"
            : "border-slate-200 hover:shadow-md"
        }`}
    >
      <h3 className="mb-2 text-xl font-semibold text-slate-900">
        {name}
      </h3>

      <div className="mb-6 text-3xl font-bold text-slate-900">
        {price}
      </div>

      <ul className="flex-1 space-y-3 text-slate-600">
        {features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      {/* CTA */}
      <NavLink
        to={to}
        className={`mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition
          ${
            highlighted
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
      >
        Get Started
      </NavLink>
    </div>
  );
}
