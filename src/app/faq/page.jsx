import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "FAQ | PolishedPro Cleaners | Frequently Asked Questions",
  description: "Get answers to common questions about our cleaning services, scheduling, pricing, and more. Serving Fort Lauderdale, Davie, and Broward County.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about PolishedPro Cleaners — answered clearly and honestly."
      />
      <FAQSection />
    </>
  );
}
