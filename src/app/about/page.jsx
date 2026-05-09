import OurStory from "@/components/OurStory";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us | PolishedPro Cleaners | Women-Owned Cleaning Company in South Florida",
  description: "Learn about PolishedPro Cleaners — a women-owned, mother and daughter janitorial company serving Fort Lauderdale, Davie, and Broward County with dependable, high-quality cleaning services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About PolishedPro Cleaners"
        subtitle="A women-owned business built on integrity, care, and a commitment to keeping South Florida clean and healthy."
      />
      <OurStory />
    </>
  );
}
