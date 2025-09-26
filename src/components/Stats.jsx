
import { useRef, useEffect, useState } from "react";

export default function Stats() {
    const countersRef = useRef([]);
    const [animated, setAnimated] = useState(false);

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

    const animateCounters = () => {
        countersRef.current.forEach((counter) => {
            if (!counter) return;
            const target = counter.dataset.target;
            const isPercentage = target.includes("%");
            const isStar = target.includes("★");
            const isTime = target.includes("/");
            let endValue;

            if (isPercentage) endValue = parseInt(target);
            else if (isStar) endValue = 5;
            else if (isTime) endValue = 24;
            else endValue = parseInt(target.replace("+", ""));

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
                    else if (isStar) counter.innerText = Math.floor(startValue) + "★";
                    else if (isTime) counter.innerText = Math.floor(startValue) + "/7";
                    else counter.innerText = Math.floor(startValue) + "+";
                }
            }, 50);
        });
    };
    return (
        <section className="bg-[#f0fdf4] py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { num: "500+", label: "Happy Customers" },
                    { num: "100%", label: "Satisfaction Rate" },
                    { num: "24/7", label: "Support Available" },
                    { num: "5★", label: "Average Rating" },
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="rounded-2xl bg-white p-8 md:p-10 text-center
                   shadow-[0_20px_60px_rgba(16,185,129,0.15)]
                   border border-[#e5e7eb]
                   transition-transform duration-200 hover:-translate-y-1"
                    >
                        <div
                            ref={(el) => (countersRef.current[i] = el)}
                            data-target={stat.num}
                            className="stat-number font-space font-bold tracking-tight
                     text-4xl md:text-5xl
                     bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent
                     mb-4"
                        >
                            {stat.num}
                        </div>

                        <div className="text-[15px] md:text-base font-medium text-[#6b7280]">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}