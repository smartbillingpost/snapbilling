import React from "react";

export default function Gstr2brecon() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Page Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            GSTR-2B Reconciliation
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Ensure your Input Tax Credit (ITC) is accurate, eligible,
            and fully compliant with GST law.
          </p>
        </div>

        {/* Intro */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            What is GSTR-2B Reconciliation?
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            GSTR-2B is an auto-generated statement from the GST portal that
            determines how much Input Tax Credit (ITC) you are eligible to
            claim. However, the purchases recorded in your books may not always
            perfectly match the data reported by your suppliers.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            GSTR-2B reconciliation compares your purchase register (including
            purchase returns) with the GSTR-2B data to identify matches,
            mismatches, and compliance risks before filing returns.
          </p>
        </section>

        {/* Why it matters */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Why is Reconciliation Important?
          </h2>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li>• Incorrect ITC claims can lead to GST notices and penalties</li>
            <li>• Missing invoices may result in permanent ITC loss</li>
            <li>• Supplier non-compliance affects your eligibility</li>
            <li>• Manual reconciliation is time-consuming and error-prone</li>
          </ul>
        </section>

        {/* How SmartBilling helps */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            How SmartBilling Helps You
          </h2>

          <p className="mt-4 text-slate-600">
            SmartBilling automatically reconciles your purchase data with
            GSTR-2B and classifies invoices into clear, actionable categories:
          </p>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              <strong>Fully Matched:</strong> Safe to claim ITC with confidence
            </li>
            <li>
              <strong>Partially Matched:</strong> Differences in value or tax identified
            </li>
            <li>
              <strong>In Purchase Only:</strong> Follow-up required with supplier
            </li>
            <li>
              <strong>In GSTR-2B Only:</strong> Missing entries in your books
            </li>
          </ul>
        </section>

        {/* Business benefits */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Benefits to Your Business
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Protect Your ITC
              </h3>
              <p className="mt-1 text-slate-600">
                Ensure you claim only eligible ITC and avoid future reversals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Avoid GST Notices
              </h3>
              <p className="mt-1 text-slate-600">
                Detect discrepancies before filing GST returns.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Save Time
              </h3>
              <p className="mt-1 text-slate-600">
                Eliminate manual Excel-based reconciliation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Be Audit-Ready
              </h3>
              <p className="mt-1 text-slate-600">
                Maintain clean and explainable GST records.
              </p>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
          <h2 className="text-xl font-semibold text-indigo-900">
            What You Can Do Next
          </h2>

          <ul className="mt-4 space-y-2 text-indigo-900">
            <li>• Upload your GSTR-2B JSON file from the GST portal</li>
            <li>• Review reconciliation status invoice-wise</li>
            <li>• Take corrective actions before filing GSTR-3B</li>
            <li>• Export reconciliation reports for audit and follow-up</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
