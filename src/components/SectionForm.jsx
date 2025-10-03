

import { useState } from "react";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaComment,
    FaPaperPlane,
} from "react-icons/fa";

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

export default function SectionForm() {

    const [service, setService] = useState("");

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                <aside className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-sky-500 via-sky-700 to-sky-900 p-8 md:p-10 text-white shadow-xl">
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
                                <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-white text-sky-900 shadow-md transition-colors duration-300 group-hover:text-sky-600">
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
    )
}