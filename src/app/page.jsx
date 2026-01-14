// Constants

// Components
import Blog from "@/components/Blog";
import Card from "@/components/Card";
import TestimonialsSection from "@/components/design/TestimonialsSection";
import HomeSections from "@/components/design/HomeSections";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HomeSections />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Card */}
      <Card
        buttonText={"Start Your Transformation"}
        //ButtonIcon={FaHeart}
        buttonLink={"/contact"}
      />
      {/* Blog */}
      <Blog />
    </main>
  );
}
