export default function Billing() {
  return (
    <div className="bg-slate-50">
      <main className="mx-auto max-w-7xl px-6 py-20 space-y-16">

        {/* Page Header */}
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Billing & Invoicing
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Simple, GST-aware billing designed for Indian businesses —
            fast, accurate, and professional.
          </p>
        </section>

        {/* What you can do */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            What You Can Do
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li>✔ Create GST and Non-GST invoices</li>
            <li>✔ Automatic CGST / SGST / IGST calculation</li>
            <li>✔ Apply discounts and round-offs</li>
            <li>✔ Generate professional invoice formats</li>
          </ul>
        </section>

        {/* Ease of use */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Designed for Ease of Use
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li>✔ No accounting background required</li>
            <li>✔ Minimal learning curve for daily billing</li>
            <li>✔ Works fully offline — your data stays with you</li>
          </ul>
        </section>

        {/* Reinforcement box */}
        <section className="rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
          <h2 className="text-xl font-semibold text-indigo-900">
            Built for Real-World Billing
          </h2>
          <p className="mt-3 text-indigo-900 leading-relaxed">
            SmartBilling focuses on speed, accuracy, and compliance —
            so you can bill confidently without worrying about GST
            calculations or formatting errors.
          </p>
        </section>

      </main>
    </div>
  );
}
