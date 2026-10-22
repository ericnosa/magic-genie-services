"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, Repeat, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description:
      "Every team member is vetted, trained, and covered under our comprehensive liability insurance. You're protected on every job.",
  },
  {
    icon: Clock,
    title: "On-Time Guaranteed",
    description:
      "We respect your schedule. If we're late without prior notice, your service is discounted. No excuses. We show up when we say.",
  },
  {
    icon: Repeat,
    title: "Hotel Quality Standard",
    description:
      "Every clean follows the same written checklist and ends with a photographic check, so the standard does not depend on who shows up.",
  },
  {
    icon: Users,
    title: "Expert Local Team",
    description:
      "Our team is born and raised in Saskatchewan. We understand local needs, climate, building standards, and what Regina clients expect.",
  },
  {
    icon: Repeat,
    title: "Satisfaction Guaranteed",
    description:
      "Not happy? We come back and make it right at no extra cost. Your satisfaction isn't a policy, it's our promise.",
  },
  {
    icon: MapPin,
    title: "Regina & Saskatchewan Based",
    description:
      "We're a proudly local company. Every dollar you spend with us stays in our community and supports Saskatchewan families.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="w-full bg-[#000000] py-[120px] px-6 lg:px-20"
      aria-labelledby="why-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-[72px] text-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#FF7F11]" />
            <span className="font-body text-[13px] font-medium text-[#FF7F11] uppercase tracking-[0.08em]">
              Why Choose Us
            </span>
            <div className="w-8 h-[2px] bg-[#FF7F11]" />
          </div>
          <h2
            id="why-heading"
            className="font-display font-bold text-[44px] lg:text-[52px] text-porcelain tracking-tight leading-[1.05]"
          >
            The Magic Genie Difference
          </h2>
        </motion.div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 p-9 bg-white/[0.02] border border-white/[0.07] border-l-2 border-l-orange-500/50 rounded-[18px] hover:border-[rgba(255,127,17,0.2)] hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <Icon size={28} className="text-[#FF7F11]" strokeWidth={1.8} />
              <h3 className="font-display font-semibold text-[19px] text-porcelain tracking-tight leading-snug">
                {title}
              </h3>
              <p className="font-body text-[14px] text-khaki leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
