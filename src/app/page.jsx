"use client";

// Icons
import { FaPlay } from "react-icons/fa";
import { CalendarCheck } from "lucide-react";
import { FaUsers, FaStar, FaHandshake, FaRocket } from "react-icons/fa";

// Animation Variants
import {
  containerVariant,
  fadeInUpVariant,
  stepVariant,
} from "@/constants/animationVariants";
import { motion } from "motion/react";

// Constants
import { services } from "@/constants";

// Components
import Image from "next/image";
import Blog from "@/components/Blog";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/AboutSection";
import Container from "@/components/design/Container";
import BadgeTitle from "@/components/design/BadgeTitle";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/design/TestimonialsSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

function ServiceCard({ item }) {
  return (
    <motion.div
      variants={fadeInUpVariant}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl group"
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
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
        />

        {/* Overlay con gradiente de color */}
        <div className="absolute inset-0 -top-20 bg-linear-to-t from-black/60 via-black/30 to-transparent" />

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

function WhyChooseUs() {
  const items = [
    {
      title: "Eco-friendly products",
      description:
        "We use eco-friendly products to ensure that our cleaning services are environmentally responsible.",
      icon: <FaUsers className="size-6" />,
    },
    {
      title: "Premium 5-Star Care",
      description:
        "Our consistently high ratings reflect our commitment to exceeding expectations on every single job.",
      icon: <FaStar className="size-6" />,
    },
    {
      title: "Personal Relationships",
      description:
        "We believe in building lasting relationships with our clients based on trust, reliability, and exceptional service.",
      icon: <FaHandshake className="size-6" />,
    },
    {
      title: "Quick Response",
      description:
        "Need cleaning on short notice? We're known for our flexibility and ability to accommodate urgent requests.",
      icon: <FaRocket className="size-6" />,
    },
  ];

  return (
    <Container
      classNameParent={"bg-gray-100 relative isolate overflow-hidden"}
      className={"py-16 sm:py-24 flex flex-col gap-16"}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={stepVariant}
        className="flex items-center justify-between gap-6"
      >
        <div className="flex flex-col gap-2">
          <BadgeTitle>Trust & Quality</BadgeTitle>
          <h2 className="h2 text-gray-900">Why Customers Choose Us</h2>
        </div>
        <p className=" text-gray-500 max-w-xl text-pretty italic leading-relaxed drop-shadow-lg">
          We are a team of passionate professionals dedicated to delivering
          exceptional cleaning services. Our commitment to quality and customer
          satisfaction is unwavering.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariant}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={stepVariant}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-2xl bg-white p-8 relative shadow-sm flex flex-col gap-6 overflow-hidden"
          >
            <span
              className="absolute left-0 top-0 h-1 w-full origin-center bg-linear-to-r from-sky-500 to-green-500
                            transition-transform duration-300 scale-x-100 "
            />
            <div className="size-12 rounded-full bg-linear-to-br from-sky-500 to-green-500 text-white flex items-center justify-center">
              {item.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-900 drop-shadow-lg">
                {item.title}
              </h3>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Decoración */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-1404/767 w-351 bg-linear-to-r from-gray-400/90 to-gray-400/50 opacity-50"
        />
      </div>
    </Container>
  );
}

function OurWorks() {
  const images = [
    "https://static.wixstatic.com/media/02498f_be51d968845248379cba9e1c019a89da~mv2.jpg",
    "https://static.wixstatic.com/media/02498f_90c6fd391f2f4a28a46a9ce828435f48~mv2.jpg",
    "https://static.wixstatic.com/media/02498f_4917f176445c487380ad511cd184242e~mv2.jpg",
    "https://static.wixstatic.com/media/02498f_a5a78a9241ca4c90927645f34441accb~mv2.jpeg",
    "https://static.wixstatic.com/media/02498f_40aeeccca5aa4c9db4bbd3b570e0a16b~mv2.jpg",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUpVariant}
      className=""
    >
      {/* <WorksCarousel /> */}
      {/* {images.map((image, index) => (
        <div key={index} className="rounded-2xl aspect-3/2">
          <Image
            src={image}
            alt={`image-${index}`}
            width={600}
            height={400}
            className="size-full object-cover rounded-2xl"
          />
        </div>
      ))} */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full xs:basis-1/2 lg:basis-1/3 rounded-2xl aspect-3/2"
            >
              <Image
                src={image}
                alt={`image-${index}`}
                width={600}
                height={400}
                className="size-full object-cover rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="static translate-y-0 translate-x-0" />
          <CarouselNext className="static translate-y-0 translate-x-0" />
        </div>
      </Carousel>
    </motion.div>
  );
}

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
        src="https://video.wixstatic.com/video/02498f_ff2b45f9c9fc482b95a489793c4112b2/720p/mp4/file.mp4"
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        muted
        loop
        playsInline
      />
    </div>
  );
}

