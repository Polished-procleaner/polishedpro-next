"use client";

// Librerías
import clsx from "clsx";
import { motion } from "motion/react";

// Hooks
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Componentes
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { Button } from "../ui/button";

// Iconos
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

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
        queueMicrotask(() => {
          setScrolled(true);
        });
      }
      effectRan.current = true;
    }
  }, []);

  return (
    <motion.header
      /** Animación de entrada */
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "fixed top-0 z-50 w-full py-2 transition-all duration-500 ease-out",
        scrolled
          ? "backdrop-blur-md bg-gray-100/80 shadow-lg"
          : "backdrop-blur-md bg-white shadow-none"
      )}
    >
      <Container className={"flex items-center gap-10"}>
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-105 w-auto h-12 sm:h-16"
        >
          <Image
            width={100}
            height={100}
            src="/images/logo.png"
            alt="PolishedPro"
            className="size-full object-cover"
          />
        </Link>
        <ul className="hidden items-center gap-10 md:flex">
          {NAV.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className="relative font-medium text-gray-900 text-sm"
                >
                  {label}
                  <Underline active={active} />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="ml-auto relative inline-block group">
          <Link href="/contact">
            <Button variant={"theme"} className={"gap-1"}>
              <HiOutlineChatBubbleLeftRight className="size-5" />
              Get Quote
            </Button>
          </Link>
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
