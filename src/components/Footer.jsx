import { NavLink } from "react-router-dom";
//import logo from "../assets/snapbilling_logo.jpeg";
import logo from "../assets/logo.png";


const APK_LINK = "https://drive.google.com/file/d/1uRTkUelqwJtLRdDbmiySEIZmCGUNFcwC/view?usp=drive_link";
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
            {/* ✅ Added: logo in footer */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logo}
                alt="SnapBilling logo"
                className="h-8 w-8 rounded-md object-contain"
              />
              <div className="text-lg font-semibold text-white">
                SnapBilling
              </div>
            </div>
            <p className="max-w-sm text-slate-400 leading-relaxed">
              Billing, GST compliance, GSTR reconciliation and
              business intelligence for Indian MSMEs.
            </p>
            {/* ✅ Added: Download APK button in footer */}
            <a
              href={APK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600
                         px-4 py-2 text-xs font-semibold text-white
                         transition hover:bg-indigo-700"
            >
              ⬇ Download APK Free (v1.0 · 6.1 MB)
            </a>
          </div>

          {/* Navigation */}
          <div className="md:mx-auto">
            <div className="mb-3 font-medium text-white">
              Product
            </div>
            <div className="flex flex-col space-y-2">
              <NavLink to="/product"  className={linkClass}>Features</NavLink>
              <NavLink to="/pricing"  className={linkClass}>Pricing</NavLink>
              <NavLink to="/contact"  className={linkClass}>Contact</NavLink>
              <NavLink to="/privacy"  className={linkClass}>Privacy Policy</NavLink>
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="mb-3 font-medium text-white">
              Support
            </div>
            <div className="space-y-2 text-slate-400 text-xs">
              <div>
                <a href="mailto:snapbillingpost@gmail.com"
                   className="hover:text-white transition-colors">
                  snapbillingpost@gmail.com
                </a>
              </div>
              <div>
                <a href="mailto:smartbillingpost@gmail.com"
                   className="hover:text-white transition-colors">
                  smartbillingpost@gmail.com
                </a>
              </div>
              {/* ✅ Added: WhatsApp link */}
              <div>
                <a
                  href="https://wa.me/917990024608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 79900 24608
                </a>
              </div>
              <div>+91 70485 04990</div>
              {/* ✅ Fixed encoding: â€¢ → • */}
              <div className="pt-2 text-slate-500">
                GST-ready • Built for MSMEs • India 🇮🇳
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        {/* ✅ Fixed encoding: Â© → © */}
        <div className="mt-10 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
          © {year} SnapBilling. All rights reserved. Made with ❤️ in India.
        </div>

      </div>
    </footer>
  );
}
