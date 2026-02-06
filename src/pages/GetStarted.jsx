import React from "react";
import { useSearchParams } from "react-router-dom";

export default function GetStarted() {
  const [params] = useSearchParams();
  const planFromUrl = params.get("plan") || "Starter";

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Welcome to SmartBilling 👋
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            You’re just one step away from simplified billing,
            GST compliance, and actionable business insights.
          </p>
        </div>

        {/* What happens next */}
        <section className="mt-14 grid gap-8 md:grid-cols-3">
          <Step
            title="Personal Demo"
            desc="Our business manager will walk you through SmartBilling
                  and show how it fits your business."
          />
          <Step
            title="Guided Setup"
            desc="We help you configure clients, products, GST,
                  and reports correctly from day one."
          />
          <Step
            title="Easy Data Migration"
            desc="We assist in importing your existing data from
                  Excel or other billing software."
          />
        </section>

        {/* Form */}
        <section className="mt-20 grid gap-10 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              Tell Us About You
            </h2>

            <form
              className="mt-6 space-y-4"
              action="https://formspree.io/f/xjgebnbp"
              method="POST"
            >
              {/* Auto captured plan */}
              <input type="hidden" name="plan" value={planFromUrl} />

              <Input label="Business / Firm Name" name="business" />
              <Input label="Your Name" name="name" />
              <Input label="Phone Number" name="phone" />
              <Input label="Email Address" name="email" type="email" />

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Interested Plan
                </label>
                <select
                  name="selectedPlan"
                  defaultValue={planFromUrl}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                >
                  <option>Starter</option>
                  <option>Professional</option>
                  <option>Enterprise</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your business"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              />

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3
                           font-medium text-white hover:bg-indigo-700 transition"
              >
                Request Demo & Setup Assistance
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

/* Helper Components */

function Step({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

function Input({ label, name, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
      />
    </div>
  );
}
