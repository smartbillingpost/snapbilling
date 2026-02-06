import React from "react";

export default function Help() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Page Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Help, Documentation & Support
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Comprehensive guidance and responsive support to help you use
            SmartBilling confidently.
          </p>
        </div>

        {/* Introduction */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Support Designed for Everyone
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            SmartBilling is built for business owners, accountants, and
            non-technical users. Clear guidance and timely support ensure that
            you can focus on your business without worrying about software
            complexity.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Whether you are creating invoices, filing GST returns, or generating
            reports, help is always within reach.
          </p>
        </section>

        {/* What support includes */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            What Support Includes
          </h2>

          <ul className="mt-5 space-y-3 text-slate-700">
            <li>
              <strong>Detailed In-App Help:</strong> Contextual help files
              available directly inside the application.
            </li>
            <li>
              <strong>Step-by-Step Guidance:</strong> Clear instructions for
              common tasks and workflows.
            </li>
            <li>
              <strong>Online Support:</strong> Get quick assistance when you
              need help or clarification.
            </li>
            <li>
              <strong>Non-Technical Friendly:</strong> Written in simple,
              easy-to-understand language.
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            How This Helps You
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Faster Learning
              </h3>
              <p className="mt-1 text-slate-600">
                Understand features quickly without external training.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Fewer Errors
              </h3>
              <p className="mt-1 text-slate-600">
                Avoid mistakes with clear instructions and guidance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Confidence in Usage
              </h3>
              <p className="mt-1 text-slate-600">
                Use SmartBilling effectively, even for complex GST workflows.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ✔ Reliable Assistance
              </h3>
              <p className="mt-1 text-slate-600">
                Know where to turn when you need support.
              </p>
            </div>
          </div>
        </section>

        {/* Getting help */}
        <section className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-8">
          <h2 className="text-xl font-semibold text-indigo-900">
            Getting Help When You Need It
          </h2>
          <ul className="mt-4 space-y-2 text-indigo-900">
            <li>• Browse in-app documentation for quick answers</li>
            <li>• Follow step-by-step guides for common tasks</li>
            <li>• Contact support for personalized assistance</li>
          </ul>
        </section>

        {/* Contact Support */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Contact SmartBilling Support
          </h2>

          <p className="mt-3 text-slate-600">
            If you need direct assistance, feel free to reach out to our support
            team using the contact details below.
          </p>

          <div className="mt-5 space-y-3 text-slate-700">
            <p>
              📧 <strong>Email:</strong>{" "}
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
            </p>

            <p>
              📞 <strong>Phone:</strong>{" "}
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
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
