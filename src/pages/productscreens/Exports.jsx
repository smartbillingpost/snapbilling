import React from "react";

export default function Exports() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Page Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Reports, Exports & E-Way Bill
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Compliance-ready reports and exports compatible with GST
            and E-Way Bill portals.
          </p>
        </div>

        {/* Introduction */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Built for Compliance & Audits
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Regulatory compliance requires accurate reports, standard formats,
            and timely submissions. SmartBilling ensures your data is always
            ready for GST filings, audits, banking requirements, and E-Way Bill
            generation.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            From exports to government tools to printable audit reports,
            everything is generated directly from your actual transaction data.
          </p>
        </section>

        {/* Key Capabilities */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Key Capabilities
          </h2>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li>
              <strong>E-Way Bill Generation:</strong> Create single or bulk
              E-Way Bills directly from invoices.
            </li>
            <li>
              <strong>Manual E-Way Bill Support:</strong> Enter or correct
              transport details when required.
            </li>
            <li>
              <strong>GST Offline Tool JSON:</strong> Generate government-ready
              JSON files for direct upload.
            </li>
            <li>
              <strong>PDF & CSV Exports:</strong> Produce audit-friendly and
              bank-ready documents.
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
                ✔ Faster Compliance
              </h3>
              <p className="mt-1 text-slate-600">
                Generate statutory files without manual preparation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Audit-Ready Records
              </h3>
              <p className="mt-1 text-slate-600">
                Maintain clean, consistent reports for audits and reviews.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Reduced Errors
              </h3>
              <p className="mt-1 text-slate-600">
                Avoid format and data mistakes during uploads.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Bank & Regulatory Support
              </h3>
              <p className="mt-1 text-slate-600">
                Easily share statements with banks and authorities.
              </p>
            </div>
          </div>
        </section>

        {/* Supported Outputs */}
        <section className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
          <h2 className="text-xl font-semibold text-indigo-900">
            Supported Outputs
          </h2>
          <ul className="mt-4 space-y-2 text-indigo-900">
            <li>• GST Returns (GSTR-1, GSTR-3B, CMP-08, GSTR-4)</li>
            <li>• E-Way Bill (single & bulk)</li>
            <li>• PDF reports for audits and records</li>
            <li>• CSV exports for banks and analysis</li>
            <li>• JSON files for GST Offline Tool</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
