// src/components/HeroCarousel.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ slides = [], interval = 4500, className = "" }) {
    const [current, setCurrent] = useState(0);
    const total = slides.length || 1;
    const timer = useRef(null);
    const startX = useRef(0);
    const deltaX = useRef(0);

    const next = () => setCurrent((p) => (p + 1) % total);
    const prev = () => setCurrent((p) => (p - 1 + total) % total);

    useEffect(() => {
        timer.current = setInterval(next, interval);
        return () => clearInterval(timer.current);
    }, [interval, total]);

    const pause = () => clearInterval(timer.current);
    const resume = () => {
        clearInterval(timer.current);
        timer.current = setInterval(next, interval);
    };

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={(e) => {
                startX.current = e.touches[0].clientX;
                deltaX.current = 0;
                pause();
            }}
            onTouchMove={(e) => {
                deltaX.current = e.touches[0].clientX - startX.current;
            }}
            onTouchEnd={() => {
                const t = 50;
                if (deltaX.current < -t) next();
                else if (deltaX.current > t) prev();
                resume();
            }}
        >
            <div className="overflow-hidden rounded-[20px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)]">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map(({ src, title, subtitle, Icon }, i) => (
                        <div key={i} className="shrink-0 w-full min-w-full">
                            <div className="relative">
                                <div className="aspect-[4/3] md:aspect-[16/9]">
                                    <img
                                        src={src}
                                        alt={title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                    <div className="px-6 py-4 rounded-2xl text-center text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-lg max-w-[75%]">
                                        {Icon && (
                                            <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl text-xl text-white bg-gradient-to-br from-yellow-400 to-yellow-300 shadow mb-2">
                                                <Icon />
                                            </span>
                                        )}
                                        <h3 className="font-display text-lg font-semibold">
                                            {title}
                                        </h3>
                                        <p className="text-sm opacity-90">{subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prev}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-gradient-to-br from-sky-500 to-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={next}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-gradient-to-br from-sky-500 to-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}
