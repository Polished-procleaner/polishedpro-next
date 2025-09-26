// src/components/Navbar.jsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/before-after", label: "Before & After" },
  { href: "/process", label: "Process" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact us" },
];

// Subrayado animado de cada link del menú
function Underline({ active }) {
  return (
    <span
      className={[
        "pointer-events-none absolute -bottom-1 left-0 h-[2px]",
        "bg-gradient-to-r from-sky-500 to-green-500",
        "transition-all duration-300",
        active ? "w-full" : "w-0",
      ].join(" ")}
    />
  );
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/95 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <img
            src="/images/img1.png"
            alt="PolishedPro"
            className="h-11 w-auto drop-shadow"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">
            PolishedPro
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-[3px] w-6 rounded bg-gray-900" />
          <span className="h-[3px] w-6 rounded bg-gray-900" />
          <span className="h-[3px] w-6 rounded bg-gray-900" />
        </button>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href} className="relative">
                <Link href={href} className="relative font-medium text-gray-900">
                  {label}
                  <Underline active={active} />
                </Link>
              </li>
            );
          })}

          <li>
            <div className="relative inline-block group">
              <span
                className="pointer-events-none absolute -inset-1 rounded-full
                           bg-gradient-to-r from-sky-400/40 to-green-400/40
                           blur-xl opacity-0 transition-opacity duration-300
                           group-hover:opacity-100"
              />
              <Link
                href="/contact"
                className="relative inline-flex h-11 items-center rounded-full px-6
                           text-[15px] font-semibold text-white
                           bg-gradient-to-r from-sky-500 to-green-500
                           shadow-[0_10px_25px_rgba(14,165,233,.35)]
                           transition-transform duration-200
                           group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_32px_rgba(14,165,233,.45)]"
              >
                Get Quote
              </Link>
              <span
                className="pointer-events-none absolute left-1/2 -translate-x-1/2
                           -bottom-[10px] h-[3px] w-[40px] rounded-full
                           bg-gradient-to-r from-sky-500 to-green-500
                           opacity-0 transition-all duration-300
                           group-hover:opacity-100 group-hover:w-[calc(100%-24px)]"
              />
            </div>
          </li>
        </ul>
      </div>

      {open && (
        <div className="md:hidden">
          <ul className="mx-4 mb-4 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-lg backdrop-blur">
            {NAV.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={[
                      "block rounded-lg px-4 py-3 font-medium",
                      active ? "text-gray-900" : "text-gray-700",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            <li className="pt-2">
              <div className="relative inline-block w-full group">
                <span
                  className="pointer-events-none absolute -inset-1 rounded-full
                             bg-gradient-to-r from-sky-400/40 to-green-400/40
                             blur-xl opacity-0 transition-opacity duration-300
                             group-hover:opacity-100"
                />
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="relative inline-flex w-full h-11 justify-center items-center
                             rounded-full px-6 text-[15px] font-semibold text-white
                             bg-gradient-to-r from-sky-500 to-green-500
                             shadow-[0_10px_25px_rgba(14,165,233,.35)]
                             transition-transform duration-200
                             group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_32px_rgba(14,165,233,.45)]"
                >
                  Get Quote
                </Link>
                <span
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2
                             -bottom-[10px] h-[3px] w-[40px] rounded-full
                             bg-gradient-to-r from-sky-500 to-green-500
                             opacity-0 transition-all duration-300
                             group-hover:opacity-100 group-hover:w-[calc(100%-24px)]"
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
