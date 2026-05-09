"use client";

import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { fadeInUpVariant } from "@/constants/animationVariants";

export default function Stats() {
  const countersRef = useRef([]);
  const [animated, setAnimated] = useState(false);

  const stats = [
    {
      num: "5+",
      label: "Years of Experience",
      emoji: "🏆",
      badge: "Experience",
    },
    {
      num: "100+",
      label: "Happy Customers",
      emoji: "😊",
      badge: "Customers",
    },
    {
      num: "100%",
      label: "Satisfaction Rate",
      emoji: "⭐",
      badge: "Satisfaction",
    },
    {
      num: "24/7",
      label: "Support Available",
      emoji: "🕐",
      badge: "Support",
    },
  ];

  const animateCounters = () => {
    countersRef.current.forEach((counter) => {
      if (!counter) return;

      const target = counter.dataset.target;

      const isPercentage = target.includes("%");
      const isTime = target.includes("/");
      const isPlus = target.endsWith("+");

      // numero base
      let endValue = parseInt(target);

      let startValue = 0;
      const duration = 2000;
      const increment = endValue / (duration / 50);

      const timer = setInterval(() => {
        startValue += increment;

        if (startValue >= endValue) {
          counter.innerText = target;
          clearInterval(timer);
        } else {
          if (isPercentage) counter.innerText = Math.floor(startValue) + "%";
          else if (isTime) counter.innerText = Math.floor(startValue) + "/7";
          else if (isPlus) counter.innerText = Math.floor(startValue) + "+";
          else counter.innerText = Math.floor(startValue);
        }
      }, 50);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !animated) {
          animateCounters();
          setAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    countersRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [animated]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUpVariant}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-2xl bg-gray-100 p-8 relative shadow-sm"
        >
          <div className="flex items-center gap-2 mb-10">
            <div className="px-5 py-2 rounded-full text-sm font-semibold" style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "#fff" }}>
              {stat.badge}
            </div>
            <div className="flex items-center justify-center size-9 rounded-full text-xl" style={{ background: "linear-gradient(135deg, #FEF3C7, #FDE68A)", border: "1px solid #F59E0B" }}>
              {stat.emoji}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div
              ref={(el) => (countersRef.current[i] = el)}
              data-target={stat.num}
              className="stat-number font-space font-bold tracking-tight text-4xl md:text-5xl bg-linear-to-r from-sky-500 to-green-500 bg-clip-text text-transparent mb-4"
            >
              {stat.num}
            </div>
            <div className="text-sm md:text-base font-medium text-gray-500">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
