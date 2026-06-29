"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type CubicBezier = [number, number, number, number];
const ease: CubicBezier = [0.22, 1, 0.36, 1];

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#000000] py-[120px] px-6 lg:px-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
        {/* Left: text */}
        <div className="flex-1 flex flex-col gap-6">
          <FadeUp delay={0} className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#FF7F11]" />
            <span className="font-body text-[13px] font-medium text-[#FF7F11] uppercase tracking-[0.08em]">
              About Us
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              id="about-heading"
              className="font-display font-bold text-[44px] lg:text-[52px] leading-[1.05] tracking-tight text-porcelain"
            >
              Regina&apos;s Most Trusted Multi-Service Company
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="font-body text-[16px] text-khaki leading-relaxed">
              Magic Genie Services Inc. was founded with one mission: to give Regina homeowners and
              businesses access to premium-quality services without the premium price tag. We&apos;ve
              built our reputation on reliability, transparency, and results.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="font-body text-[16px] text-khaki leading-relaxed">
              From spotless residential cleans to full commercial contracting projects, from growth
              strategy consulting to full-stack digital marketing. We operate four specialized
              divisions under one roof so your business grows without the complexity of managing
              multiple vendors.
            </p>
          </FadeUp>

          <FadeUp delay={0.33} className="flex flex-wrap gap-4 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FF7F11] text-black font-body font-semibold text-[14px] px-7 py-3.5 rounded-[10px] hover:bg-[#FF9A3C] hover:scale-105 transition-all duration-200 active:scale-100"
            >
              Our Story
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center border border-white/15 text-porcelain font-body font-medium text-[14px] px-7 py-[13px] rounded-[10px] hover:bg-white/8 hover:border-white/25 transition-all duration-200"
            >
              Meet the Team
            </a>
          </FadeUp>
        </div>

        {/* Right: image + float card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="flex-1 relative"
        >
          <div className="relative w-full h-[420px] lg:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
              alt="Professional Magic Genie Services team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-5 -left-6 bg-[#FF7F11] rounded-2xl px-7 py-5 shadow-[0_12px_40px_rgba(255,127,17,0.35)]"
          >
            <p className="font-display font-bold text-[32px] text-black leading-none">10+</p>
            <p className="font-body text-[13px] font-semibold text-black/70 mt-1">
              Years Serving Regina
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
