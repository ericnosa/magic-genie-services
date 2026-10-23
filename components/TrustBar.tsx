"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Sparkles, Users, Repeat, MapPin } from "lucide-react";

const items = [
  { icon: Shield, label: "Flat, Upfront Pricing" },
  { icon: Clock, label: "On-Time Guaranteed" },
  { icon: Sparkles, label: "Hotel Quality Standard" },
  { icon: Users, label: "Expert Local Team" },
  { icon: Repeat, label: "Satisfaction Guaranteed" },
  { icon: MapPin, label: "Regina & Saskatchewan" },
];

export default function TrustBar() {
  return (
    <div className="w-full bg-[#0A0A0A] border-y border-white/[0.06]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1440px] mx-auto px-6 lg:px-20 py-[22px] flex flex-wrap items-center justify-between gap-4"
      >
        {items.map(({ icon: Icon, label }, i) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={18} className="text-[#FF7F11] shrink-0" strokeWidth={2} />
            <span className="font-body text-[13px] font-semibold text-porcelain whitespace-nowrap">
              {label}
            </span>
            {i < items.length - 1 && (
              <div className="hidden lg:block w-px h-6 bg-white/8 ml-4" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
