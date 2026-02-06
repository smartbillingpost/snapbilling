import React from "react";

export default function Backup() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Page Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Backup, Restore & Migration
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Your data is always safe, portable, and recoverable — even if your
            device is lost, damaged, or replaced.
          </p>
        </div>

        {/* Why it matters */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Why Backup & Restore Matters
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Business data is critical. Invoices, clients, products, GST reports,
            and financial records must never be lost due to device failure,
            accidental deletion, or system changes.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            SmartBilling ensures your data remains protected and transferable,
            giving you complete control and peace of mind.
          </p>
        </section>

        {/* Key Features */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Key Features
          </h2>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li>
              <strong>One-click Backup & Restore:</strong> Quickly create a full
              backup of your data and restore it anytime.
            </li>
            <li>
              <strong>Easy Migration to New Device:</strong> Seamlessly move
              your business data when changing phones or systems.
            </li>
            <li>
              <strong>No Data Loss on Device Change:</strong> Continue your
              business without interruptions.
            </li>
            <li>
              <strong>Secure Storage & Controlled Access:</strong> Your data
              remains protected and accessible only to you.
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
                ✔ Peace of Mind
              </h3>
              <p className="mt-1 text-slate-600">
                Never worry about losing invoices, GST data, or reports.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Business Continuity
              </h3>
              <p className="mt-1 text-slate-600">
                Resume work instantly on a new or restored device.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Audit & Compliance Safety
              </h3>
              <p className="mt-1 text-slate-600">
                Preserve historical records required for audits and GST
                compliance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Simple & Reliable
              </h3>
              <p className="mt-1 text-slate-600">
                No technical expertise required — backup and restore with ease.
              </p>
            </div>
          </div>
        </section>

        {/* Action Box */}
        <section className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
          <h2 className="text-xl font-semibold text-indigo-900">
            What You Can Do
          </h2>
          <ul className="mt-4 space-y-2 text-indigo-900">
            <li>• Create a backup before updating or changing devices</li>
            <li>• Restore data instantly after reinstalling the app</li>
            <li>• Migrate business data securely to a new phone</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
