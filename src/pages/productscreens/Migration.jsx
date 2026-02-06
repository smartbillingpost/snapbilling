import React from "react";

export default function Migration() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Page Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Easy Data Import & Adaptability
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Start using SmartBilling without breaking your existing business
            records.
          </p>
        </div>

        {/* Introduction */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Seamless Transition to SmartBilling
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Switching to a new billing system should never disrupt your
            business. SmartBilling is designed to adapt to your existing data,
            workflows, and formats, so you can get started instantly.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Whether your data comes from Excel, another billing software, or
            custom formats, SmartBilling ensures a smooth and safe migration.
          </p>
        </section>

        {/* Key Features */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Key Features
          </h2>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li>
              <strong>One-click Data Import:</strong> Import your existing data
              quickly without complex setup.
            </li>
            <li>
              <strong>Supports Any Data Format:</strong> Works with Excel,
              CSV, and data exported from other systems.
            </li>
            <li>
              <strong>No Business Disruption:</strong> Continue operations
              without downtime during migration.
            </li>
            <li>
              <strong>Instant Access to All Features:</strong> Use billing,
              GST, and reports immediately after import.
            </li>
          </ul>
        </section>

        {/* Business Benefits */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Benefits to Your Business
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Faster Onboarding
              </h3>
              <p className="mt-1 text-slate-600">
                Get started in minutes instead of days or weeks.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Preserve Historical Data
              </h3>
              <p className="mt-1 text-slate-600">
                Retain invoices, clients, and GST history without re-entry.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Reduce Manual Errors
              </h3>
              <p className="mt-1 text-slate-600">
                Avoid mistakes caused by manual data re-creation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Business Continuity
              </h3>
              <p className="mt-1 text-slate-600">
                Transition smoothly without affecting daily operations.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
          <h2 className="text-xl font-semibold text-indigo-900">
            How to Get Started
          </h2>
          <ul className="mt-4 space-y-2 text-indigo-900">
            <li>• Prepare your existing data (Excel / CSV / exports)</li>
            <li>• Use SmartBilling’s import tools to load your data</li>
            <li>• Verify imported records and start billing immediately</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
