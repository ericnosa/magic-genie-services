"use client";

import { motion } from "framer-motion";
import { Sparkles, HardHat, Briefcase, Megaphone, ArrowRight } from "lucide-react";

const divisions = [
  {
    icon: Sparkles,
    name: "Cleaning Division",
    subtitle: "Residential & Commercial",
    description:
      "From everyday home cleaning to specialized post-construction deep cleans, our certified team delivers immaculate results on every visit.",
    services: [
      "Residential Cleaning",
      "Commercial Cleaning",
      "Move In/Move Out",
      "Airbnb Cleaning",
      "Post-Construction",
      "Deep Cleaning",
    ],
    href: "#contact",
    featured: false,
  },
  {
    icon: HardHat,
    name: "Contracting Division",
    subtitle: "Renovation & Construction",
    description:
      "Full-service contracting for residential and commercial properties. Quality craftsmanship on time and on budget, every project.",
    services: [
      "Renovation Services",
      "Property Maintenance",
      "General Contracting",
      "Commercial Projects",
    ],
    href: "#contact",
    featured: false,
  },
  {
    icon: Briefcase,
    name: "Consulting Division",
    subtitle: "Strategy & Operations",
    description:
      "Our consulting arm helps Saskatchewan businesses identify inefficiencies, design better processes, and build growth strategies that work.",
    services: [
      "Business Consulting",
      "Operations Consulting",
      "Process Improvement",
      "Growth Strategy",
    ],
    href: "#contact",
    featured: false,
  },
  {
    icon: Megaphone,
    name: "Marketing Division",
    subtitle: "Digital & AI-Powered",
    description:
      "From website development to AI automation, we build the digital infrastructure businesses need to attract customers and scale efficiently.",
    services: [
      "Digital Marketing",
      "Website Development",
      "Social Media Management",
      "AI Automation Solutions",
    ],
    href: "#contact",
    featured: true,
  },
];

export default function Divisions() {

  return (
    <section
      id="services"
      className="w-full bg-[#050505] py-[120px] px-6 lg:px-20"
      aria-labelledby="divisions-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section header */}
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
              Our Four Divisions
            </span>
            <div className="w-8 h-[2px] bg-[#FF7F11]" />
          </div>
          <h2
            id="divisions-heading"
            className="font-display font-bold text-[44px] lg:text-[52px] text-porcelain tracking-tight leading-[1.05] max-w-[640px]"
          >
            One Company. Four Specialized Divisions.
          </h2>
          <p className="font-body text-[16px] text-khaki max-w-[500px] leading-relaxed">
            Each division is staffed by dedicated specialists, so you always get expert-level
            service, never a generalist approach.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {divisions.map((div, i) => {
            const Icon = div.icon;
            return (
              <motion.div
                key={div.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col gap-5 p-10 rounded-2xl border border-l-2 transition-all duration-300 ${
                  div.featured
                    ? "bg-[rgba(255,127,17,0.05)] border-[rgba(255,127,17,0.2)] border-l-orange-500/50 hover:border-[rgba(255,127,17,0.35)] hover:bg-[rgba(255,127,17,0.08)]"
                    : "bg-white/[0.03] border-white/[0.08] border-l-orange-500/50 hover:border-[rgba(255,127,17,0.25)] hover:bg-white/[0.05]"
                }`}
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4">
                  <Icon size={28} className="text-[#FF7F11] shrink-0" strokeWidth={1.8} />
                  <div>
                    <h3 className="font-display font-bold text-[22px] text-porcelain tracking-tight leading-tight">
                      {div.name}
                    </h3>
                    <p className="font-body text-[13px] text-[#FF7F11] font-medium mt-0.5">
                      {div.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-[15px] text-khaki leading-relaxed">{div.description}</p>

                {/* Service tags */}
                <div className="flex flex-wrap gap-2">
                  {div.services.map((svc) => (
                    <span
                      key={svc}
                      className="font-body text-[12px] font-medium text-white/55 bg-white/[0.06] rounded-[6px] px-3 py-1"
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <a
                  href={div.href}
                  className="inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-[#FF7F11] hover:gap-3 transition-all duration-200 group"
                >
                  Explore Services
                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
