// Components
import Stats from "./Stats";
import Container from "./design/Container";
import BadgeTitle from "./design/BadgeTitle";

// Constants
import { stepVariant } from "@/constants/animationVariants";

// Framer Motion
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Container
      classNameParent={"relative isolate"}
      className={"py-16 sm:py-24 flex flex-col gap-16"}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={stepVariant}
        className="flex flex-col gap-2"
      >
        <BadgeTitle>About Us</BadgeTitle>
        <h2 className="h2 text-gray-900">
          A Cleaner Space. <br />A Brand-New Feeling.
        </h2>
      </motion.div>
      <div className="-z-1 absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-linear-to-b from-sky-500/30 via-green-500/20 to-transparent blur-3xl rounded-full opacity-30" />
      <Stats />
    </Container>
  );
}
