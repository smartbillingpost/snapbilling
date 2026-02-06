import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-gray-600">
          Your privacy and data security are important to us.
        </p>

        {/* Overview */}
        <section className="mt-10 bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-semibold text-gray-800">
            Our Commitment to Privacy
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            SmartBilling is committed to protecting your personal and business
            data. We collect and use information only to provide and improve our
            services.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            We do not sell or misuse your data under any circumstances.
          </p>
        </section>

        {/* Data Usage */}
        <section className="mt-10 bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-semibold text-gray-800">
            Information We Handle
          </h2>

          <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
            <li>Business data such as invoices, clients, and products</li>
            <li>GST and compliance-related records</li>
            <li>Basic account and usage information</li>
          </ul>
        </section>

        {/* Security */}
        <section className="mt-10 bg-white rounded-2xl border p-8">
          <h2 className="text-xl font-semibold text-gray-800">
            Data Security
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational safeguards to
            protect your data from unauthorized access, loss, or misuse.
          </p>
        </section>

        {/* Transparency */}
        <section className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-blue-900">
            Transparency & Control
          </h2>
          <p className="mt-3 text-blue-900">
            You remain the owner of your data. You can export, back up, or
            migrate your information at any time using SmartBilling features.
          </p>
        </section>

      </div>
    </div>
  );
}
