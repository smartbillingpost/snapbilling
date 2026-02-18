const purchaseReports = [
  {
    title: "Purchase Register",
    desc:
      "A chronological record of all purchase invoices raised during a selected period. Lists supplier name, invoice number, date, taxable value, GST amount and total — essential for purchase reconciliation and GSTR-2B matching.",
  },
  {
    title: "Supplier Ledger",
    desc:
      "A complete account-wise statement for each supplier showing all purchase transactions, payments made and the running balance. Helps you track what is owed to each vendor and resolve any billing disputes quickly.",
  },
];

const stockReports = [
  {
    title: "Stock Register",
    desc:
      "A detailed item-wise record of your entire inventory showing opening stock, purchases, sales and closing balance for any date range. Useful for stock audits, valuation and identifying discrepancies.",
  },
  {
    title: "Stock Movement Register",
    desc:
      "Tracks every inward and outward movement of each product — when it came in, when it went out and how much is left. Helps identify fast-moving items, slow movers and potential stock-outs before they happen.",
  },
];

const salesReports = [
  {
    title: "Sales Register",
    desc:
      "A date-wise list of all sales invoices with client name, invoice number, taxable value, GST and net amount. Serves as the primary input for GSTR-1 filing and gives a quick view of daily and monthly sales activity.",
  },
  {
    title: "Client Wise Ledger",
    desc:
      "A complete account statement for each client showing all invoices raised, payments received and the outstanding balance at any point in time. Ideal for sharing with clients during disputes or for your own collections follow-up.",
  },
  {
    title: "Client Outstanding Report",
    desc:
      "Lists all clients with unpaid or partially paid invoices along with the due amounts and invoice dates. Helps your team prioritise collections, flag overdue accounts and improve overall cash flow.",
  },
  {
    title: "Daily Cash & Bank Credit Report",
    desc:
      "A day-wise summary of all cash and bank receipts collected from clients. Gives you a clear view of money actually received versus invoices raised — critical for daily cash management and bank reconciliation.",
  },
];

const financialStatements = [
  {
    title: "Trading Account",
    desc:
      "Compares your cost of goods sold against net sales to arrive at gross profit or gross loss for the period. Gives a direct measure of your core trading performance before accounting for any operating expenses.",
  },
  {
    title: "Profit & Loss Account",
    desc:
      "Summarises all income and expenses — direct and indirect — to show your net profit or net loss for the year. The primary statement used by accountants, banks and auditors to assess business health.",
  },
  {
    title: "Balance Sheet",
    desc:
      "A point-in-time financial snapshot showing all assets (what your business owns), liabilities (what it owes) and the owner's capital. Required for annual filings, loan applications, investor reviews and statutory audits.",
  },
];

export default function BusinessReports() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">

      {/* Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-dark mb-4">
          Reports & Financial Statements
        </h1>
        <p className="text-slate-600 text-lg">
          Comprehensive reports built for Indian businesses — covering
          purchases, stock, sales, collections and statutory financial
          statements, all generated automatically from your billing data.
        </p>
      </section>

      {/* Purchase Reports */}
      <ReportSection
        heading="Purchase Reports"
        subheading="Track every rupee spent — supplier-wise and invoice-wise."
        reports={purchaseReports}
      />

      {/* Stock Reports */}
      <ReportSection
        heading="Stock Reports"
        subheading="Know exactly what you have, where it came from and where it went."
        reports={stockReports}
      />

      {/* Sales & Collection Reports */}
      <ReportSection
        heading="Sales & Collection Reports"
        subheading="Monitor revenue, outstanding dues and daily cash inflows in one place."
        reports={salesReports}
      />

      {/* Financial Statements */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-1">
            Annual Financial Statements
          </h2>
          <p className="text-slate-500 text-sm">
            Auto-generated from your data — ready for your accountant, bank or auditor.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {financialStatements.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-7"
            >
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                {f.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

function ReportSection({ heading, subheading, reports }) {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-1">{heading}</h2>
        {subheading && (
          <p className="text-slate-500 text-sm">{subheading}</p>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {reports.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-slate-200 bg-white p-7"
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              {r.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
