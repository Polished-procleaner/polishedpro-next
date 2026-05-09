"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { Button } from "../ui/button";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import HamburgerMenu from "./HamburgerMenu";
import { ChevronDown } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#works", label: "Our Work" },
  { href: "/process", label: "Process" },
  { href: "/#testimonials", label: "Reviews" },
  {
    label: "About Us",
    dropdown: [
      { href: "/why-choose-us", label: "Why Choose Us" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  { href: "/contact", label: "Contact us" },
];

function Underline({ active }) {
  return (
    <span
      className={[
        "pointer-events-none absolute -bottom-1 left-0 h-[2px]",
        "bg-linear-to-r from-sky-500 to-green-500",
        "transition-all duration-300",
        active ? "w-full" : "w-0",
      ].join(" ")}
    />
  );
}

function DropdownNav({ item }) {
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

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const effectRan = useRef(false);
  const pathname = usePathname() || "/";

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!effectRan.current) {
      if (!scrolled && window.scrollY > 50) {
        queueMicrotask(() => setScrolled(true));
      }
      effectRan.current = true;
    }
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "fixed top-0 z-50 w-full py-2 transition-all duration-500 ease-out",
        scrolled ? "backdrop-blur-md bg-gray-100/80 shadow-lg" : "backdrop-blur-md bg-white shadow-none",
      )}
    >
      <Container className={"flex items-center gap-10"}>
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 size-20">
          <Image width={100} height={100} src="/images/logo.png" alt="PolishedPro" className="size-full object-contain" />
        </Link>
        <ul className="hidden items-center gap-5 lg:gap-10 md:flex">
          {NAV.map((item) => {
            if (item.dropdown) return <DropdownNav key={item.label} item={item} />;
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
        <div className="ml-auto relative inline-block group">
          <Link href="/contact" className="hidden md:block">
            <Button variant={"theme"} className={"gap-1"}>
              <HiOutlineChatBubbleLeftRight className="size-5" />
              Get Quote
            </Button>
          </Link>
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
