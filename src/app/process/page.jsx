import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/PageHero";
import { FaPhone, FaLeaf, FaShieldAlt, FaClock, FaTools, FaHeart, FaMedal } from "react-icons/fa";

const steps = [
    {
        num: "1",
        title: "Free Consultation",
        text: "We start with a friendly conversation about your space and needs. No pressure, just honest advice and a transparent quote.",
    },
    {
        num: "2",
        title: "Custom Plan",
        text: "Every space is unique. We create a tailored cleaning plan that fits your schedule, budget, and specific requirements.",
    },
    {
        num: "3",
        title: "Professional Service",
        text: "Our experienced team arrives with professional equipment and eco-friendly products, treating your space with care and respect.",
    },
    {
        num: "4",
        title: "Quality Guarantee",
        text: "We're not done until you're thrilled. Your satisfaction is our priority, and we stand behind every job with our quality guarantee.",
    },
]

const servicesTop = [
    {
        icon: <FaLeaf />,
        title: "Eco-Friendly Products",
        desc: "We use safe, non-toxic cleaning products that protect your family, pets, and the environment while delivering exceptional results.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Fully Insured & Bonded",
        desc: "Your peace of mind is important to us. We're fully licensed, insured, and bonded for your protection and confidence.",
    },
    {
        icon: <FaClock />,
        title: "Flexible Scheduling",
        desc: "We work around your schedule with convenient booking options, including evenings and weekends when needed.",
    },
    {
        icon: <FaTools />,
        title: "Professional Equipment",
        desc: "We bring state-of-the-art cleaning equipment and supplies, so you don't have to worry about anything.",
    },
    {
        icon: <FaHeart />,
        title: "Personal Touch",
        desc: "As a family-owned business, we treat every client like family and every space like our own home.",
    },
    {
        icon: <FaMedal />,
        title: "Quality Guarantee",
        desc: "If you're not completely satisfied with our work, we'll return and make it right at no extra charge.",
    },
]

const servicesBottom = [
    {
        title: "Do I need to provide cleaning supplies?",
        desc: "No! We bring all professional-grade equipment and eco-friendly cleaning products. You don't need to worry about having anything on hand.",
    },
    {
        title: "How do you ensure consistent quality?",
        desc: "Our team follows detailed checklists for every service, and we conduct quality inspections. Plus, our satisfaction guarantee means we'll return if anything isn't perfect.",
    },
    {
        title: "Are your cleaners background checked?",
        desc: "Absolutely. All our team members undergo thorough background checks and are fully trained in our cleaning standards and customer service protocols.",
    },
    {
        title: "Can you work around my schedule?",
        desc: "Yes! We offer flexible scheduling including evenings and weekends. We'll work with you to find times that are convenient for your lifestyle.",
    },
    {
        title: "What if I need to reschedule?",
        desc: "Life happens! We understand and offer flexible rescheduling options. Just give us as much notice as possible and we'll accommodate your needs.",
    },
    {
        title: "Do you offer regular cleaning services?",
        desc: "Yes! We provide weekly, bi-weekly, monthly, or custom recurring cleaning schedules to keep your space consistently clean and fresh.",
    },
]

export default function ProcessPage() {
    return (
        <main className="pt-20">
            <PageHero
                title="Simple, Transparent Process"
                subtitle={`We've streamlined our approach to make professional cleaning as easy as possible for you`}
            />

            <section className="relative bg-gradient-to-br from-emerald-900 via-sky-900 to-slate-800 text-white py-20">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {steps.map((step, i) => (
                            <div key={i} className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 flex items-center justify-center font-space text-2xl font-bold text-slate-900">
                                    {step.num}
                                </div>
                                <h3 className="font-space font-semibold text-xl mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-200 leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-emerald-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-5 py-2 rounded-full text-white font-semibold shadow-md bg-gradient-to-r from-sky-500 to-green-500">
                            What Sets Us Apart
                        </span>
                        <h2 className="font-space font-bold text-3xl md:text-5xl text-gray-900 mt-6">
                            Why Choose PolishedPro
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            We don't just clean - we care about your space and your
                            experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {servicesTop.map((card, i) => (
                            <ServiceCard
                                key={i}
                                icon={card.icon}
                                title={card.title}
                                desc={card.desc}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-5 py-2 rounded-full text-white font-semibold shadow-md bg-gradient-to-r from-sky-500 to-green-500">
                            Common Questions
                        </span>
                        <h2 className="font-space font-bold text-3xl md:text-5xl text-gray-900 mt-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Get answers to the most common questions about our cleaning
                            services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesBottom.map((faq, i) => (
                            <ServiceCard key={i} title={faq.title} desc={faq.desc} />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to Experience the Difference?"
                description="Let's start with a free consultation where we'll discuss your needs and create a custom cleaning plan just for you."
                buttonText="Schedule Your Free Consultation"
                buttonLink="/contact"
                ButtonIcon={FaPhone}
            />
        </main>
    );
}
