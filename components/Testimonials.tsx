"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Kowalski",
    role: "Airbnb Host · Regina",
    division: "Cleaning",
    text: "Magic Genie's cleaning team transformed our Airbnb property. Our guest ratings jumped from 4.2 to 4.9 after just three cleans. They're reliable, thorough, and communicate everything upfront.",
  },
  {
    name: "Dave Marchetti",
    role: "Homeowner · Regina",
    division: "Contracting",
    text: "We hired Magic Genie for a full basement renovation. They finished ahead of schedule, stayed under budget, and the quality exceeded what larger contractors quoted us at three times the price.",
  },
  {
    name: "Priya Naidoo",
    role: "CEO, Prairie Logistics · Saskatoon",
    division: "Consulting",
    text: "Their consulting team helped us streamline our entire dispatch operation. Within 60 days, overhead dropped 18% and we were handling 30% more jobs. The ROI was immediate and measurable.",
  },
  {
    name: "Tyler Braun",
    role: "Owner, Braun Plumbing Co. · Regina",
    division: "Marketing",
    text: "Magic Genie built our new website and set up our Google Ads campaign. In the first month, we had 47 inbound calls. That was more than the entire previous quarter combined.",
  },
  {
    name: "Melissa Fontaine",
    role: "Homeowner · Moose Jaw, SK",
    division: "Cleaning",
    text: "The move-out clean was flawless. Our landlord kept our full damage deposit and even asked who we used. Magic Genie was on time, professional, and the apartment looked better than when we moved in.",
  },
  {
    name: "Gordon Tran",
    role: "Property Manager · Regina",
    division: "Contracting",
    text: "We brought Magic Genie in to handle commercial maintenance on three properties. Two years later, they still haven't missed a single scheduled visit. That kind of reliability is almost impossible to find.",
  },
];

const divisionColors: Record<string, string> = {
  Cleaning: "bg-[rgba(255,127,17,0.1)] text-[#FF7F11] border-[rgba(255,127,17,0.2)]",
  Contracting: "bg-[rgba(255,127,17,0.1)] text-[#FF7F11] border-[rgba(255,127,17,0.2)]",
  Consulting: "bg-[rgba(255,127,17,0.1)] text-[#FF7F11] border-[rgba(255,127,17,0.2)]",
  Marketing: "bg-[rgba(255,127,17,0.1)] text-[#FF7F11] border-[rgba(255,127,17,0.2)]",
};

function StarRow() {
  return (
    <div className="flex gap-1" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#FF7F11" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#000000] py-[120px] px-6 lg:px-20"
      aria-labelledby="testimonials-heading"
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
              Client Stories
            </span>
            <div className="w-8 h-[2px] bg-[#FF7F11]" />
          </div>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-[44px] lg:text-[52px] text-porcelain tracking-tight leading-[1.05]"
          >
            What Regina Says About Us
          </h2>
        </motion.div>

        {/* Testimonial grid, 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col gap-5 p-8 rounded-2xl border transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,127,17,0.08)] ${
                i === 5
                  ? "bg-[rgba(255,127,17,0.05)] border-[rgba(255,127,17,0.18)] hover:border-[rgba(255,127,17,0.3)]"
                  : "bg-white/[0.025] border-white/[0.07] hover:border-white/[0.12]"
              }`}
              aria-label={`Testimonial from ${t.name}`}
            >
              <StarRow />
              <blockquote className="font-body text-[15px] text-white/80 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold text-[15px] text-porcelain">{t.name}</p>
                  <p className="font-body text-[13px] text-khaki mt-0.5">{t.role}</p>
                </div>
                <span
                  className={`font-body text-[11px] font-semibold border rounded-full px-3 py-1 ${divisionColors[t.division]}`}
                >
                  {t.division}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
