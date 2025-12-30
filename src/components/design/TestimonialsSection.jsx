import Container from "./Container";
import BadgeTitle from "./BadgeTitle";
import { motion } from "motion/react";
import {
  fadeInUpVariant,
  containerVariant,
} from "@/constants/animationVariants";
import { Star } from "lucide-react";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";

const Rating = ({ stars }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={clsx(
            "size-5 fill-gray-300 text-gray-300",
            i < stars && "fill-yellow-400 text-yellow-400"
          )}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ data }) => {
  return (
    <div className="flex flex-col items-start gap-2 bg-gray-50 p-6 rounded-2xl h-full border border-gray-200">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>
        <span className="text-xs text-gray-500">{data.date}</span>
      </div>
      <Rating stars={data.stars} />
      <p className="text-gray-600 leading-relaxed text-sm flex-1">
        &quot;{data.description}&quot;
      </p>
    </div>
  );
};

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      description:
        "The team did an incredible job on our windows. They haven't been this clear in years! Very professional and efficient.",
      stars: 5,
      date: "2024-03-12",
    },
    {
      name: "Michael Chen",
      description:
        "PolishedPro is my go-to for monthly deep cleans. Their attention to detail is unmatched in the neighborhood.",
      stars: 5,
      date: "2024-02-28",
    },
    {
      name: "Emily Rodriguez",
      description:
        "Great service and very friendly staff. They were able to accommodate my last-minute request for a move-out clean.",
      stars: 4,
      date: "2024-02-15",
    },
    {
      name: "David Thompson",
      description:
        "Reliable, punctual, and thorough. It's such a relief coming home to a perfectly clean house after a long work week.",
      stars: 5,
      date: "2024-01-20",
    },
    {
      name: "Jessica Taylor",
      description:
        "I've tried several services, but PolishedPro is by far the best. They actually care about the quality of their work.",
      stars: 5,
      date: "2024-01-05",
    },
    {
      name: "Robert Wilson",
      description:
        "Excellent communication and fair pricing. They did a fantastic job on our hardwood floors.",
      stars: 4,
      date: "2023-12-18",
    },
    {
      name: "Amanda White",
      description:
        "The kitchen looks brand new! I don't know how they got those stains out, but I'm beyond impressed.",
      stars: 5,
      date: "2023-12-12",
    },
  ];

  return (
    <Container
      id="testimonials"
      classNameParent={"relative isolate "}
      className={"py-16 sm:py-24 flex flex-col gap-16"}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUpVariant}
        className="flex flex-col gap-2"
      >
        <BadgeTitle>Testimonials</BadgeTitle>
        <h2 className="h2 text-gray-900">
          What Our <span className="text-theme">Neighbors</span> Say
        </h2>
        <p className="text-gray-500 max-w-2xl">
          Real feedback from real people who&apos;ve experienced the PolishedPro
          difference.
        </p>
      </motion.div>
      {/* Testimonials */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
        className="w-full flex flex-col-reverse sm:flex-row sm:items-center gap-5"
      >
        <div className="flex flex-col items-start gap-2 w-56">
          <div className="flex flex-col gap-2 items-center">
            <div className="aspect-2/1 max-w-32">
              <Image
                src="/google-logo.svg"
                alt="Google Logo"
                width={100}
                height={100}
                className="object-contain size-full"
              />
            </div>
            <Rating stars={4} />
            <span className="text-gray-500 text-sm">
              Based on {testimonials.length} reviews
            </span>
            <Button className="w-full mt-4">Write a review</Button>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="sm:flex-1 sm:min-w-0"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full xs:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="h-full">
                  <TestimonialCard data={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 border-none size-8" />
          <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 border-none size-8" />
        </Carousel>
      </motion.div>
      <div className="-z-1 absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-linear-to-b from-sky-500/30 via-green-500/20 to-transparent blur-3xl rounded-full opacity-30" />
    </Container>
  );
}
