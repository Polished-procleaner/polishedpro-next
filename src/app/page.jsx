// src/app/page.jsx

"use client";
import { FaCalendarCheck, FaPlay, FaHeart } from "react-icons/fa";
import { FaHome, FaBuilding, FaThLarge, FaAward } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import Stats from "@/components/Stats";
import Carousel from "@/components/Carousel";
import SectionForm from "@/components/SectionForm";
import Card from "@/components/Card";
import Category from "@/components/Category";
import Blog from "@/components/Blog";
export default function HomePage() {
  const slides = [
    {
      title: "Residential",
      subtitle: "Home cleaning experts",
      src: "/images/BA/27.png",
      Icon: FaHome,
    },
    {
      title: "Commercial",
      subtitle: "Office & warehouse",
      src: "/images/BA/24.png",
      Icon: FaBuilding,
    },
    {
      title: "Specialized",
      subtitle: "Floor care specialists",
      src: "/images/BA/21.png",
      Icon: FaThLarge,
    },
    {
      title: "5-Star Rated",
      subtitle: "Customer approved",
      src: "/images/BA/6.png",
      Icon: FaAward,
    },
  ];

  return (
    <main>
      <section className="relative flex items-center min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-sky-700 to-green-200">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1000 1000%22%3E%3Cdefs%3E%3Cpattern id=%22g%22 width=%2250%22 height=%2250%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 50 0 L 0 0 0 50%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23g)%22/%3E%3C/svg%3E')",
          }}
        />



      





<div className="relative z-10 flex flex-col md:flex-row items-center max-w-[1400px] w-full gap-8 px-8 py-12 text-center md:text-left mx-auto">
          <div className="text-white md:w-[40%] flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm rounded-full backdrop-blur-md bg-white/10 border border-white/20 w-fit mx-auto md:mx-0">
              Premium Cleaning Services
            </div>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Transform Your Space <br/> with{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Professional
              </span>{" "}
              Cleaning
            </h1>
            <p className="mt-3 text-xl font-light italic opacity-95">
              Leave the Cleaning to Us
            </p>
          
            <div className="flex flex-wrap gap-4 mt-8 items-center justify-center md:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-full shadow-lg transition-transform bg-gradient-to-r from-green-500 to-emerald-500 hover:-translate-y-1"
              >
                <FaCalendarCheck />
                Book Now
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white border-2 rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-transform"
              >
                <FaPlay />
                Our Services
              </a>
            </div>
          </div>

          <div className="md:w-[60%] flex items-center justify-center">
            <Carousel
              className="w-full"
              slides={slides}
              interval={3000}
            />
          </div>
        </div>






      </section>

      <Category />
      <Card
        buttonText={"Start Your Transformation"}
        ButtonIcon={FaHeart}
        buttonLink={"/contact"}
      ></Card>
    
      

      <SectionForm />
       <Blog></Blog>
    </main>
  );
}
