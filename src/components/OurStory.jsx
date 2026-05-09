"use client";

import { motion } from "motion/react";
import { fadeInUpVariant, containerVariant } from "@/constants/animationVariants";
import Container from "./design/Container";
import BadgeTitle from "./design/BadgeTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

export default function OurStory() {
  return (
    <Container
      classNameParent="bg-gradient-to-br from-sky-50 to-white relative isolate overflow-hidden"
      className="py-16 sm:py-24"
    >
      {/* decorative background blob */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariant}
        className="flex flex-col gap-20"
      >
        {/* Section header */}
        <motion.div variants={fadeInUpVariant} className="flex flex-col items-center gap-3 text-center">
          <BadgeTitle>Who We Are</BadgeTitle>
          <h2 className="h2 text-gray-900">
            More Than a Cleaning Company —{" "}
            <span className="text-theme">A Community Commitment</span>
          </h2>
        </motion.div>

        {/* Our Story + Our Solution side by side */}
        <motion.div
          variants={containerVariant}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Our Story */}
          <motion.div
            variants={fadeInUpVariant}
            className="bg-white rounded-3xl p-10 shadow-sm border border-sky-100 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            </div>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed text-[15px]">
              <p>
                At PolishedPro Cleaners, we believe a clean environment is more than appearance — it&apos;s about{" "}
                <strong className="text-gray-800">health, safety, and peace of mind.</strong> As a women-owned
                business founded by a mother and child team, we saw a growing need throughout South Florida for
                cleaning services that truly prioritized sanitation, professionalism, and customer care.
              </p>
              <p>
                Too often, we noticed businesses and facilities were being cleaned without proper attention to
                detail, leaving behind spaces that looked clean but were not properly sanitized. We knew our
                community deserved better. That is why we founded PolishedPro with one clear purpose: to provide{" "}
                <strong className="text-gray-800">
                  dependable, high-quality janitorial and sanitation services
                </strong>{" "}
                that help keep South Florida safe, clean, and welcoming.
              </p>
              <p>
                As a women-owned janitorial company, we take pride in building trusted relationships with our
                clients through <strong className="text-gray-800">consistency, integrity, and care.</strong>
              </p>
            </div>
          </motion.div>

          {/* Our Solution */}
          <motion.div
            variants={fadeInUpVariant}
            className="bg-white rounded-3xl p-10 shadow-sm border border-sky-100 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold text-gray-900">Our Solution</h3>
            </div>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed text-[15px]">
              <p>
                PolishedPro Cleaners provides professional janitorial and sanitation services designed to help
                businesses and properties maintain{" "}
                <strong className="text-gray-800">clean, healthy, and professionally maintained environments.</strong>
              </p>
              <p>
                Through detailed cleaning procedures, industry-standard sanitation practices, and dependable
                service, we help eliminate germs, buildup, and overlooked areas that many companies fail to
                properly address. Serving communities across South Florida, our team is dedicated to delivering
                cleaning solutions with{" "}
                <strong className="text-gray-800">professionalism, efficiency, and attention to detail.</strong>
              </p>
              <p>
                Our mission is to make professional cleaning simple, reliable, and accessible — delivering
                outstanding customer satisfaction with every service, from routine janitorial maintenance to deep
                cleaning and sanitation.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div variants={containerVariant} className="flex flex-col gap-10">
          <motion.div variants={fadeInUpVariant} className="flex flex-col items-center gap-3 text-center">
            <BadgeTitle>Why Choose Us</BadgeTitle>
            <h2 className="h2 text-gray-900">The PolishedPro Difference</h2>
            <p className="text-gray-500 max-w-2xl text-pretty">
              We are committed to raising the standard of professional cleaning — delivering reliable service, detailed sanitation practices, and exceptional customer satisfaction.
            </p>
          </motion.div>
          <motion.div variants={containerVariant} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🌿", title: "Eco-Friendly Products", desc: "We use environmentally responsible cleaning products that are safe for people, pets, and the planet." },
              { emoji: "⭐", title: "Premium 5-Star Care", desc: "77+ five-star Google reviews reflect our commitment to exceeding expectations on every single job." },
              { emoji: "🤝", title: "Trusted Relationships", desc: "We build lasting relationships with clients through consistency, integrity, and personalized care." },
              { emoji: "⚡", title: "Quick Response", desc: "Need cleaning on short notice? We are known for our flexibility and ability to accommodate urgent requests." },
              { emoji: "🔒", title: "Fully Insured & Bonded", desc: "Complete peace of mind — your property and our team are fully protected on every job." },
              { emoji: "👩‍💼", title: "Women-Owned Business", desc: "Founded by a mother and daughter team proud to serve South Florida with care and professionalism." },
              { emoji: "🏥", title: "Proper Sanitation", desc: "We go beyond surface cleaning with industry-standard sanitation practices that truly protect your space." },
              { emoji: "📅", title: "Flexible Scheduling", desc: "We work around your schedule — offering routine maintenance, one-time deep cleans, and everything in between." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariant}
                className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm flex flex-col gap-3"
              >
                <span className="text-3xl">{item.emoji}</span>
                <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Women-Owned badge + CTA banner */}
        <motion.div
          variants={fadeInUpVariant}
          className="rounded-3xl bg-gradient-to-r from-sky-500 to-green-500 p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-white"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👩‍💼</span>
              <span className="text-sm font-semibold uppercase tracking-widest opacity-90">Women-Owned Business</span>
            </div>
            <h3 className="text-2xl font-semibold">
              Ready to experience the PolishedPro difference?
            </h3>
            <p className="opacity-85 text-sm">
              Join 100+ happy customers across South Florida who trust us with their spaces.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button size="lg" className="rounded-xl bg-white text-sky-600 hover:bg-gray-100 font-semibold shadow-md">
              <CalendarCheck className="size-5" />
              Get a Free Quote
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Container>
  );
}
