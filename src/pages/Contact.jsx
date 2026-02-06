import React from "react";

export default function Contact() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Page Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            We’re here to help you with SmartBilling.
          </p>
        </div>

        {/* Intro */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Whether you need product assistance, have questions about features,
            or want help with GST compliance, our support team is ready to help.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We aim to respond quickly and provide clear, practical guidance.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            How You Can Reach Us
          </h2>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li>
              <strong>Email Support:</strong>{" "}
              <a
                href="mailto:smartbillingpost@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                smartbillingpost@gmail.com
              </a>
              ,{" "}
              <a
                href="mailto:smartbilling365@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                smartbilling365@gmail.com
              </a>
            </li>

            <li>
              <strong>Phone Support:</strong>{" "}
              <a
                href="tel:7990024608"
                className="text-indigo-600 hover:underline"
              >
                7990024608
              </a>
              ,{" "}
              <a
                href="tel:7048504990"
                className="text-indigo-600 hover:underline"
              >
                7048504990
              </a>
            </li>

            <li>
              <strong>In-App Help:</strong> Access contextual help directly
              inside SmartBilling.
            </li>

            <li>
              <strong>Online Assistance:</strong> Reach out for guided support
              when needed.
            </li>
          </ul>
        </section>

        {/* Availability */}
        <section className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
          <h2 className="text-xl font-semibold text-indigo-900">
            Support Availability
          </h2>
          <p className="mt-3 text-indigo-900 leading-relaxed">
            Our support services are designed to assist business owners,
            accountants, and non-technical users with clarity and confidence.
          </p>
        </section>

      </div>
    </div>
  );
}
