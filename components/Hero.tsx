"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate", accent: true },
  { value: "#1", label: "Rated in Regina" },
];

type CubicBezier = [number, number, number, number];
const EASE: CubicBezier = [0.22, 1, 0.36, 1];

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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Orange ambient glow, bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(255,127,17,0.18) 0%, rgba(255,127,17,0.04) 45%, transparent 70%)",
        }}
      />
      {/* Subtle top-right counter-glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(255,127,17,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[960px] mx-auto pt-28 pb-12">
        {/* Logo */}
        <FadeUp delay={0.05} className="mb-6">
          <Logo size="xl" glow className="mx-auto" priority />
        </FadeUp>

        {/* Animated badge */}
        <FadeUp delay={0.1} className="mb-9">
          <div className="inline-flex items-center gap-2.5 bg-[rgba(255,127,17,0.1)] border border-[rgba(255,127,17,0.25)] rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F11] animate-pulse" />
            <span className="font-body text-[13px] font-medium text-[#FF7F11] tracking-[0.04em]">
              Regina&apos;s Premier Service Company
            </span>
            <MapPin size={12} className="text-[#FF7F11]" />
          </div>
        </FadeUp>

        {/* Main headline */}
        <FadeUp delay={0.2}>
          <h1
            id="hero-headline"
            className="font-display font-bold tracking-tight"
            style={{ fontSize: "clamp(42px, 5.5vw, 72px)", lineHeight: 1.06, letterSpacing: "-0.03em" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFC 0%, #FF7F11 45%, #FFFFFC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Professional Cleaning, Contracting, Consulting &amp; Marketing Solutions.
            </span>
          </h1>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.3}>
          <p className="mt-7 font-body text-[17px] font-normal leading-relaxed text-white/60 max-w-[580px]">
            Helping homes and businesses across Regina and Saskatchewan operate more efficiently
            through premium service solutions.
          </p>
        </FadeUp>

        {/* CTA buttons */}
        <FadeUp delay={0.4} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#FF7F11] text-black font-body font-semibold text-[15px] px-8 py-4 rounded-xl hover:bg-[#FF9A3C] hover:scale-105 transition-all duration-200 active:scale-100 shadow-[0_8px_32px_rgba(255,127,17,0.25)]"
          >
            Request a Free Quote
            <ArrowRight size={17} strokeWidth={2.5} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-white/20 text-porcelain font-body font-medium text-[15px] px-8 py-[15px] rounded-xl hover:bg-white/8 hover:border-white/30 transition-all duration-200"
          >
            View Our Services
          </a>
        </FadeUp>
      </div>

      {/* Floating stats row */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
        className="relative z-10 flex flex-wrap justify-center gap-4 px-6 pb-16"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-5 flex flex-col items-center gap-1 min-w-[140px] hover:border-[rgba(255,127,17,0.25)] hover:bg-white/[0.06] transition-all duration-300"
          >
            <span
              className={`font-display font-bold text-[32px] leading-none tracking-tight ${
                stat.accent ? "text-[#FF7F11]" : "text-porcelain"
              }`}
            >
              {stat.value}
            </span>
            <span className="font-body text-[13px] font-medium text-khaki">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
