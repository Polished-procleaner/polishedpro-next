"use client";

import Container from "./Container";
import Image from "next/image";
import { motion } from "motion/react";
import { FaUsers, FaStar, FaHandshake, FaRocket, FaPlay } from "react-icons/fa";
import { services } from "@/constants";
import { containerVariant, fadeInUpVariant, stepVariant } from "@/constants/animationVariants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Features from "./SectionFeatures";
import HomeForm from "../HomeForm";
import AboutSection from "../AboutSection";
import BadgeTitle from "./BadgeTitle";

function ServiceCard({ item }) {
  return (
    <motion.div variants={fadeInUpVariant} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl group">
      <Image src={item.imageUrl} alt={item.title} className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500" width={1200} height={500} unoptimized />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="absolute inset-0 -top-20 backdrop-blur-2xl" style={{ maskImage: "linear-gradient(to top, black 30%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 100%)" }} />
        <div className="absolute inset-0 -top-20 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold text-white mb-2 drop-shadow-lg">{item.title}</h2>
          <p className="text-white/95 text-sm leading-relaxed drop-shadow-md">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function WhyChooseUs() {
  const items = [
    { title: "Eco-friendly products", description: "We use eco-friendly products to ensure that our cleaning services are environmentally responsible.", icon: <FaUsers className="size-6" /> },
    { title: "Premium 5-Star Care", description: "Our consistently high ratings reflect our commitment to exceeding expectations on every single job.", icon: <FaStar className="size-6" /> },
    { title: "Personal Relationships", description: "We believe in building lasting relationships with our clients based on trust, reliability, and exceptional service.", icon: <FaHandshake className="size-6" /> },
    { title: "Quick Response", description: "Need cleaning on short notice? We're known for our flexibility and ability to accommodate urgent requests.", icon: <FaRocket className="size-6" /> },
  ];
  return (
    <Container classNameParent={"bg-gray-100 relative isolate overflow-hidden"} className={"py-16 sm:py-24 flex flex-col gap-16"}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={stepVariant} className="flex items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <BadgeTitle>Trust &amp; Quality</BadgeTitle>
          <h2 className="h2 text-gray-900">Why Customers Choose Us</h2>
        </div>
        <p className="text-gray-500 max-w-xl text-pretty italic leading-relaxed drop-shadow-lg">We are a team of passionate professionals dedicated to delivering exceptional cleaning services. Our commitment to quality and customer satisfaction is unwavering.</p>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={containerVariant} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div key={i} variants={stepVariant} whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="rounded-2xl bg-white p-8 relative shadow-sm flex flex-col gap-6 overflow-hidden">
            <span className="absolute left-0 top-0 h-1 w-full origin-center bg-linear-to-r from-sky-500 to-green-500 transition-transform duration-300 scale-x-100" />
            <div className="size-12 rounded-full bg-linear-to-br from-sky-500 to-green-500 text-white flex items-center justify-center">{item.icon}</div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-900 drop-shadow-lg">{item.title}</h3>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

function OurWorks() {
  const images = [
    "/images/img7b.jpg",
    "/images/dentist.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
  ];
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUpVariant}>
      <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 2000 })]} className="w-full">
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-4 basis-full xs:basis-1/2 lg:basis-1/3 rounded-2xl aspect-3/2">
              <Image src={image} alt={`Cleaning work ${index + 1}`} width={600} height={400} className="size-full object-cover rounded-2xl" />
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

export default function HomeSections() {
  return (
    <>
      <section className="relative flex items-center min-h-[calc(100vh-120px)]">
        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/90 to-white/60 md:to-transparent z-1 w-full md:w-[70%]" />
        <div className="absolute inset-0 bg-[url('/images/img6.jpg')] bg-cover bg-center z-0" />
        <Container classNameParent="z-3 w-full" className="flex flex-col md:flex-row items-center justify-between gap-8 py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={containerVariant} className="flex flex-col gap-6 w-full">
            <motion.h1 variants={fadeInUpVariant} className="h1 text-gray-900">
              Transform Your Space with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-blue to-primary-green">Professional Cleaning</span>
            </motion.h1>
            <motion.p variants={fadeInUpVariant} className="text-gray-500 max-w-2xl italic">
              Experience professional cleaning designed to elevate the quality of your space. We focus on perfection, care, and hygiene, ensuring visible results from the very first moment.{" "}
              <span className="not-italic font-medium text-gray-700">Proudly serving Fort Lauderdale, Broward County &amp; all of South Florida.</span>
            </motion.p>
            <motion.div variants={fadeInUpVariant} className="pt-2 flex items-center gap-4">
              <Link href="/contact">
                <Button variant="theme" size="lg" className="rounded-xl">
                  <CalendarCheck className="size-5" />
                  Book Now
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="default" size="lg" className="rounded-xl">
                  <FaPlay className="size-4" />
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUpVariant} className="p-8 flex flex-col gap-6 w-full max-w-lg bg-black/20 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-50/30">
            <h2 className="text-2xl font-semibold text-white">Get Your Free Quote</h2>
            <HomeForm />
          </motion.div>
        </Container>
      </section>
      <AboutSection />
      <Features />
      <div className="z-2 relative overflow-hidden">
        <motion.div variants={fadeInUpVariant} className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 aspect-video relative overflow-hidden">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/videos/vid5.mp4" type="video/mp4" />
            </video>
          </div>
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </motion.div>
      </div>
      <Container classNameParent="relative isolate" className="py-16 sm:py-24 flex flex-col gap-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={containerVariant} className="flex items-center flex-col gap-6">
          <motion.div variants={fadeInUpVariant} className="flex items-center gap-4">
            <BadgeTitle>Our Services</BadgeTitle>
          </motion.div>
          <motion.h2 variants={fadeInUpVariant} className="h2 text-gray-900 text-center">
            Cleaning Services That Make a <span className="text-theme">Difference</span>
          </motion.h2>
          <motion.p variants={fadeInUpVariant} className="text-gray-500 max-w-3xl text-center">
            Residential and Commercial Cleaning Services: professional solutions that keep your spaces spotless, comfortable, and ready for any occasion.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={containerVariant} className="grid sm:grid-cols-2 items-center gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} item={service} />
          ))}
        </motion.div>
      </Container>
      <Container id="works" classNameParent="relative isolate" className="py-16 sm:py-24 flex flex-col gap-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={containerVariant} className="flex items-center flex-col gap-6">
          <motion.div variants={fadeInUpVariant} className="flex items-center gap-4">
            <BadgeTitle>Our Works</BadgeTitle>
          </motion.div>
          <motion.h2 variants={fadeInUpVariant} className="h2 text-gray-900 text-center">
            See the <span className="text-theme">Difference</span> Yourself
          </motion.h2>
          <motion.p variants={fadeInUpVariant} className="text-gray-500 max-w-2xl text-center">
            Experience how PolishedPro transforms spaces with care and precision — authentic results from real projects in our local community.
          </motion.p>
        </motion.div>
        <OurWorks />
      </Container>
      <WhyChooseUs />
    </>
  );
}
