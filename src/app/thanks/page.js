"use client";

import BadgeTitle from "@/components/design/BadgeTitle";
import Container from "@/components/design/Container";
import { Button } from "@/components/ui/button";
import {
  containerVariant,
  fadeInUpVariant,
} from "@/constants/animationVariants";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Thanks() {
  return (
    <Container
      classNameParent={"relative isolate"}
      className={"py-16 sm:py-24 flex flex-col gap-20"}
    >
      <motion.div
        initial="hidden"
        //animate="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariant}
        className="flex items-center flex-col gap-6"
      >
        <motion.div
          variants={fadeInUpVariant}
          className="flex items-center gap-4"
        >
          <BadgeTitle>Thanks You</BadgeTitle>
        </motion.div>
        <motion.h2
          variants={fadeInUpVariant}
          className="h2 text-gray-900 text-center"
        >
          Thank you for your message!
        </motion.h2>
        <motion.p
          variants={fadeInUpVariant}
          className="text-gray-500 max-w-3xl text-center"
        >
          We have received your message and will get back to you as soon as
          possible.
        </motion.p>
      </motion.div>
      {/* Services Grid */}
      <motion.div
        variants={fadeInUpVariant}
        className="flex items-center justify-center"
      >
        <Link href={"/"}>
          <Button variant={"theme"} size={"lg"} className={"rounded-xl"}>
            <ArrowLeft />
            Go to Home
          </Button>
        </Link>
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-sky-500/30 to-green-500/20 opacity-40 sm:left-[calc(60%-10rem)] sm:w-288.75"
        />
      </div>
      {/* <div className="-z-1 absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-linear-to-b from-sky-500/30 via-green-500/20 to-transparent blur-3xl rounded-full opacity-30" /> */}
    </Container>
  );
}
