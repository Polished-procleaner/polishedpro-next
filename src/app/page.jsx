// src/app/page.jsx

"use client";
import { FaCalendarCheck, FaPlay, FaHeart } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import Stats from "@/components/Stats";


export default function HomePage() {

  const CARDS = [
    { title: "Residential", sub: "Home cleaning experts", icon: "fa-home" },
    { title: "Commercial", sub: "Office & warehouse", icon: "fa-building" },
    { title: "Specialized", sub: "Floor care specialists", icon: "fa-th-large" },
    { title: "5-Star Rated", sub: "Customer approved", icon: "fa-award" },
  ];

  return (
    <main>
      {/* ===================== HERO ===================== */}
      <section className="relative flex items-center min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-sky-500 to-green-500">
        {/* patrón sutil como en el original */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1000 1000%22%3E%3Cdefs%3E%3Cpattern id=%22g%22 width=%2250%22 height=%2250%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 50 0 L 0 0 0 50%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23g)%22/%3E%3C/svg%3E')",
          }}
        />
        <div className="relative z-10 grid items-center max-w-[1400px] w-full gap-16 px-8 py-2 text-center md:text-left mx-auto md:grid-cols-2">
          {/* Columna izquierda (texto) */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm rounded-full backdrop-blur-md bg-white/10 border border-white/20">
              Premium Cleaning Services
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Space with{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Professional
              </span>{" "}
              Cleaning
            </h1>
            <p className="mt-3 text-xl font-light italic opacity-95">
              Leave the Cleaning to Us
            </p>
            <p className="mt-4 text-lg opacity-90">
              We're your trusted local cleaning experts, bringing advanced
              techniques and genuine care to every project. From residential to
              commercial, we make your space shine.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 items-center md:items-start">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-full shadow-lg transition-transform bg-gradient-to-r from-green-500 to-emerald-500 hover:-translate-y-1"
              >
                <FaCalendarCheck />
                Book Now
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white border-2 rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-transform"
              >
                <FaPlay />
                Our Services
              </a>
            </div>
          </div>

          {/* Columna derecha (tarjetas 2x2 — 1:1 con original) */}
          <div className="grid place-items-center">
            <div className="grid grid-cols-2 gap-8 max-w-[560px] w-full">
              {CARDS.map(({ title, sub, icon }, i) => (
                <div
                  key={i}
                  className="relative rounded-[20px] p-6 text-center
                     bg-white/10 backdrop-blur-xl border border-white/20
                     shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                     transition-transform duration-300 hover:-translate-y-2"
                  style={{ minHeight: 180 }}
                >
                  <i
                    className={`fas ${icon} mx-auto mb-3 text-[40px] leading-none
                        bg-gradient-to-br from-[#fbbf24] to-[#fde047]
                        bg-clip-text text-transparent`}
                    aria-hidden="true"
                  />
                  <h3 className="text-[1.1rem] font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-[0.9rem] text-white/80">{sub}</p>

                  <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-white/15" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <Stats />

      {/* ===================== CTA ===================== */}
      <CTASection
        title={"Ready to Fall in Love with Your Space Again?"}
        description={`Join our growing family of satisfied customers who've discovered
            what professional cleaning can really do. We promise honest pricing,
            exceptional results, and service that makes you smile. Let's chat
            about your space!`}
        buttonText={"Start Your Transformation"}
        ButtonIcon={FaHeart}
        buttonLink={"/contact"}
      />
    </main>
  );
}
