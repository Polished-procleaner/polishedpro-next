import TestimonialsSectionClient from "./TestimonialsSectionClient";

export default async function TestimonialsSection() {
  const response = await fetch(`${process.env.APP_URL}/api/reviews`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 },
  });
  const data = await response.json();

  return <TestimonialsSectionClient data={data} />;
}
