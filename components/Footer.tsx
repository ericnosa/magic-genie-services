"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  Services: [
    "Residential Cleaning",
    "Commercial Cleaning",
    "Renovation & Contracting",
    "Business Consulting",
    "Digital Marketing",
    "AI Automation",
  ],
  Company: ["About Us", "Our Team", "Service Areas", "Careers", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};

export default function Footer() {
  const [cookieDismissed, setCookieDismissed] = useState(false);

  return (
    <>
      {/* Cookie consent banner */}
      <AnimatePresence>
        {!cookieDismissed && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-48px)] max-w-[700px] bg-[#111] border border-white/10 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
            role="dialog"
            aria-label="Cookie consent"
          >
            <p className="font-body text-[14px] text-white/70 leading-relaxed flex-1">
              We use cookies to improve your experience. By using our site, you agree to our{" "}
              <a href="#" className="text-[#FF7F11] hover:underline font-medium">Cookie Policy</a>.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => setCookieDismissed(true)}
                className="font-body text-[13px] font-medium text-white/50 hover:text-white/80 transition-colors px-4 py-2"
              >
                Decline
              </button>
              <button
                onClick={() => setCookieDismissed(true)}
                className="font-body text-[13px] font-semibold bg-[#FF7F11] text-black px-5 py-2 rounded-[8px] hover:bg-[#FF9A3C] transition-colors"
              >
                Accept
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-[#050505] border-t border-white/[0.06]" aria-label="Footer">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <a href="/" className="flex flex-col items-center gap-3" aria-label="Magic Genie Services">
                <Logo size="lg" className="mx-auto opacity-90" />
                <span className="font-display font-bold text-[17px] text-porcelain tracking-tight">
                  Magic Genie Services
                </span>
              </a>
              <p className="font-body text-[14px] text-khaki leading-relaxed max-w-[300px]">
                Regina&apos;s most trusted multi-service company. Licensed, insured, and committed
                to excellence across four specialized divisions.
              </p>
              <div className="flex gap-2.5">
                {[
                  { label: "Facebook", letter: "f" },
                  { label: "Instagram", letter: "ig" },
                  { label: "YouTube", letter: "▶" },
                  { label: "X", letter: "𝕏" },
                ].map(({ label, letter }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 bg-white/[0.05] border border-white/[0.08] rounded-[8px] flex items-center justify-center hover:bg-[rgba(255,127,17,0.1)] hover:border-[rgba(255,127,17,0.25)] transition-all duration-200"
                  >
                    <span className="text-white/50 text-[12px] font-bold leading-none">{letter}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-4">
                <p className="font-display font-semibold text-[13px] text-porcelain uppercase tracking-[0.07em]">
                  {section}
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-body text-[14px] text-khaki hover:text-porcelain hover:translate-x-0.5 transition-all duration-200 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.06] mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-body text-[13px] text-white/30">
              © {new Date().getFullYear()} Magic Genie Services Inc. · Regina, Saskatchewan, Canada ·
              All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-body text-[13px] text-white/30 hover:text-white/60 transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#FF7F11]" strokeWidth={2} />
                <span className="font-body text-[13px] text-white/30">Regina, SK · Canada</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
