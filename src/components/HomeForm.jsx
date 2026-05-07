"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/facebookPixel";
import { useRouter } from "next/navigation";

export default function HomeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    smsConsent: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSmsConsent = (value) => {
    setFormData((prev) => ({ ...prev, smsConsent: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.smsConsent) {
      setFormData((prev) => ({ ...prev, smsConsent: "no" }));
    }
    setIsSubmitting(true);
    const now = new Date();
    const date = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const dataToSend = { ...formData, date };
    const response = await fetch(
      "https://hook.us1.make.com/1wsap6a9eiocgulf7rlij660a8ah1kis",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      }
    );
    if (response.ok) {
      trackEvent("lead", {
        content_name: "Contact Form",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_view",
        page_path: "/gracias",
        page_title: "Thank You - Form Submitted",
      });
      router.push("/thanks");
      return;
    }
    setIsSubmitting(false);
    setSubmitStatus("error");
  };

  return (
    <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <Input id="name" name="name" placeholder="Name" className="bg-white rounded-lg" value={formData.name} onChange={handleInputChange} required />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input id="email" name="email" placeholder="Email" className="bg-white rounded-lg" required value={formData.email} onChange={handleInputChange} type="email" />
          <Input id="phone" name="phone" placeholder="Phone" type="tel" className="bg-white rounded-lg" required value={formData.phone} onChange={handleInputChange} />
        </div>
        <select id="service" name="service" required value={formData.service} onChange={handleInputChange} className="custom-select text-base sm:text-sm w-full px-4 py-2 rounded-lg border-2 border-gray-200 bg-white focus:bg-white focus:outline-none focus:border-ring transition cursor-pointer">
          <option value="">Select a service category</option>
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
        </select>
      </div>

      <div className="bg-white/20 rounded-xl p-4 flex flex-col gap-3 border border-white/30">
        <p className="text-xs text-white leading-relaxed">
          Do you agree to receive text messages from <strong>PolishedPro Cleaners</strong> sent from <strong>18882626068</strong>? Message frequency varies and may include <strong>appointment confirmations, reminders, and customer support</strong>. Message and data rates may apply. Reply <strong>STOP</strong> or <strong>CANCEL</strong> at any time to unsubscribe. For assistance reply <strong>HELP</strong> or contact support at <strong>18882626068</strong>.
        </p>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="smsConsent" checked={formData.smsConsent === "yes_all"} onChange={(e) => handleSmsConsent(e.target.checked ? "yes_all" : "")} className="mt-1 accent-sky-400" />
          <span className="text-xs text-white leading-relaxed">I agree to receive text messages from <strong>PolishedPro Cleaners</strong> sent from <strong>18882626068</strong>.</span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="smsConsentNo" checked={formData.smsConsent === "no"} onChange={(e) => handleSmsConsent(e.target.checked ? "no" : "")} className="mt-1 accent-sky-400" />
          <span className="text-xs text-white leading-relaxed">No, I do not agree to receive text messages from PolishedPro Cleaners.</span>
        </label>
        <p className="text-xs text-white/70">
          See our <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="underline text-white">Privacy Policy</a> for details on how we handle your information.
        </p>
      </div>

      <Button variant="theme" type="submit" disabled={isSubmitting}>
        Send Message{" "}
        {isSubmitting && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
      </Button>
      {submitStatus === "error" && (
        <p className="text-red-300 text-sm">An error occurred. Please try again later.</p>
      )}
    </form>
  );
}
