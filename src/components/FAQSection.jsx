"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "./design/Container";
import BadgeTitle from "./design/BadgeTitle";
import { fadeInUpVariant, containerVariant } from "@/constants/animationVariants";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve all of South Florida including Fort Lauderdale, Davie, Miami-Dade, Broward County, and Palm Beach County.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. PolishedPro Cleaners is fully licensed, insured, and bonded. You can request proof of insurance at any time.",
  },
  {
    q: "Do I need to provide cleaning supplies?",
    a: "No. We bring all of our own professional-grade, eco-friendly cleaning products and equipment to every job.",
  },
  {
    q: "Do you offer one-time and recurring services?",
    a: "Yes. We offer one-time deep cleans, move-in/move-out cleaning, post-construction cleanup, and recurring janitorial maintenance on daily, weekly, or monthly schedules.",
  },
  {
    q: "How do I get a quote?",
    a: "Simply fill out our free quote form on the Contact Us page or call us at (888) 262-6068. We will get back to you promptly with a customized estimate.",
  },
  {
    q: "Are your cleaners background checked?",
    a: "Yes. All of our team members go through a thorough vetting process. We take the safety and trust of our clients seriously.",
  },
  {
    q: "Can you work around my business hours?",
    a: "Absolutely. We offer flexible scheduling including early mornings, evenings, and weekends to minimize disruption to your business.",
  },
  {
    q: "What if I am not satisfied with the cleaning?",
    a: "Your satisfaction is our priority. If you are not happy with any aspect of our service, contact us within 24 hours and we will return to make it right at no additional cost.",
  },
  {
    q: "Do you offer post-construction cleaning?",
    a: "Yes. Post-construction cleanup is one of our specialties. We remove debris, dust, and residue to leave the space move-in ready.",
  },
  {
    q: "Are you a women-owned business?",
    a: "Yes. PolishedPro Cleaners is a proud women-owned business founded by a mother and daughter team committed to serving South Florida with integrity and care.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <Container classNameParent="bg-white" className="py-16 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariant}
        className="flex flex-col gap-12 max-w-3xl mx-auto"
      >
        <motion.div variants={fadeInUpVariant} className="flex flex-col items-center gap-3 text-center">
          <BadgeTitle>FAQ</BadgeTitle>
          <h2 className="h2 text-gray-900">Common Questions, Clear Answers</h2>
        </motion.div>

        <motion.div variants={containerVariant} className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUpVariant}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-[15px]">{faq.q}</span>
                <ChevronDown
                  className={`size-5 text-gray-400 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
