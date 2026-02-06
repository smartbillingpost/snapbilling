export default function ClientProductManagement() {
  return (
    <div className="bg-slate-50">
      <main className="mx-auto max-w-7xl px-6 py-20 space-y-16">

        {/* Page Header */}
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Client & Product Management
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Centralized master data for clients and products —
            accurate, reusable, and consistent across the system.
          </p>
        </section>

        {/* Client Management */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Client Management
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li>✔ Maintain complete client master details</li>
            <li>✔ GST and Non-GST client support</li>
            <li>✔ Automatic classification for B2B / B2C</li>
            <li>✔ Outstanding balance and history tracking</li>
          </ul>
        </section>

        {/* Product Management */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Product Management
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li>✔ Centralized product master</li>
            <li>✔ GST rate, HSN and unit configuration</li>
            <li>✔ Price, tax and stock consistency</li>
            <li>✔ Reusable across invoices and reports</li>
          </ul>
        </section>

        {/* Business Value */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Why This Matters
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li>✔ Eliminates duplicate data entry</li>
            <li>✔ Prevents billing and GST errors</li>
            <li>✔ Ensures accurate reports and returns</li>
            <li>✔ Saves time in daily operations</li>
          </ul>
        </section>

        {/* Continuity */}
        <section className="rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-indigo-900">
            Built for Long-Term Use
          </h2>
          <ul className="space-y-3 text-indigo-900">
            <li>✔ Works offline</li>
            <li>✔ Data remains in your control</li>
            <li>✔ Seamlessly connects with billing, GST, and reports</li>
          </ul>
        </section>

      </main>
    </div>
  );
}
