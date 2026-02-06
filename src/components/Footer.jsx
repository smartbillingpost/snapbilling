import { NavLink } from "react-router-dom";

const year = new Date().getFullYear();

export default function Footer() {
  const linkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-white font-medium"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 text-sm">

          {/* Brand */}
          <div>
            <div className="text-lg font-semibold text-white">
              SmartBilling
            </div>
            <p className="mt-3 max-w-sm text-slate-400 leading-relaxed">
              Billing, GST compliance, GSTR reconciliation and
              business intelligence for Indian MSMEs.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:mx-auto">
            <div className="mb-3 font-medium text-white">
              Product
            </div>
            <div className="flex flex-col space-y-2">
              <NavLink to="/product" className={linkClass}>Product</NavLink>
              <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
              <NavLink to="/privacy" className={linkClass}>Privacy</NavLink>
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="mb-3 font-medium text-white">
              Support
            </div>
            <div className="space-y-2 text-slate-400 text-xs">
              <div>
                smartbillingpost@gmail.com
              </div>
              <div>
                smartbilling365@gmail.com
              </div>
              <div>
                7990024608, 7048504990
              </div>
              <div className="pt-2 text-slate-500">
                GST-ready • Built for MSMEs • India
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
          © {year} SmartBilling. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
