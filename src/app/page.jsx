// "use client";
// import { FaCalendarCheck, FaPlay, FaHeart } from "react-icons/fa";
// import { FaHome, FaBuilding, FaThLarge, FaAward } from "react-icons/fa";
// import Carousel from "@/components/Carousel";
// import SectionForm from "@/components/SectionForm";
// import Card from "@/components/Card";
// import Category from "@/components/Category";
// import Blog from "@/components/Blog";
// export default function HomePage() {
//   const slides = [
//     {
//       title: "Residential",
//       subtitle: "Home cleaning experts",
//       src: "/images/BA/27.png",
//       Icon: FaHome,
//     },
//     {
//       title: "Commercial",
//       subtitle: "Office & warehouse",
//       src: "/images/BA/24.png",
//       Icon: FaBuilding,
//     },
//     {
//       title: "Specialized",
//       subtitle: "Floor care specialists",
//       src: "/images/BA/21.png",
//       Icon: FaThLarge,
//     },
//     {
//       title: "5-Star Rated",
//       subtitle: "Customer approved",
//       src: "/images/BA/6.png",
//       Icon: FaAward,
//     },
//   ];

"use client";

import Container from "@/components/design/Container";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { motion } from "motion/react";
import {
  containerVariant,
  fadeInUpVariant,
} from "@/constants/animationVariants";
import AboutSection from "@/components/AboutSection";
import BadgeTitle from "@/components/design/BadgeTitle";
import { services } from "@/constants";
import Image from "next/image";
import WorksCarousel from "@/components/WorksCarousel";

//   return (
//     <main>
//       <section className="relative flex items-center min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-sky-700 to-green-200">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 opacity-30"
//           style={{
//             background:
//               "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1000 1000%22%3E%3Cdefs%3E%3Cpattern id=%22g%22 width=%2250%22 height=%2250%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 50 0 L 0 0 0 50%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23g)%22/%3E%3C/svg%3E')",
//           }}
//         />

//         <div className="relative z-10 flex flex-col md:flex-row items-center max-w-[1400px] w-full gap-8 px-8 py-12 text-center md:text-left mx-auto">
//           <div className="text-white md:w-[40%] flex flex-col justify-center">
//             <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm rounded-full backdrop-blur-md bg-white/10 border border-white/20 w-fit mx-auto md:mx-0">
//               Premium Cleaning Services
//             </div>
//             <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
//               Transform Your Space <br /> with{" "}
//               <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
//                 Professional
//               </span>{" "}
//               Cleaning
//             </h1>
//             <p className="mt-3 text-xl font-light italic opacity-95">
//               Leave the Cleaning to Us
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8 items-center justify-center md:justify-start">
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-full shadow-lg transition-transform bg-gradient-to-r from-green-500 to-emerald-500 hover:-translate-y-1"
//               >
//                 <FaCalendarCheck />
//                 Book Now
//               </a>
//               <a
//                 href="/services"
//                 className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white border-2 rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-transform"
//               >
//                 <FaPlay />
//                 Our Services
//               </a>
//             </div>
//           </div>

//           <div className="md:w-[60%] flex items-center justify-center">
//             <Carousel className="w-full" slides={slides} interval={3000} />
//           </div>
//         </div>
//       </section>

//       <Category />
//       <Card
//         buttonText={"Start Your Transformation"}
//         ButtonIcon={FaHeart}
//         buttonLink={"/contact"}
//       ></Card>

//       <SectionForm />
//       <Blog></Blog>
//     </main>
//   );
// }

function ServiceCard({ item }) {
  return (
    <motion.div
      variants={fadeInUpVariant}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl"
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-[500px] object-cover"
        width={1200}
        height={500}
        unoptimized
      />

      {/* Contenedor de texto con blur degradado */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Capa de blur que se desvanece hacia arriba */}
        <div
          className="absolute inset-0 -top-20 backdrop-blur-2xl"
          style={{
            maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 30%, transparent 100%)",
          }}
        ></div>

        {/* Overlay con gradiente de color */}
        <div className="absolute inset-0 -top-20 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Contenido de texto */}
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold text-white mb-2 drop-shadow-lg">
            {item.title}
          </h2>
          <p className="text-white/95 text-sm leading-relaxed drop-shadow-md">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[calc(100vh-120px)] overflow-hidden ">
        <div className="absolute inset-0 bg-[url('/images/home.jpg')] bg-cover bg-center z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent z-1 from-80% w-[60%]" />
        <Container classNameParent="z-3 w-full">
          <motion.div
            initial="hidden"
            //animate="visible"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariant}
            className="flex flex-col gap-6"
          >
            <motion.h1 variants={fadeInUpVariant} className="h1 text-gray-900">
              Transform Your Space with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0ea5e9]  to-[#22c55e]">
                Professional Cleaning
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUpVariant}
              className="text-gray-500 max-w-3xl  italic"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </motion.p>
            <motion.div
              variants={fadeInUpVariant}
              className="pt-2 flex items-center gap-4"
            >
              <Button variant={"theme"} size={"lg"} className={"rounded-xl"}>
                <CalendarCheck className="size-5" />
                Book Now
              </Button>
              <Button variant={"default"} size={"lg"} className={"rounded-xl"}>
                <FaPlay className="size-4" />
                Our Services
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
      {/* About Section */}
      <AboutSection />
      {/* Services Section */}
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
            <BadgeTitle>Our Services</BadgeTitle>
          </motion.div>
          <motion.h2
            variants={fadeInUpVariant}
            className="h2 text-gray-900 text-center"
          >
            Cleaning Services That Make a{" "}
            <span className="text-theme">Difference</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariant}
            className="text-gray-500 max-w-3xl text-center"
          >
            Residential Cleaning, Commercial Cleaning, and Specialized Floor
            Cleaning Services: professional solutions that keep your spaces
            spotless, comfortable, and ready for any occasion.
          </motion.p>
        </motion.div>
        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariant}
          className="grid sm:grid-cols-3 items-center gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} item={service} />
          ))}
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
      {/* Works Section */}
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
            <BadgeTitle>Our Works</BadgeTitle>
          </motion.div>
          <motion.h2
            variants={fadeInUpVariant}
            className="h2 text-gray-900 text-center"
          >
            See the <span className="text-theme">Difference</span> Yourself
          </motion.h2>
          <motion.p
            variants={fadeInUpVariant}
            className="text-gray-500 max-w-2xl text-center"
          >
            Experience how PolishedPro transforms spaces with care and
            precision—authentic results from real projects in our local
            community.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariant}
          className="flex flex-col gap-2"
        >
          <WorksCarousel />
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
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-sky-500/30 to-green-500/20 opacity-50 sm:left-[calc(60%-10rem)] sm:w-288.75"
          />
        </div>
      </Container>
    </main>
  );
}
