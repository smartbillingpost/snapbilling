import { NavLink } from "react-router-dom";
import logo from "../assets/snapbilling_logo.jpeg";

const APK_LINK = "https://drive.google.com/file/d/1uRTkUelqwJtLRdDbmiySEIZmCGUNFcwC/view?usp=drive_link";

export default function Header() {
  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-200
     ${
       isActive
         ? "text-indigo-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-indigo-600"
         : "text-slate-600 hover:text-slate-900"
     }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* ✅ Fixed: correct alt text, logo now uses snapbilling_logo.jpeg */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="SnapBilling logo"
              className="h-9 w-9 rounded-md object-contain"
            />
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              SnapBilling
            </span>
          </NavLink>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/product" className={linkClass}>Product</NavLink>
            <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>

            {/* ✅ Primary download CTA in header */}
            <a
              href={APK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2
                         text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              ⬇ Download APK
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
