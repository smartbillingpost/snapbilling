import { NavLink } from "react-router-dom";

const reportSections = [
  {
    title: "Sales Reports",
    description: "Sales analysis and revenue tracking",
    items: [
      { label: "Sales Register", to: "/reports/business/sales-register" },
      { label: "Invoice-wise Sales", to: "/reports/business/invoice-wise" },
      { label: "Client-wise Sales", to: "/reports/business/client-wise" },
      { label: "Monthly Sales Summary", to: "/reports/business/monthly-sales" },
    ],
  },
  {
    title: "Purchase Reports",
    description: "Purchase and supplier analysis",
    items: [
      { label: "Purchase Register", to: "/reports/business/purchase-register" },
      { label: "Supplier-wise Purchases", to: "/reports/business/supplier-wise" },
    ],
  },
  {
    title: "Ledger Reports",
    description: "Account balances and outstanding tracking",
    items: [
      { label: "Client Ledger", to: "/reports/business/client-ledger" },
      { label: "Supplier Ledger", to: "/reports/business/supplier-ledger" },
      { label: "Outstanding / Payables", to: "/reports/business/outstanding" },
    ],
  },
  {
    title: "Inventory & Stock",
    description: "Stock valuation and movement",
    items: [
      { label: "Stock Summary", to: "/reports/business/stock-summary" },
      { label: "Stock Movement", to: "/reports/business/stock-movement" },
      { label: "Low Stock Report", to: "/reports/business/low-stock" },
    ],
  },
];

export default function BusinessReports() {
  return (
    <div className="bg-slate-50">
      <main className="mx-auto max-w-7xl px-6 py-20 space-y-16">

        {/* Page Header */}
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Business Reports
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Operational reports covering sales, purchases, ledgers,
            and inventory — all in one place.
          </p>
        </section>

        {/* Report Sections */}
        {reportSections.map((section, index) => (
          <section
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-8"
          >
            {/* Section header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                {section.title}
              </h2>
              <p className="mt-1 text-slate-600">
                {section.description}
              </p>
            </div>

            {/* Report cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.to}
                  className="group rounded-xl border border-slate-200 bg-slate-50 p-5
                             transition hover:border-indigo-300 hover:bg-indigo-50"
                >
                  <span className="font-medium text-slate-800 group-hover:text-indigo-700">
                    {item.label}
                  </span>
                </NavLink>
              ))}
            </div>
          </section>
        ))}

      </main>
    </div>
  );
}
