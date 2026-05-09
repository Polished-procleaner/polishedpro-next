"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { ChevronDown } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    dropdown: [
      { href: "/about", label: "Our Story" },
      { href: "/why-choose-us", label: "Why Choose Us" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/before-after", label: "Before & After" },
  { href: "/process", label: "Process" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact us" },
];

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

function DropdownItem({ item }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isActive = item.dropdown?.some((d) => pathname.startsWith(d.href));

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex items-center gap-1 font-medium text-gray-900 text-sm focus:outline-none"
      >
        {item.label}
        <ChevronDown className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        <Underline active={isActive} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
          {item.dropdown.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            >
              {d.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/95 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-[1400px] items-center gap-10 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <img src="/images/logo.png" alt="PolishedPro" className="h-18 w-auto" />
        </Link>
        <ul className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => {
            if (item.dropdown) return <DropdownItem key={item.label} item={item} />;
            const active = isActive(item.href);
            return (
              <li key={item.href} className="relative">
                <Link href={item.href} className="relative font-medium text-gray-900 text-sm">
                  {item.label}
                  <Underline active={active} />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="ml-auto">
          <Link href="/contact">
            <Button variant={"theme"} className={"gap-1"}>
              <HiOutlineChatBubbleLeftRight className="size-5" />
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
