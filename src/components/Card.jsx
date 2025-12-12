"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  containerVariant,
  fadeInUpVariant,
} from "@/constants/animationVariants";

export default function Card({ buttonText, buttonLink, ButtonIcon }) {
  return (
    <div className="bg-gray-100">
      <div className="relative isolate overflow-hidden pt-14">
        <div className="absolute left-1/2 top-1/2 -z-1 aspect-square w-full sm:w-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            alt=""
            src="/images/3.png"
            width={600}
            height={600}
            className="size-full object-cover opacity-5"
            unoptimized
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-gray-300 to-gray-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariant}
            className="mx-auto max-w-2xl py-16 sm:py-30 lg:py-25"
          >
            <motion.div
              variants={fadeInUpVariant}
              className="hidden sm:mb-8 sm:flex sm:justify-center"
            >
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Have questions or need help?{" "}
                <a href="#" className="font-semibold text-green-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Talk to us now<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
            <div className="text-center">
              <motion.h2
                variants={fadeInUpVariant}
                className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl drop-shadow-2xl"
              >
                Ready to Fall in Love with Your Space Again?
              </motion.h2>
              <motion.p
                variants={fadeInUpVariant}
                className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 drop-shadow-2xl "
              >
                Join our happy customers and see what pro cleaning can do. Fair
                prices, great results, and friendly service. Let’s talk about
                your space!
              </motion.p>
              <motion.div
                variants={fadeInUpVariant}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Link
                  href={buttonLink}
                  //className="inline-flex items-center gap-2 px-8 py-3 mt-8 font-semibold text-sky-600 bg-white rounded-full shadow-lg transition-transform hover:-translate-y-1"
                >
                  <Button
                    variant={"theme"}
                    size={"lg"}
                    className={"rounded-xl"}
                  >
                    {ButtonIcon && <ButtonIcon />}
                    {buttonText}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-gray-300 to-gray-400 opacity-50 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