function Features() {
  const items = [
    {
      image:
        "https://static.wixstatic.com/media/02498f_be51d968845248379cba9e1c019a89da~mv2.jpg",
      description:
        "An immaculate living space where sophistication and comfort blend in perfect harmony.",
    },
    {
      image:
        "https://static.wixstatic.com/media/02498f_90c6fd391f2f4a28a46a9ce828435f48~mv2.jpg",
      description:
        "Every detail shines with elegance, creating a modern, polished, and welcoming atmosphere.",
    },
    {
      image:
        "https://static.wixstatic.com/media/02498f_536e1a3ef85c43a68c20b6f19e2f5e60~mv2.jpg",
      description:
        "A refined and luminous space designed to reflect style, care, and distinction.",
    },
    {
      image:
        "https://static.wixstatic.com/media/02498f_ba34ac59451d40ed91ea8ba3d2e50433~mv2.jpg",
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

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[calc(100vh-120px)] overflow-hidden">
        {/* Con imagen*/}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white/90  to-transparent z-1 from-80% w-[60%]" /> */}
        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/90 to-white/60 md:to-transparent z-1 w-full md:w-[70%]" />
        <div className="absolute inset-0 bg-[url('https://static.wixstatic.com/media/02498f_1584ba7b2af84b1bbbd0f68057f8cb07~mv2.jpeg')] bg-cover bg-center z-0" />
        <Container
          classNameParent="z-3 w-full"
          className={
            "flex flex-col md:flex-row items-center justify-between gap-8 py-16 md:py-0"
          }
        >
          <motion.div
            initial="hidden"
            //animate="visible"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariant}
            className="flex flex-col gap-6 w-full"
          >
            <motion.h1 variants={fadeInUpVariant} className="h1 text-gray-900">
              Transform Your Space with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-blue  to-primary-green">
                Professional Cleaning
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUpVariant}
              className="text-gray-500 max-w-2xl italic"
            >
              Experience professional cleaning designed to elevate the quality
              of your space. We focus on perfection, care, and hygiene, ensuring
              visible results from the very first moment.
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariant}
            className="p-6 flex flex-col gap-6 w-full max-w-lg bg-black/20 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-50/30"
          >
            <h2 className="text-2xl font-semibold text-white">
              Get Your Free Quote
            </h2>
            <ContactForm />
          </motion.div>
        </Container>
      </section>
      {/* About Section */}
      <AboutSection />
      {/* New Section */}
      <Features />
      <div className="z-2 relative overflow-hidden ">
        <motion.div
          variants={fadeInUpVariant}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <div className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 aspect-video relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://video.wixstatic.com/video/02498f_b4654a02ad1a46c98a1cebe76d727c93/720p/mp4/file.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </motion.div>
      </div>
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
        id="works"
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
        <OurWorks />
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
      {/* Why Choose Us Section */}
      <WhyChooseUs />
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
