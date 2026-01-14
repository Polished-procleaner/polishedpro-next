"use client";

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
import { useState } from "react";
//import testimonialData from "@/constants/testimonials.json";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={clsx(
            "size-5 fill-gray-300 text-gray-300",
            i < rating && "fill-yellow-400 text-yellow-400"
          )}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = data.comment?.length > 120;

  const typeRating = {
    FIVE: 5,
    FOUR: 4,
    THREE: 3,
    TWO: 2,
    ONE: 1,
  };

  const formatted = new Date(data.createTime).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex flex-col items-start gap-2 bg-gray-50 p-6 rounded-2xl h-full border border-gray-200">
      <div className="flex items-center gap-2 w-full">
        <Image
          src={data.reviewer.profilePhotoUrl}
          alt={data.reviewer.displayName}
          width={50}
          height={50}
          className="rounded-full shrink-0"
          unoptimized
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-900">
            {data.reviewer.displayName}
          </h3>
          <span className="text-xs text-gray-500">{formatted}</span>
        </div>
      </div>
      <Rating rating={typeRating[data.starRating]} />
      <div className="flex-1">
        <p className="text-gray-600 leading-relaxed text-sm">
          &quot;
          {isLong && !isExpanded
            ? `${data.comment.slice(0, 120)}...`
            : data.comment}
          &quot;
        </p>
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-theme text-xs font-semibold mt-1 hover:underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default function TestimonialsSectionClient({ data }) {
  /* const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []); */

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
            <Rating rating={data.averageRating} />
            <span className="text-gray-500 text-sm">
              Based on {data.totalReviewCount} reviews
            </span>
            <a
              href="https://share.google/waT87hhK46ZxEZRpQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full mt-4">Write a review</Button>
            </a>
          </div>
        </div>
        {data?.reviews?.length > 0 && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="sm:flex-1 sm:min-w-0"
          >
            <CarouselContent className="-ml-4">
              {data?.reviews?.map((review) => (
                <CarouselItem
                  key={review.reviewId}
                  className="pl-4 basis-full xs:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="h-full">
                    <TestimonialCard data={review} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 border-none size-8" />
            <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 border-none size-8" />
          </Carousel>
        )}
      </motion.div>
      <div className="-z-1 absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-linear-to-b from-sky-500/30 via-green-500/20 to-transparent blur-3xl rounded-full opacity-30" />
    </Container>
  );
}
