// app/reviews/page.jsx
"use client";
import PageHero from "@/components/PageHero";

import { FaUsers, FaStar, FaHandshake, FaRocket } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";

const cards = [
    {
        icon: <FaUsers />,
        title: "Family-Owned Business",
        desc: "We're not a big corporation - we're your neighbors who take personal pride in every cleaning job we complete.",
    },
    {
        icon: <FaStar />,
        title: "5-Star Service",
        desc: "Our consistently high ratings reflect our commitment to exceeding expectations on every single job.",
    },
    {
        icon: <FaHandshake />,
        title: "Personal Relationships",
        desc: "We believe in building lasting relationships with our clients based on trust, reliability, and exceptional service.",
    },
    {
        icon: <FaRocket />,
        title: "Quick Response",
        desc: "Need cleaning on short notice? We're known for our flexibility and ability to accommodate urgent requests.",
    },
]

const testimonials = [
    {
        text: `“Hired them to conduct a move-out cleaning and they were excellent. They even cleaned the fridge, oven and all the areas around and even moved them so they can get the hard to reach places behind the appliances. Cleaned cabinets and all the floors with swift efficiency. I had a fairly large townhome (~1900 sq ft) and they got it done in less than 3 hours! The price was more than fair as well! Thank you to Roger and his delightful mother! Hope to utilize them soon for my regular cleanings!”`,
        initials: "AH",
        name: "Arleen H.",
        role: "Move-Out Cleaning Client",
    },
    {
        text: `“Polished Pro has been a game-changer for our medical office. Their team is professional, consistent, and understands the importance of maintaining a spotless, sanitary environment for our patients and staff. Every exam room, waiting area, and office space is cleaned to perfection. We've noticed fewer complaints and more compliments from patients since partnering with them. They are reliable, efficient, and take cleanliness as seriously as we do in healthcare. Highly recommend Polished Pro to any medical facility looking for top-tier cleaning services.”`,
        initials: "HB",
        name: "Huey B.",
        role: "Medical Office Manager",
    },
    {
        text: `“Absolutely Impressed! I couldn't be happier with the service from PolishedPro. From the moment they arrived, their professionalism was clear, punctual, respectful, and incredibly thorough. My office has never looked or felt cleaner. Every surface sparkles, the air smells fresh, and even the little details (like baseboards and corners) were taken care of. It's a huge relief to walk into such a spotless space every day. Highly recommend them to anyone looking for reliable and top-tier cleaning services!”`,
        initials: "JB",
        name: "Jade B.",
        role: "Office Manager",
    },
    {
        text: `“Absolutely thrilled with Polish Pro Cleaners! They came to my one-bedroom apartment on Sunday and did an outstanding job. My place feels completely reset and refreshed. They were an absolute delight, and I highly recommend them - especially since I love supporting a family business! I'm already looking forward to using their services again.”`,
        initials: "JM",
        name: "Joshua M.",
        role: "Apartment Resident",
    },
    {
        text: `“Great cleaning service! Super friendly, on time, and did an awesome job. The place looked spotless and smelled amazing. I will definitely book again!”`,
        initials: "RN",
        name: "Rae N.",
        role: "Happy Customer",
    },
    {
        text: `“Omg when I tell you how impressed I was to get my place cleaned it would be an understatement and with such a short notice PolishedPro came through for me and a job well done will definitely keep them locked in as my cleaners.”`,
        initials: "MP",
        name: "Mark P.",
        role: "Satisfied Client",
    },
    {
        text: `“Great service from start to finish. Customer service was very informative and detailed to my needs. They arrived on time and I was very pleased with the quality of work done.”`,
        initials: "AC",
        name: "Andre C.",
        role: "Commercial Client",
    },
    {
        text: `“Amazing service, definitely highly recommended. I love the way their focus is on leaving everything nice and neat.”`,
        initials: "WW",
        name: "Wick W.",
        role: "Residential Customer",
    },
    {
        text: `“Roger and Tania did a great job cleaning my place. I'll be booking with them again. Recommend!”`,
        initials: "LR",
        name: "Leslie R.",
        role: "Regular Customer",
    },
]

export default function ReviewsPage() {
    return (
        <main className="flex flex-col">
            <PageHero
                title={"What Our Neighbors Say"}
                subtitle={`Real feedback from real people who've experienced the PolishedPro difference.`}
            />

            {/* STATS */}
            <Stats/>

            {/* TESTIMONIALS */}
            <section className="bg-[#f0fdf4]">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((t, i) => (
                            <article key={i} className="bg-white rounded-3xl p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl" >
                                <p className="italic text-gray-600 leading-7">{t.text}</p>
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold bg-gradient-to-br from-sky-500 to-green-500">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{t.name}</h4>
                                        <p className="text-sm text-gray-400">{t.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUST INDICATORS */}
            <section className="py-20 bg-[#f0fdf4]">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Encabezado */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-5 py-2 rounded-full text-white font-semibold shadow-md bg-gradient-to-r from-sky-500 to-green-500 mb-4">
                            Trust & Quality
                        </span>
                        <h2 className="font-space text-3xl md:text-4xl font-bold text-gray-900">
                            Why Customers Choose Us
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            We've built our reputation on trust, quality, and genuine care for
                            our community.
                        </p>
                    </div>

                    {/* Grid de tarjetas */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {cards.map((item, i) => (
                            <ServiceCard
                                key={i}
                                icon={item.icon}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                </div>
            </section>


            <CTASection
                title="Join Our Happy Customers"
                description="Experience the same quality service and personal attention that our customers rave about."
                buttonText="Get Your 5-Star Service"
                buttonLink="/contact"
                buttonIcon={FaStar}
            />
        </main>
    );
}
