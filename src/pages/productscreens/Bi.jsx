import React from "react";

export default function Bi() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Page Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Business Intelligence
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Sales, profit, stock valuation, and trend-based insights to help you
            make smarter business decisions.
          </p>
        </div>

        {/* Introduction */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Turn Data Into Decisions
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Running a business generates a lot of data — sales, purchases,
            inventory movement, margins, and customer behavior. Without clear
            insights, this data remains unused.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            SmartBilling’s Business Intelligence converts your daily
            transactions into meaningful insights that help you understand
            what’s working and where to improve.
          </p>
        </section>

        {/* Key Capabilities */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            What You Can Analyze
          </h2>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li>
              <strong>Sales Performance:</strong> Track sales by product,
              client, category, or period.
            </li>
            <li>
              <strong>Profit & Margins:</strong> Identify high-margin and
              low-margin products.
            </li>
            <li>
              <strong>Stock Valuation:</strong> Understand inventory value and
              slow-moving items.
            </li>
            <li>
              <strong>Trend Analysis:</strong> Discover seasonal and growth
              trends over time.
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
                ✔ Know What’s Profitable
              </h3>
              <p className="mt-1 text-slate-600">
                Focus on products and customers that generate the most profit.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Control Stock & Margins
              </h3>
              <p className="mt-1 text-slate-600">
                Avoid over-stocking and margin erosion.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Data-Driven Decisions
              </h3>
              <p className="mt-1 text-slate-600">
                Replace guesswork with accurate business insights.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Business Growth Planning
              </h3>
              <p className="mt-1 text-slate-600">
                Use trends to plan expansion and optimize operations.
              </p>
            </div>
          </div>
        </section>

        {/* Future Ready */}
        <section className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
          <h2 className="text-xl font-semibold text-indigo-900">
            Built for Actionable Insights
          </h2>
          <p className="mt-3 text-indigo-900 leading-relaxed">
            SmartBilling’s BI reports are designed to evolve into interactive
            dashboards, exportable reports, and deep analytical views as your
            business grows.
          </p>
        </section>

      </div>
    </div>
  );
}
