"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Globe, ArrowRight, Loader2, CheckCircle } from "lucide-react";

const servicesByDivision: Record<string, string[]> = {
  Cleaning: [
    "Residential Cleaning",
    "Commercial Cleaning",
    "Move In/Move Out",
    "Airbnb Cleaning",
    "Post-Construction Cleaning",
    "Deep Cleaning",
  ],
  Contracting: [
    "Renovation Services",
    "Property Maintenance",
    "General Contracting",
    "Commercial Projects",
  ],
  Consulting: [
    "Business Consulting",
    "Operations Consulting",
    "Process Improvement",
    "Growth Strategy",
  ],
  Marketing: [
    "Digital Marketing",
    "Website Development",
    "Social Media Management",
    "AI Automation Solutions",
  ],
};

const inputClass =
  "w-full bg-white/[0.04] border border-white/[0.1] rounded-[10px] px-4 py-3.5 font-body text-[15px] text-porcelain placeholder:text-white/30 focus:border-[rgba(255,127,17,0.5)] focus:outline-none focus:ring-1 focus:ring-[rgba(255,127,17,0.3)] transition-all duration-200";

const labelClass = "font-body text-[13px] font-medium text-white/60 block mb-2";

// Where the quote request is delivered. Defaults to the live Magic Genie API, whose
// /api/contact endpoint accepts cross-origin posts; override with NEXT_PUBLIC_CONTACT_ENDPOINT.
const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "https://magicgenieservices.ca/api/contact";

export default function ContactForm() {
  const [division, setDivision] = useState("");
  const [contact, setContact] = useState<"Email" | "Phone" | "Either">("Email");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // This used to wait 1.5s and then report success without sending anything, so every
  // quote request was silently discarded. It now posts to the API and only reports success
  // when the request is actually accepted.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const service = get("service");
    const property = get("property");
    const description = get("description");

    const message = [
      `Division: ${division}`,
      service ? `Service: ${service}` : "",
      property ? `Property type: ${property}` : "",
      `Preferred contact: ${contact}`,
      "",
      description,
    ].filter(Boolean).join("\n");

    setStatus("loading");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, kind: "commercial_quote" }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#050505] py-[120px] px-6 lg:px-20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-[380px] flex flex-col gap-8 shrink-0"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#FF7F11]" />
              <span className="font-body text-[13px] font-medium text-[#FF7F11] uppercase tracking-[0.08em]">
                Get In Touch
              </span>
            </div>
            <h2
              id="contact-heading"
              className="font-display font-bold text-[40px] lg:text-[48px] text-porcelain tracking-tight leading-[1.05] mb-5"
            >
              Request Your Free Quote Today
            </h2>
            <p className="font-body text-[16px] text-khaki leading-relaxed">
              Tell us what you need and we&apos;ll follow up within 2 business hours with a
              no-obligation quote tailored to your project.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              { icon: Phone, label: "Phone", value: "236 506 9800", href: "tel:+12365069800" },
              { icon: MapPin, label: "Location", value: "Regina, Saskatchewan, Canada", href: null },
              { icon: Globe, label: "Website", value: "magicgenieservices.ca", href: "https://magicgenieservices.ca" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <Icon size={28} className="text-[#FF7F11] shrink-0" strokeWidth={1.8} />
                <div>
                  <p className="font-body text-[12px] text-khaki font-medium mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="font-display font-semibold text-[15px] text-porcelain hover:text-[#FF7F11] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="font-display font-semibold text-[15px] text-porcelain">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 bg-white/[0.025] border border-white/[0.07] rounded-2xl p-8 lg:p-12"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-5 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[rgba(255,127,17,0.12)] flex items-center justify-center">
                <CheckCircle size={32} className="text-[#FF7F11]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-[28px] text-porcelain tracking-tight">
                Quote Request Sent!
              </h3>
              <p className="font-body text-[16px] text-khaki max-w-[360px] leading-relaxed">
                We&apos;ve received your request and will follow up within 2 business hours.
                Thank you for choosing Magic Genie Services!
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 font-body text-[14px] font-medium text-[#FF7F11] hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : status === "error" ? (
            <div className="flex flex-col items-center gap-5 py-16 text-center" role="alert">
              <h3 className="font-display font-bold text-[28px] text-porcelain tracking-tight">
                We couldn&apos;t send that.
              </h3>
              <p className="font-body text-[16px] text-khaki max-w-[420px] leading-relaxed">
                Your request was not submitted, so please don&apos;t wait on it. Call{" "}
                <a href="tel:+12365069800" className="text-[#FF7F11] hover:underline">236 506 9800</a>{" "}
                or email{" "}
                <a href="mailto:info@magicgenieservices.ca" className="text-[#FF7F11] hover:underline">
                  info@magicgenieservices.ca
                </a>{" "}
                and we&apos;ll take the details directly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 font-body text-[14px] font-medium text-[#FF7F11] hover:underline"
              >
                Try again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                </div>
              </div>

              {/* Phone + Division */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="306-000-0000" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="division" className={labelClass}>Service Division *</label>
                  <select
                    id="division"
                    name="division"
                    required
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className={`${inputClass} cursor-pointer appearance-none`}
                  >
                    <option value="" disabled>Select division</option>
                    {Object.keys(servicesByDivision).map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Specific service + Property type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className={labelClass}>Specific Service *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    disabled={!division}
                    defaultValue=""
                    className={`${inputClass} cursor-pointer appearance-none disabled:opacity-40`}
                  >
                    <option value="" disabled>
                      {division ? "Select service" : "Select division first"}
                    </option>
                    {division &&
                      servicesByDivision[division].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="property" className={labelClass}>Property Type</label>
                  <select id="property" name="property" className={`${inputClass} cursor-pointer appearance-none`}>
                    <option value="">Select type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className={labelClass}>Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Describe your project or service needs..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Contact preference */}
              <div>
                <p className={labelClass}>Preferred Contact Method</p>
                <div className="flex flex-wrap gap-3">
                  {(["Email", "Phone", "Either"] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setContact(method)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-[8px] border font-body text-[14px] font-medium transition-all duration-200 ${
                        contact === method
                          ? "bg-[rgba(255,127,17,0.1)] border-[rgba(255,127,17,0.35)] text-[#FF7F11]"
                          : "bg-white/[0.04] border-white/[0.1] text-white/50 hover:border-white/20 hover:text-white/70"
                      }`}
                      aria-pressed={contact === method}
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
                          contact === method ? "border-[#FF7F11] bg-[#FF7F11]" : "border-white/30"
                        }`}
                      >
                        {contact === method && (
                          <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        )}
                      </span>
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-3 bg-[#FF7F11] text-black font-body font-semibold text-[16px] py-4 px-8 rounded-xl hover:bg-[#FF9A3C] hover:scale-[1.02] active:scale-100 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_8px_32px_rgba(255,127,17,0.2)] mt-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending your request...
                  </>
                ) : (
                  <>
                    Request My Free Quote
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
