import { NavLink } from "react-router-dom";

const APK_LINK = "https://drive.google.com/file/d/1uRTkUelqwJtLRdDbmiySEIZmCGUNFcwC/view?usp=drive_link";
const WA_LINK  = "https://wa.me/917990024608?text=Hi%2C%20I%20would%20like%20a%20demo%20of%20SnapBilling%20app";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">

      {/* ── Flashing Promo Banner ──────────────────────────── */}
      <style>{`
        @keyframes flash-border {
          0%, 100% { box-shadow: 0 0 0 2px #f97316, 0 0 16px 2px #fbbf2488; }
          50%       { box-shadow: 0 0 0 2px #ef4444, 0 0 28px 6px #ef444466; }
        }
        @keyframes pulse-text {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.75; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50%       { transform: rotate(1deg); }
        }
        .promo-banner {
          animation: flash-border 1.2s ease-in-out infinite;
        }
        .promo-badge {
          animation: wiggle 1.5s ease-in-out infinite;
        }
        .promo-cta {
          animation: pulse-text 1.2s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Content ─────────────────────────────── */}
          <div>

            {/* ✅ Trust badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border
                            border-indigo-200 bg-indigo-50 px-4 py-1.5
                            text-xs font-semibold text-indigo-700">
              🇮🇳 Made for Indian Small Businesses
            </div>

            {/* ✅ Fixed encoding + stronger headline */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Bill Smarter.<br />
              Stay <span className="text-indigo-600">GST-Ready</span>.<br />
              Work Offline.
            </h1>

            {/* ✅ Cleaner subheadline, no duplicate words */}
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              SnapBilling is a simple offline GST billing app for Indian retail
              shops, distributors, accountants and small businesses. Create
              invoices, track expenses, and manage GST — even without internet.
            </p>

            {/* 🔥 Flashing Promo Box */}
            <div className="promo-banner mt-7 flex items-center justify-between gap-4
                            rounded-2xl border-2 border-orange-400
                            bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50
                            px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="promo-badge text-2xl select-none">🎉</span>
                <div>
                  <p className="text-sm font-extrabold text-orange-700 leading-tight">
                    Enjoy FREE Trial for 3 Months!
                  </p>
                  <p className="text-xs text-orange-500 font-medium mt-0.5">
                    ⏳ Limited-time offer — closes soon
                  </p>
                </div>
              </div>
              <NavLink
                to="/get-started"
                className="promo-cta flex-shrink-0 rounded-xl bg-orange-500 px-4 py-2
                           text-xs font-bold text-white shadow-md
                           transition hover:bg-orange-600 hover:shadow-lg"
              >
                Register Now →
              </NavLink>
            </div>

            {/* ✅ Three CTAs: Download APK + WhatsApp + Enquire */}
            <div className="mt-6 flex flex-wrap gap-3">

              {/* Primary: Download APK */}
              <a
                href={APK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5
                           text-sm font-semibold text-white shadow-md
                           transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm-1 13.586L6.707 11.29l1.414-1.414L11 12.757V7h2v5.757l2.879-2.88 1.414 1.414L12 15.586z"/>
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-xs font-normal opacity-75">Free Direct Download</span>
                  <span className="font-bold">Download APK v1.0</span>
                </span>
              </a>

              {/* Secondary: WhatsApp Demo */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5
                           text-sm font-semibold text-white shadow-md
                           transition hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Demo
              </a>

              {/* Tertiary: Enquire */}
              <NavLink
                to="/contact"
                className="flex items-center gap-2 rounded-xl border border-slate-300
                           bg-white px-6 py-3.5 text-sm font-semibold text-slate-700
                           transition hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50"
              >
                Enquire Now →
              </NavLink>
            </div>

            {/* ✅ APK info badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border
                            border-green-200 bg-green-50 px-4 py-2
                            text-xs font-semibold text-green-700">
              📦 SnapBilling v1.0 &nbsp;·&nbsp;
              <span className="font-normal text-green-600">Android APK · 6.1 MB · Free</span>
            </div>

            {/* ✅ Social proof stats */}
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">100%</span>
                <span className="text-xs text-slate-400 font-medium">Works offline</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">Free</span>
                <span className="text-xs text-slate-400 font-medium">No hidden charges</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">6.1 MB</span>
                <span className="text-xs text-slate-400 font-medium">Lightweight app</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">GST</span>
                <span className="text-xs text-slate-400 font-medium">Fully compliant</span>
              </div>
            </div>

          </div>

          {/* ── Right: Phone Mockup ────────────────────────── */}
          <div className="flex justify-center lg:justify-end relative">

            {/* Floating badge: left */}
            <div className="absolute left-0 top-20 hidden lg:flex items-center gap-2
                            rounded-xl border border-slate-200 bg-white px-3 py-2
                            text-xs font-semibold text-slate-700 shadow-md
                            animate-bounce">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Invoice sent on WhatsApp ✓
            </div>

            {/* Phone frame */}
            <div className="relative w-60 rounded-[2.5rem] border-[7px] border-slate-800
                            bg-slate-800 shadow-2xl overflow-hidden">

              {/* Notch */}
              <div className="mx-auto h-5 w-20 rounded-b-xl bg-slate-800 relative z-10"></div>

              {/* Screen */}
              <div className="bg-white flex flex-col gap-2 p-3 min-h-[460px]">

                {/* App header bar */}
                <div className="flex items-center justify-between rounded-lg bg-indigo-600 px-3 py-2.5">
                  <div>
                    <p className="text-[10px] font-bold text-white">SnapBilling</p>
                    <p className="text-[8px] text-indigo-200">Dashboard</p>
                  </div>
                  <span className="text-sm">📊</span>
                </div>

                {/* Invoice card */}
                <div className="rounded-lg border border-slate-200 p-2.5 flex flex-col gap-1.5">
                  <div className="flex justify-between text-[9px] text-slate-500">
                    <span>Invoice #1042</span>
                    <span className="font-semibold text-slate-800">Sharma Stores</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">3 items</span>
                    <span className="font-bold text-indigo-600">₹ 4,720</span>
                  </div>
                  <div className="h-px bg-slate-100"></div>
                  <div className="flex justify-between rounded bg-green-50 px-2 py-1 text-[8px] text-green-700">
                    <span>✓ GST @ 18%</span>
                    <span>₹ 720</span>
                  </div>
                </div>

                {/* Share button */}
                <div className="rounded-lg bg-indigo-600 py-2 text-center text-[9px]
                                font-bold text-white">
                  📤 Share on WhatsApp
                </div>

                {/* Mini stats grid */}
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { label: "Today's Sales", value: "₹ 18,400" },
                    { label: "Pending Bills", value: "₹ 6,200" },
                    { label: "GST Payable",   value: "₹ 2,808" },
                    { label: "Stock Value",   value: "₹ 1.2L"  },
                  ].map((s) => (
                    <div key={s.label}
                         className="rounded-lg bg-slate-50 p-2 flex flex-col gap-0.5">
                      <span className="text-[7px] text-slate-400">{s.label}</span>
                      <span className="text-[10px] font-bold text-slate-800">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Offline badge */}
                <div className="flex items-center gap-1.5 rounded-lg border border-yellow-200
                                bg-yellow-50 px-2 py-1.5 text-[8px] font-semibold text-yellow-800">
                  📴 Working offline — no internet needed
                </div>

              </div>
            </div>

            {/* Floating badge: right */}
            <div className="absolute right-0 bottom-24 hidden lg:flex items-center gap-2
                            rounded-xl border border-slate-200 bg-white px-3 py-2
                            text-xs font-semibold text-slate-700 shadow-md
                            animate-bounce [animation-delay:0.5s]">
              <span className="h-2 w-2 rounded-full bg-orange-400"></span>
              GST Report Ready ✓
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
