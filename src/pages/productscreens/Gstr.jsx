import React from "react";
import { NavLink } from "react-router-dom";

export default function Gstr() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Page Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            GST Reports & Compliance
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            GST returns, analytics, audit PDFs, and JSON uploads based on sales,
            sales returns, purchases, and purchase returns.
          </p>
        </div>

        <div className="mt-14 space-y-16">

          {/* Regular Taxpayer */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-slate-900">
              Regular Taxpayer Returns
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <NavLink to="/gstr/gstr1" className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:bg-indigo-50">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                  GSTR-1 / GSTR-1A
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Outward supplies with invoice-level, rate-wise breakup,
                  HSN codes, UQC units, and auto IGST / CGST / SGST calculation.
                </p>
              </NavLink>

              <NavLink to="/gstr/gstr3b" className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:bg-indigo-50">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                  GSTR-3B
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Summary return with net tax liability and ITC after
                  considering sales, returns, purchases, and purchase returns.
                </p>
              </NavLink>
            </div>
          </section>

          {/* Composition Taxpayer */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-slate-900">
              Composition Taxpayer Returns
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <NavLink to="/gstr/cmp08" className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:bg-indigo-50">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                  CMP-08
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Quarterly statement for composition dealers based on net
                  turnover after sales returns.
                </p>
              </NavLink>

              <NavLink to="/gstr/gstr4" className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:bg-indigo-50">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                  GSTR-4
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Annual return for composition taxpayers with consolidated
                  turnover and tax details.
                </p>
              </NavLink>
            </div>
          </section>

          {/* GST Analytics */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-slate-900">
              GST Analytics & Breakups
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <NavLink to="/gstr/invoice-rate-breakup" className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:bg-indigo-50">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                  Invoice-Level Rate-Wise Breakup
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  GST rate-wise analysis across invoices including returns,
                  showing IGST, CGST, and SGST splits.
                </p>
              </NavLink>

              <NavLink to="/gstr/hsn-summary" className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:bg-indigo-50">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                  HSN Summary
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  HSN-wise quantity, taxable value, and tax with UQC units,
                  considering net sales and returns.
                </p>
              </NavLink>
            </div>
          </section>

          {/* Compliance Exports */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-slate-900">
              Compliance Exports
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <NavLink to="/gstr/export/pdf" className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:bg-indigo-50">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                  GST PDF Reports
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Audit-ready PDFs for all GST returns and analytics reports.
                </p>
              </NavLink>

              <NavLink to="/gstr/export/json" className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:bg-indigo-50">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                  GST JSON (Offline Tool)
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Government GST Offline Tool compatible JSON for direct upload
                  of all applicable returns.
                </p>
              </NavLink>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
