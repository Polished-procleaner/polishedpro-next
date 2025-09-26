// src/app/before-after/page.jsx
"use client";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaFacebookF, FaInstagram, FaTiktok, FaMagic } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const slides = [
    { src: "/images/BA/37a416b8-e940-43be-8b9f-698f337dc477.jpg", title: "Amazing Transformation", desc: "Professional cleaning results that speak for themselves" },
    { src: "/images/BA/bf0bfe93-c4de-4958-a444-5ee64216b4a3.jpg", title: "Deep Clean Results", desc: "From grimy to gleaming in just one session" },
    { src: "/images/BA/27.png", title: "Carpet Revival", desc: "Bringing carpets back to life with professional care" },
    { src: "/images/BA/24.png", title: "Surface Restoration", desc: "Professional techniques for outstanding results" },
    { src: "/images/BA/21.png", title: "Stain Removal", desc: "Stubborn stains eliminated with expert care" },
    { src: "/images/BA/25.png", title: "Tile & Grout", desc: "Specialized cleaning for stunning results" },
    { src: "/images/BA/6.png", title: "Perfect Finish", desc: "The PolishedPro standard of excellence" },
    { src: "/images/BA/18.png", title: "Surface Renewal", desc: "Expert care for lasting cleanliness" },
    { src: "/images/BA/2.png", title: "Professional Results", desc: "Quality cleaning that exceeds expectations" },
    { src: "/images/BA/14.png", title: "Complete Transformation", desc: "From dirty to pristine in one clean" },
    { src: "/images/BA/12.png", title: "Expert Cleaning", desc: "Professional techniques deliver amazing results" },
    { src: "/images/BA/19.png", title: "Spotless Results", desc: "Attention to detail in every cleaning" },
    { src: "/images/BA/16.png", title: "Quality Service", desc: "Professional cleaning that makes a difference" },
    { src: "/images/BA/17.png", title: "Restoration Success", desc: "Bringing surfaces back to like-new condition" },
    { src: "/images/BA/20.png", title: "Perfect Clean", desc: "Professional standards in every job" },
    { src: "/images/BA/4.png", title: "Amazing Results", desc: "Expert cleaning delivers stunning transformations" },
    { src: "/images/BA/3.png", title: "Professional Care", desc: "Quality cleaning with attention to detail" },
    { src: "/images/BA/1.png", title: "Professional Excellence", desc: "Expert cleaning with outstanding results" },
    { src: "/images/BA/22.png", title: "Expert Results", desc: "Professional cleaning that makes a difference" },
    { src: "/images/BA/26.png", title: "Thorough Cleaning", desc: "Every corner receives professional attention" },
    { src: "/images/BA/5.png", title: "Deep Cleaning Excellence", desc: "Professional grade cleaning delivers results" },
];

const platforms = [
    {
        name: "Facebook",
        desc: "Follow us for updates, special offers, and cleaning tips!",
        href: "https://www.facebook.com/polishedprocleaners",
        cta: "Visit Our Page",
        Icon: FaFacebookF,
    },
    {
        name: "Instagram",
        desc: "Check out our latest transformations and before/after photos!",
        href: "https://www.instagram.com/polishedpro.cleaners",
        cta: "View Profile",
        Icon: FaInstagram,
    },
    {
        name: "TikTok",
        desc: "Watch satisfying cleaning videos and quick tips!",
        href: "https://www.tiktok.com/@polishedprocleaners",
        cta: "Watch Videos",
        Icon: FaTiktok,
    },
];

export default function BeforeAfterPage() {
    const [current, setCurrent] = useState(0);
    const total = slides.length;
    const intervalRef = useRef(null);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 6000);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <main>
            <PageHero
                title="Before & After Transformations"
                subtitle="See the PolishedPro difference - real results from real projects in our community."
            />

            <section className="bg-green-50 py-16">
                <div className="max-w-6xl mx-auto px-4 relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((slide, i) => (
                            <div key={i} className="basis-full shrink-0 grow-0 flex justify-center">
                                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group">
                                    <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-white/0">
                                        <img
                                            src={slide.src}
                                            alt={slide.title}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="font-display text-xl font-semibold text-white mb-2">{slide.title}</h3>
                                        <p className="text-white/90">{slide.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gradient-to-br from-sky-500 to-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gradient-to-br from-sky-500 to-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
                    >
                        <FaChevronRight />
                    </button>

                    <div className="w-full bg-black/10 h-1 rounded-full mt-8 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-sky-500 to-green-500 transition-all duration-500"
                            style={{ width: `${((current + 1) / total) * 100}%` }}
                        />
                    </div>

                    <div className="flex justify-center gap-3 mt-4 flex-wrap">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-3 h-3 rounded-full transition ${current === i ? "bg-gradient-to-r from-sky-500 to-green-500 scale-125" : "bg-black/20 hover:bg-black/40"}`}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <span className="bg-white px-4 py-1 rounded-full shadow font-display font-semibold">
                            {current + 1} / {total}
                        </span>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-6">
                        <span className="inline-block px-5 py-2 rounded-full text-white font-semibold shadow-md bg-gradient-to-r from-sky-500 to-green-500">
                            Connect With Us
                        </span>
                    </div>

                    <h2 className="text-center font-display font-bold text-3xl md:text-5xl text-gray-900">
                        Follow Our Cleaning Journey
                    </h2>
                    <p className="mt-5 text-center text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        See our latest transformations, cleaning tips, and behind-the-scenes content on social media.
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {platforms.map(({ name, desc, href, cta, Icon }) => (
                            <div
                                key={name}
                                className="bg-white rounded-[28px] border border-slate-200 
                                            shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] 
                                            p-10 text-center
                                            transition-transform duration-300
                                            hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-gradient-to-br from-sky-500 to-green-500 text-white text-2xl mb-6">
                                    <Icon />
                                </div>
                                <h4 className="font-display text-xl font-semibold text-gray-900">{name}</h4>
                                <p className="mt-3 text-gray-500">{desc}</p>
                                <a
                                    href={href}
                                    target="_blank"
                                    className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-sky-500 to-green-500 shadow-md"
                                >
                                    <Icon className="opacity-90" />
                                    {cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title={"Want Results Like These?"}
                description={`Let us transform your space with the same professional care and attention to detail.`}
                buttonText={"Get Your Transformation"}
                ButtonIcon={FaMagic}
                buttonLink={"/contact"}
            />
        </main>
    );
}
