import ContactForm from "../ContactForm";
import Container from "./Container";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaComment } from "react-icons/fa";

const contactItems = [
  {
    id: "phone",
    icon: FaPhone,
    title: "Give Us a Call",
    text: "Click to call us directly",
    href: "tel:+18882626068",
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
    href: "sms:+18882626068",
  },
];

export default function SectionForm() {
  return (
    <Container
      className={"py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center"}
    >
      <aside className="order-2 md:order-1 relative overflow-hidden rounded-3xl bg-linear-to-br from-sky-500 via-sky-700 to-sky-900 p-8 md:p-10 text-white shadow-xl">
        <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <h3 className="text-2xl md:text-3xl font-bold">
          Let&apos;s Start the Conversation
        </h3>

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
      <div className="order-1 md:order-2 h-full flex flex-col justify-center gap-2 p-8">
        <h3 className="text-2xl md:text-3xl font-bold">Get Your Free Quote</h3>
        <p className="leading-relaxed opacity-90 mb-6 text-pretty text-gray-600">
          Ready to see what professional cleaning can do for your space?
          We&apos;d love to chat about your needs and provide a free, honest
          estimate.
        </p>
        <ContactForm />
        {/* <p className="text-xs text-gray-500 text-center">
          <Info className="inline mr-2 size-3" />
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy.pdf" target="_blank" className="underline">
            Privacy Policy
          </a>
          .
        </p> */}
      </div>
    </Container>
  );
}
