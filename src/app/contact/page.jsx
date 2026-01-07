// src/app/contact/page.jsx
"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaFacebookMessenger,
  FaCalendarCheck,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";
import SectionForm from "@/components/design/SectionForm";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title={"Get Your Free Quote"}
        subtitle={
          "Ready to see what professional cleaning can do for your space? Let's start the conversation."
        }
      />

      <SectionForm />

      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-linear-to-r from-sky-500 to-green-500 px-6 py-2 font-semibold text-white">
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
            <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-1">
              <span className="pointer-events-none absolute left-1/2 -top-px h-1 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-sky-500 via-green-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
              <div
                onClick={() => (window.location.href = "tel:+18882626068")}
                className="mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-linear-to-r from-sky-500 to-green-500 text-white"
                title="Call or Text"
              >
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900">
                Call or Text
              </h3>
              <p className="mt-2 text-gray-600">
                For immediate assistance, click the icon above to call us or
                send a text message. We&apos;re available for urgent requests
                and quick questions.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-1">
              <span className="pointer-events-none absolute left-1/2 -top-px h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 via-green-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
              <div
                onClick={() =>
                  (window.location.href = "mailto:info@polishedprocleaners.net")
                }
                className="mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-white"
                title="Email Us"
              >
                <FaEnvelope className="text-2xl" />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900">
                Email Us
              </h3>
              <p className="mt-2 text-gray-600">
                Click the icon above to open your email client. Send us detailed
                information about your cleaning needs, and we&apos;ll respond
                with a comprehensive quote.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-1">
              <span className="pointer-events-none absolute left-1/2 -top-px h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 via-green-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-white">
                <FaFacebookMessenger className="text-2xl" />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900">
                Social Media
              </h3>
              <p className="mt-2 text-gray-600">
                Connect with us on Facebook, Instagram, or TikTok. Send us a
                message or check out our latest work!
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

            <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-1">
              <span className="pointer-events-none absolute left-1/2 -top-px h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 via-green-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
              <div
                onClick={() => (window.location.href = "sms:+18882626068")}
                className="mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-white"
                title="Emergency Service"
              >
                <FaCalendarCheck className="text-2xl" />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900">
                Emergency Service
              </h3>
              <p className="mt-2 text-gray-600">
                Need cleaning on short notice? Click the icon above to text us
                immediately. We understand emergencies happen and we&apos;re
                here to help when you need us most.
              </p>
              <p className="font-semibold text-sky-600">
                Same-day service available
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-sky-500 to-green-500 px-6 py-2 font-semibold text-white">
              Service Areas
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 md:text-5xl">
              We Serve Your Community
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Proudly providing professional cleaning services throughout our
              local area.
            </p>
          </div>

          <article className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-green-500 text-white">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h3 className="font-display text-lg font-semibold text-gray-900">
              Local Service Area
            </h3>
            <p className="mt-2 text-gray-600">
              We&apos;re your local cleaning experts, serving the community and
              surrounding areas. As a family-owned business, we take pride in
              keeping our neighbors&apos; spaces spotless and beautiful.
            </p>
            <div className="mt-8 space-y-2">
              <p className="font-semibold text-sky-600">
                Not sure if we serve your area? Give us a call!
              </p>
              <p className="text-gray-600">
                We&apos;re always looking to expand our service to help more
                families and businesses in our community.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
