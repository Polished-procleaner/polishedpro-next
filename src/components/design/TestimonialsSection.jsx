import TestimonialsSectionClient from "./TestimonialsSectionClient";

export default async function TestimonialsSection() {
  const response = await fetch(
    `https://www.polishedprocleaners.net/api/reviews`,
    {
      cache: "force-cache",
      next: { revalidate: 60 * 60 },
    },
  );
  const res = await response.json();

  return <TestimonialsSectionClient data={res} />;
}
