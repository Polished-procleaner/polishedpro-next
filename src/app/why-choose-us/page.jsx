import OurStory from "@/components/OurStory";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Why Choose Us | PolishedPro Cleaners | South Florida Cleaning Experts",
  description: "Discover why 100+ South Florida businesses and homes trust PolishedPro Cleaners — women-owned, fully insured, eco-friendly, and committed to excellence.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        title="Why Choose PolishedPro Cleaners"
        subtitle="Women-owned, fully insured, eco-friendly, and committed to raising the standard of professional cleaning in South Florida."
      />
      <OurStory />
    </>
  );
}
