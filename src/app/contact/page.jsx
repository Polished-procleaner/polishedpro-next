// src/app/contact/page.jsx
"use client";

import { useState } from "react";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaComment,
    FaPaperPlane,
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaFacebookMessenger,
    FaCalendarCheck,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";

const contactItems = [
    {
        id: "phone",
        icon: FaPhone,
        title: "Give Us a Call",
        text: "Click to call us directly",
        href: "tel:+19549096519",
    },
    {
        id: "email",
        icon: FaEnvelope,
        title: "Send Us an Email",
        text: "Click to open your email client",
        href: "mailto:info@polishedprocleaners.net",
    },
    {
        id: "local",
        icon: FaMapMarkerAlt,
        title: "Local Service",
        text: "Proudly serving our community and surrounding areas",
        href: null,
    },
    {
        id: "sms",
        icon: FaComment,
        title: "Text Us",
        text: "Click to send us a text message",
        href: "sms:+19549096519",
    },
];

export default function ContactPage() {
    const [service, setService] = useState("");

    return (
        <main>
            {/* Page Hero */}
            <PageHero
                title={"Get Your Free Quote"}
                subtitle={"Ready to see what professional cleaning can do for your space? Let's start the conversation."}
            />

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                    {/* Contact Info (izquierda) */}
                    <aside className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-800 via-emerald-900 to-sky-900 p-8 md:p-10 text-white shadow-xl">
                        {/* halo */}
                        <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

                        <h3 className="font-display text-2xl md:text-3xl font-bold">
                            Let’s Start the Conversation
                        </h3>
                        <p className="mt-4 leading-relaxed opacity-90">
                            Ready to see what professional cleaning can do for your space? We&apos;d
                            love to chat about your needs and provide a free, honest estimate.
                        </p>

                        <div className="mt-8 space-y-2">
                            {contactItems.map(({ id, icon: Icon, title, text, href }) =>
                            (
                                <a
                                    key={id}
                                    href={href}
                                    className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 focus-visible:-translate-y-0.5 focus-visible:opacity-90 outline-none focus-visible:ring-4 focus-visible:ring-yellow-300/30"
                                >
                                    <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-yellow-400 text-emerald-900 shadow-md transition-colors duration-300 group-hover:text-sky-600">
                                        <Icon className="text-lg" />
                                    </span>
                                    <span>
                                        <b className="block">{title}</b>
                                        <small className="opacity-80">{text}</small>
                                    </span>
                                </a>
                            )
                            )}
                        </div>
                    </aside>

                    {/* Contact Form (derecha) */}
                    <form
                        className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200"
                        action="https://formspree.io/f/xwpqyazk"
                        method="POST"
                    >
                        <input
                            type="hidden"
                            name="_subject"
                            value="New inquiry from PolishedPro website"
                        />
                        <h3 className="text-2xl font-display font-bold mb-8">Get Your Free Quote</h3>

                        {/* Name */}
                        <div className="mb-6">
                            <label htmlFor="name" className="block font-semibold mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                            />
                        </div>

                        {/* Email + Phone */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label htmlFor="email" className="block font-semibold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block font-semibold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                                />
                            </div>
                        </div>

                        {/* Service Category */}
                        <div className="mb-6">
                            <label htmlFor="service" className="block font-semibold mb-2">
                                Service Category
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                            >
                                <option value="">Select a service category</option>
                                <option value="residential">Residential Cleaning</option>
                                <option value="commercial">Commercial Cleaning</option>
                                <option value="specialized">Specialized Floor Cleaning</option>
                            </select>
                        </div>

                        {/* Residential Fields */}
                        {service === "residential" && (
                            <div className="mb-6 space-y-4">
                                <div>
                                    <label
                                        htmlFor="residentialType"
                                        className="block font-semibold mb-2"
                                    >
                                        Residential Service Type
                                    </label>
                                    <select
                                        id="residentialType"
                                        name="residentialType"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                                    >
                                        <option value="">Select service type</option>
                                        <option value="standard">Standard Cleaning</option>
                                        <option value="deep">Deep Cleaning</option>
                                        <option value="move">Move-In/Move-Out</option>
                                        <option value="airbnb">Airbnb Cleaning</option>
                                    </select>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="bedrooms" className="block font-semibold mb-2">
                                            Number of Bedrooms
                                        </label>
                                        <select
                                            id="bedrooms"
                                            name="bedrooms"
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                                        >
                                            <option value="">Select bedrooms</option>
                                            <option value="studio">Studio</option>
                                            <option value="1">1 Bedroom</option>
                                            <option value="2">2 Bedrooms</option>
                                            <option value="3">3 Bedrooms</option>
                                            <option value="4">4 Bedrooms</option>
                                            <option value="5+">5+ Bedrooms</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="squareFeetRes"
                                            className="block font-semibold mb-2"
                                        >
                                            Square Feet
                                        </label>
                                        <input
                                            type="number"
                                            id="squareFeetRes"
                                            name="squareFeetRes"
                                            placeholder="Approximate square feet"
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Commercial Fields */}
                        {service === "commercial" && (
                            <div className="mb-6 space-y-4">
                                <div>
                                    <label
                                        htmlFor="commercialType"
                                        className="block font-semibold mb-2"
                                    >
                                        Commercial Service Type
                                    </label>
                                    <select
                                        id="commercialType"
                                        name="commercialType"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                                    >
                                        <option value="">Select service type</option>
                                        <option value="office">Office Cleaning</option>
                                        <option value="warehouse">Warehouse Cleaning</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="squareFeetCom"
                                        className="block font-semibold mb-2"
                                    >
                                        Square Feet
                                    </label>
                                    <input
                                        type="number"
                                        id="squareFeetCom"
                                        name="squareFeetCom"
                                        placeholder="Total square feet of space"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Specialized Fields */}
                        {service === "specialized" && (
                            <div className="mb-6">
                                <label
                                    htmlFor="specializedType"
                                    className="block font-semibold mb-2"
                                >
                                    Specialized Service Type
                                </label>
                                <select
                                    id="specializedType"
                                    name="specializedType"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                                >
                                    <option value="">Select service type</option>
                                    <option value="carpet">Carpet Cleaning</option>
                                    <option value="stripping">Stripping & Waxing</option>
                                    <option value="tile">Tile & Grout Cleaning</option>
                                    <option value="upholstery">Upholstery Cleaning</option>
                                    <option value="construction">Post-Construction Cleaning</option>
                                </select>
                            </div>
                        )}

                        {/* Special Areas */}
                        <div className="mb-6">
                            <label htmlFor="specialAreas" className="block font-semibold mb-2">
                                Special Areas Needing Attention
                            </label>
                            <textarea
                                id="specialAreas"
                                name="specialAreas"
                                placeholder="Tell us about any specific areas that need special attention or any concerns you have"
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition min-h-[120px]"
                            />
                        </div>

                        {/* Additional Info */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block font-semibold mb-2">
                                Additional Information
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Any other details you'd like to share about your cleaning needs?"
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 selection:border-green-500  transition min-h-[120px]"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white  bg-green-500 shadow-lg transition-transform hover:-translate-y-1"
                        >
                            <FaPaperPlane />
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Additional Contact Methods */}
            <section className="bg-green-50 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <span className="inline-block rounded-full bg-gradient-to-r from-sky-500 to-green-500 px-6 py-2 font-semibold text-white">
                            Multiple Ways to Connect
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 md:text-5xl">
                            Reach Out However You Prefer
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                            We&apos;re here to help and respond quickly through all channels.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* Card 1 */}
                        <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-1">
                            <span className="pointer-events-none absolute left-1/2 -top-px h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 via-green-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
                            <div
                                onClick={() => (window.location.href = "tel:+19549096519")}
                                className="mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-white"
                                title="Call or Text"
                            >
                                <FaPhone className="text-2xl" />
                            </div>
                            <h3 className="font-space text-lg font-semibold text-gray-900">Call or Text</h3>
                            <p className="mt-2 text-gray-600">
                                For immediate assistance, click the icon above to call us or send a text message.
                                We&apos;re available for urgent requests and quick questions.
                            </p>
                        </article>

                        {/* Card 2 */}
                        <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-1">
                            <span className="pointer-events-none absolute left-1/2 -top-px h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 via-green-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
                            <div
                                onClick={() => (window.location.href = "mailto:info@polishedprocleaners.net")}
                                className="mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-white"
                                title="Email Us"
                            >
                                <FaEnvelope className="text-2xl" />
                            </div>
                            <h3 className="font-space text-lg font-semibold text-gray-900">Email Us</h3>
                            <p className="mt-2 text-gray-600">
                                Click the icon above to open your email client. Send us detailed information about
                                your cleaning needs, and we&apos;ll respond with a comprehensive quote.
                            </p>
                        </article>

                        {/* Card 3 */}
                        <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-1">
                            <span className="pointer-events-none absolute left-1/2 -top-px h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 via-green-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-white">
                                <FaFacebookMessenger className="text-2xl" />
                            </div>
                            <h3 className="font-space text-lg font-semibold text-gray-900">Social Media</h3>
                            <p className="mt-2 text-gray-600">
                                Connect with us on Facebook, Instagram, or TikTok. Send us a message or check out
                                our latest work!
                            </p>
                            <div className="mt-4 flex items-center gap-4 text-sky-500">
                                <a
                                    href="https://www.facebook.com/polishedprocleaners"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="https://www.instagram.com/polishedpro.cleaners"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@polishedprocleaners"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="TikTok"
                                >
                                    <FaTiktok />
                                </a>
                            </div>
                        </article>

                        {/* Card 4 */}
                        <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-1">
                            <span className="pointer-events-none absolute left-1/2 -top-px h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 via-green-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
                            <div
                                onClick={() => (window.location.href = "sms:+19549096519")}
                                className="mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-white"
                                title="Emergency Service"
                            >
                                <FaCalendarCheck className="text-2xl" />
                            </div>
                            <h3 className="font-space text-lg font-semibold text-gray-900">Emergency Service</h3>
                            <p className="mt-2 text-gray-600">
                                Need cleaning on short notice? Click the icon above to text us immediately. We
                                understand emergencies happen and we&apos;re here to help when you need us most.
                            </p>
                            <p className="font-semibold text-sky-600">Same-day service available</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <span className="inline-block rounded-full bg-gradient-to-r from-sky-500 to-green-500 px-6 py-2 font-semibold text-white">
                            Service Areas
                        </span>
                        <h2 className="mt-4 font-space text-3xl font-bold text-gray-900 md:text-5xl">
                            We Serve Your Community
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                            Proudly providing professional cleaning services throughout our local area.
                        </p>
                    </div>

                    <article className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-md">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-white">
                            <FaMapMarkerAlt className="text-2xl" />
                        </div>
                        <h3 className="font-space text-lg font-semibold text-gray-900">Local Service Area</h3>
                        <p className="mt-2 text-gray-600">
                            We&apos;re your local cleaning experts, serving the community and surrounding areas.
                            As a family-owned business, we take pride in keeping our neighbors&apos; spaces
                            spotless and beautiful.
                        </p>
                        <div className="mt-8 space-y-2">
                            <p className="font-semibold text-sky-600">
                                Not sure if we serve your area? Give us a call!
                            </p>
                            <p className="text-gray-600">
                                We&apos;re always looking to expand our service to help more families and businesses
                                in our community.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
