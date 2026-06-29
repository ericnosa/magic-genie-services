"use client";

import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";

const areas = [
  "Regina",
  "Moose Jaw",
  "Saskatoon",
  "Swift Current",
  "Prince Albert",
  "Weyburn",
  "Estevan",
  "Yorkton",
];

export default function ServiceAreas() {
  return (
    <section
      id="areas"
      className="w-full bg-[#050505] py-[120px] px-6 lg:px-20"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left: map callout visual */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 relative"
        >
          <div className="relative w-full aspect-square max-w-[480px] mx-auto lg:mx-0">
            {/* Background circle glow */}
            <div className="absolute inset-0 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,127,17,0.12) 0%, transparent 70%)" }}
            />
            {/* Province silhouette placeholder */}
            <div className="absolute inset-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col items-center justify-center gap-4">
              <MapPin size={40} className="text-[#FF7F11]" strokeWidth={1.5} />
              <div className="text-center">
                <p className="font-display font-bold text-[28px] text-porcelain tracking-tight">Saskatchewan</p>
                <p className="font-body text-[14px] text-khaki mt-1">Province-wide coverage</p>
              </div>
              {/* Pulsing dot for Regina */}
              <div className="relative mt-2">
                <div className="w-3 h-3 rounded-full bg-[#FF7F11]" />
                <div className="absolute inset-0 rounded-full bg-[#FF7F11] animate-ping opacity-40" />
              </div>
              <p className="font-body text-[13px] font-semibold text-[#FF7F11]">
                HQ: Regina, SK
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: text + area list */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex flex-col gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#FF7F11]" />
              <span className="font-body text-[13px] font-medium text-[#FF7F11] uppercase tracking-[0.08em]">
                Service Areas
              </span>
            </div>
            <h2
              id="areas-heading"
              className="font-display font-bold text-[44px] lg:text-[50px] text-porcelain tracking-tight leading-[1.05] mb-5"
            >
              Proudly Serving Regina &amp; All of Saskatchewan
            </h2>
            <p className="font-body text-[16px] text-khaki leading-relaxed">
              Based in Regina, our teams travel across Saskatchewan to bring Magic Genie quality
              to homes and businesses province-wide. Distance is never a barrier.
            </p>
          </div>

          {/* Area grid */}
          <div className="grid grid-cols-2 gap-3">
            {areas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors duration-200 ${
                  area === "Regina"
                    ? "bg-[rgba(255,127,17,0.08)] border-[rgba(255,127,17,0.25)]"
                    : "bg-white/[0.03] border-white/[0.07] hover:border-white/[0.14]"
                }`}
              >
                <Check
                  size={15}
                  className={area === "Regina" ? "text-[#FF7F11]" : "text-white/40"}
                  strokeWidth={2.5}
                />
                <span
                  className={`font-body text-[14px] font-medium ${
                    area === "Regina" ? "text-[#FF7F11]" : "text-white/70"
                  }`}
                >
                  {area}
                  {area === "Regina" && (
                    <span className="ml-2 text-[11px] font-semibold bg-[#FF7F11] text-black px-2 py-0.5 rounded-full">
                      HQ
                    </span>
                  )}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="font-body text-[13px] text-khaki/70">
            Don&apos;t see your city? We likely serve your area.{" "}
            <a href="#contact" className="text-[#FF7F11] font-medium hover:underline">
              Contact us to confirm coverage →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
