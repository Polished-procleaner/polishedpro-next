import { fadeInUpVariant } from "@/constants/animationVariants";
import { trackEvent } from "@/lib/facebookPixel";
import { motion } from "framer-motion";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    residentialType: "",
    bedrooms: "",
    squareFeetRes: "",
    commercialType: "",
    squareFeetCom: "",
    specializedType: "",
    specialAreas: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "service") {
      setService(value);
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim()) return false;
    if (!formData.phone.trim()) return false;
    if (!formData.service) return false;
    if (!formData.specialAreas.trim()) return false;

    if (formData.service === "residential") {
      if (!formData.residentialType) return false;
      if (!formData.bedrooms) return false;
      if (!formData.squareFeetRes) return false;
    }

    if (formData.service === "commercial") {
      if (!formData.commercialType) return false;
      if (!formData.squareFeetCom) return false;
    }

    if (formData.service === "specialized") {
      if (!formData.specializedType) return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("validation");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Crear la fecha en formato legible
      const now = new Date();
      const date = now.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Agregar la fecha al payload
      const dataToSend = {
        ...formData,
        date: date,
      };

      const response = await fetch(
        "https://hook.us1.make.com/1wsap6a9eiocgulf7rlij660a8ah1kis",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          residentialType: "",
          bedrooms: "",
          squareFeetRes: "",
          commercialType: "",
          squareFeetCom: "",
          specializedType: "",
          specialAreas: "",
          message: "",
        });
        setService("");

        trackEvent("lead", {
          Content_name: "Contact Form",
          namne: formData.name,
          email: formData.email,
          phone: formData.phone,
        });

        window.history.pushState({}, "", "/gracias");

        window.dataLayer.push({
          event: "page_view",
          page_path: "/gracias",
          page_title: "Thank You - Form Submitted",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUpVariant}
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-10">
        <aside className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-sky-700 to-sky-900 p-8 md:p-10 text-white shadow-xl">
          <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <h3 className="text-2xl md:text-3xl font-bold">
            Let&apos;s Start the Conversation
          </h3>
          <p className="mt-4 leading-relaxed opacity-90">
            Ready to see what professional cleaning can do for your space?
            We&apos;d love to chat about your needs and provide a free, honest
            estimate.
          </p>

          <div className="mt-8 space-y-2">
            {contactItems.map(({ id, icon: Icon, title, text, href }) => (
              <a
                key={id}
                href={href}
                className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-sky-900 shadow-md transition-colors duration-300 group-hover:text-sky-600">
                  <Icon className="text-lg" />
                </span>
                <span>
                  <b className="block">{title}</b>
                  <small className="opacity-80">{text}</small>
                </span>
              </a>
            ))}
          </div>
        </aside>

        <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-8">Get Your Free Quote</h3>

          {submitStatus === "validation" && (
            <div className="mb-6 px-4 py-2 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-xl text-sm">
              Please fill in all required fields.
            </div>
          )}

          {submitStatus === "success" && (
            <div className="mb-6 px-4 py-2 bg-green-100 border border-green-400 text-green-700 rounded-xl text-sm">
              Message sent successfully! We&apos;ll contact you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 px-4 py-2 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm">
              Error sending message. Please try again.
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="name" className="block font-semibold mb-2 text-sm">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block font-semibold mb-2 text-sm"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block font-semibold mb-2 text-sm"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="service"
              className="block font-semibold mb-2 text-sm"
            >
              Service Category
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="custom-select text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
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
                  className="block font-semibold mb-2 text-sm"
                >
                  Residential Service Type
                </label>
                <select
                  id="residentialType"
                  name="residentialType"
                  value={formData.residentialType}
                  onChange={handleInputChange}
                  className="custom-select  text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
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
                  <label
                    htmlFor="bedrooms"
                    className="block font-semibold mb-2 text-sm"
                  >
                    Number of Bedrooms
                  </label>
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    className="custom-select  text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
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
                    className="block font-semibold mb-2 text-sm"
                  >
                    Square Feet
                  </label>
                  <input
                    type="number"
                    id="squareFeetRes"
                    name="squareFeetRes"
                    value={formData.squareFeetRes}
                    onChange={handleInputChange}
                    placeholder="Approximate square feet"
                    className="text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
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
                  className="block font-semibold mb-2 text-sm"
                >
                  Commercial Service Type
                </label>
                <select
                  id="commercialType"
                  name="commercialType"
                  value={formData.commercialType}
                  onChange={handleInputChange}
                  className="custom-select  text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                >
                  <option value="">Select service type</option>
                  <option value="office">Office Cleaning</option>
                  <option value="warehouse">Warehouse Cleaning</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="squareFeetCom"
                  className="block font-semibold mb-2 text-sm"
                >
                  Square Feet
                </label>
                <input
                  type="number"
                  id="squareFeetCom"
                  name="squareFeetCom"
                  value={formData.squareFeetCom}
                  onChange={handleInputChange}
                  placeholder="Total square feet of space"
                  className="text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
                />
              </div>
            </div>
          )}

          {service === "specialized" && (
            <div className="mb-6">
              <label
                htmlFor="specializedType"
                className="block font-semibold mb-2 text-sm"
              >
                Specialized Service Type
              </label>
              <select
                id="specializedType"
                name="specializedType"
                value={formData.specializedType}
                onChange={handleInputChange}
                className="custom-select text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition"
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
            <label
              htmlFor="specialAreas"
              className="block font-semibold mb-2 text-sm"
            >
              Special Areas Needing Attention
            </label>
            <textarea
              id="specialAreas"
              name="specialAreas"
              value={formData.specialAreas}
              onChange={handleInputChange}
              placeholder="Tell us about any specific areas that need special attention"
              className="text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition min-h-[120px]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block font-semibold mb-2 text-sm"
            >
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Any other details you'd like to share about your cleaning needs?"
              className="text-base sm:text-sm w-full px-4 py-2 rounded-xl border-2 border-gray-200 bg-green-50 focus:bg-white focus:outline-none focus:border-green-500 hover:border-green-500 transition min-h-[120px]"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full font-semibold text-white bg-green-500 shadow-lg transition-transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <FaPaperPlane />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
