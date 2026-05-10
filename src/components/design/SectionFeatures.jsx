"use client";

import Container from "./Container";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  containerVariant,
  fadeInUpVariant,
} from "@/constants/animationVariants";
import BadgeTitle from "./BadgeTitle";

function HoverVideo({ image }) {
  const videoRef = useRef(null);

  return (
    <div
      className="relative w-full h-48 rounded-lg overflow-hidden"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        videoRef.current?.pause();
        videoRef.current.currentTime = 0; // (opcional) reinicia
      }}
    >
      <Image
        src={image}
        alt="preview"
        fill
        className="object-cover transition-opacity duration-300 group-hover:opacity-0"
      />

      <video
        ref={videoRef}
        src="/videos/vid1.mp4"
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        muted
        loop
        playsInline
      />
    </div>
  );
}

export default function Features() {
  const items = [
    {
      image:
        "/images/img1.jpg",
      description:
        "An immaculate living space where sophistication and comfort blend in perfect harmony.",
    },
    {
      image:
        "/images/img2.jpg",
      description:
        "Every detail shines with elegance, creating a modern, polished, and welcoming atmosphere.",
    },
    {
      image:
        "/images/img3.jpg",
      description:
        "A refined and luminous space designed to reflect style, care, and distinction.",
    },
    {
      image:
        "/images/img4.jpg",
      description:
        "High-level cleaning that enhances the natural beauty of your living area and transforms the entire ambiance.",
    },
  ];
  return (
    <Container
      classNameParent={"relative isolate"}
      className={"py-16 sm:py-24 flex flex-col gap-20"}
    >
      {/* Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariant}
        className="flex flex-col items-center gap-20"
      >
        <div className="flex flex-col items-center gap-6">
          <motion.div
            variants={fadeInUpVariant}
            className="flex items-center gap-4"
          >
            <BadgeTitle>Premium Cleaning Services</BadgeTitle>
          </motion.div>
          <motion.h2
            variants={fadeInUpVariant}
            className="h2 text-gray-900 text-center max-w-xl"
          >
            Designed for Those Who{" "}
            <span className="text-theme">Expect the Best</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariant}
            className="text-gray-500 max-w-3xl text-center"
          >
            Experience a new level of refined cleaning crafted for the most
            demanding standards. Every detail is handled with precision, care,
            and elegance—delivering a flawless environment that reflects quality
            in every corner.
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              variants={fadeInUpVariant}
              className="flex flex-col gap-4 group"
            >
              <HoverVideo image={item.image} description={item.description} />

              <p className="text-gray-600 text-sm text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
