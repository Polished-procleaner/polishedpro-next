"use client";
import {
    FaHome, FaBroom, FaTruck, FaBed, FaBriefcase, FaWarehouse,
    FaPaintRoller, FaThLarge, FaCouch, FaHardHat, FaCalendarCheck
} from "react-icons/fa";
import { FaRug } from "react-icons/fa6";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/PageHero";

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Professional Cleaning Services"
                subtitle="From homes to offices, we deliver exceptional cleaning solutions tailored to your needs."
            />

            <section className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <h2 className="text-center font-space text-3xl font-bold mb-12 relative pb-4">
                            Residential Cleaning
                            <span className="absolute left-1/2 -bottom-1.5 w-24 h-1 bg-gradient-to-r from-sky-500 to-green-500 -translate-x-1/2"></span>
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            <ServiceCard
                                icon={<FaHome />}
                                title="Standard Cleaning"
                                desc="Regular maintenance cleaning to keep your home fresh and spotless. Perfect for busy households needing consistent, reliable service."
                                features={[
                                    "Kitchen & bathroom sanitization",
                                    "Dusting & vacuuming",
                                    "Trash removal",
                                    "Surface cleaning",
                                ]}
                            />
                            <ServiceCard
                                icon={<FaBroom />}
                                title="Deep Cleaning"
                                desc="Comprehensive top-to-bottom cleaning that reaches every corner. Ideal for spring cleaning or preparing for special occasions."
                                features={[
                                    "Baseboards & window sills",
                                    "Inside appliances",
                                    "Light fixtures",
                                    "Behind furniture",
                                ]}
                            />
                            <ServiceCard
                                icon={<FaTruck />}
                                title="Move-In & Move-Out"
                                desc="Complete cleaning service for empty homes. We ensure your space is pristine for new beginnings or final walkthroughs."
                                features={[
                                    "All rooms detailed",
                                    "Cabinet interiors",
                                    "Appliance deep clean",
                                    "Garage & storage",
                                ]}
                            />
                            <ServiceCard
                                icon={<FaBed />}
                                title="Airbnb Cleaning"
                                desc="Specialized cleaning for vacation rentals. Quick turnaround times and attention to guest-ready details."
                                features={[
                                    "Linen service",
                                    "Restocking supplies",
                                    "Guest area prep",
                                    "Rapid turnaround",
                                ]}
                            />
                        </div>
                    </div>

                    {/* Commercial */}
                    <div className="mb-20">
                        <h2 className="text-center font-space text-3xl font-bold mb-12 relative pb-4">
                            Commercial Cleaning
                            <span className="absolute left-1/2 -bottom-1.5 w-24 h-1 bg-gradient-to-r from-sky-500 to-green-500 -translate-x-1/2"></span>
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <ServiceCard
                                icon={<FaBriefcase />}
                                title="Office Cleaning"
                                desc="Professional office cleaning services that create a productive work environment. Flexible scheduling to minimize disruption."
                                features={[
                                    "Workstation sanitization",
                                    "Conference rooms",
                                    "Break room cleaning",
                                    "Restroom maintenance",
                                ]}
                            />
                            <ServiceCard
                                icon={<FaWarehouse />}
                                title="Warehouse Cleaning"
                                desc="Industrial-strength cleaning for large spaces. We handle high-traffic areas and maintain safety standards."
                                features={[
                                    "Floor scrubbing",
                                    "High dusting",
                                    "Loading dock cleaning",
                                    "Equipment cleaning",
                                ]}
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-center font-space text-3xl font-bold mb-12 relative pb-4">
                            Specialized Floor Cleaning Services
                            <span className="absolute left-1/2 -bottom-1.5 w-24 h-1 bg-gradient-to-r from-sky-500 to-green-500 -translate-x-1/2"></span>
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            <ServiceCard
                                icon={<FaRug />}
                                title="Carpet Cleaning"
                                desc="Advanced carpet cleaning that removes deep stains, odors, and allergens while restoring your carpet's original beauty."
                                features={[
                                    "Deep extraction",
                                    "Stain treatment",
                                    "Odor removal",
                                    "Fiber protection",
                                ]}
                            />
                            <ServiceCard
                                icon={<FaPaintRoller />}
                                title="Stripping & Waxing"
                                desc="Professional floor restoration that brings surfaces back to life with premium stripping and waxing techniques."
                                features={[
                                    "Complete stripping",
                                    "Premium wax application",
                                    "High-shine finish",
                                    "Protective coating",
                                ]}
                            />
                            <ServiceCard
                                icon={<FaThLarge />}
                                title="Tile & Grout Cleaning"
                                desc="Specialized equipment and techniques restore even the grimiest grout lines to their original condition."
                                features={[
                                    "Deep grout cleaning",
                                    "Stain removal",
                                    "Sanitization",
                                    "Sealant application",
                                ]}
                            />
                            <ServiceCard
                                icon={<FaCouch />}
                                title="Upholstery Cleaning"
                                desc="Expert furniture care that removes stains and odors while preserving fabric integrity and extending furniture life."
                                features={[
                                    "Fabric analysis",
                                    "Safe cleaning solutions",
                                    "Stain treatment",
                                    "Odor elimination",
                                ]}
                            />
                            <ServiceCard
                                icon={<FaHardHat />}
                                title="Post-Construction Cleaning"
                                desc="Complete cleanup after renovations or construction. We handle all dust, debris, and detail work."
                                features={[
                                    "Dust removal",
                                    "Debris cleanup",
                                    "Window cleaning",
                                    "Final detailing",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <CTASection
                title={"Ready to Get Started?"}
                description={`Let us know what cleaning services you need and we'll provide a free, honest estimate.`}
                buttonText={"Get Your Free Quote"}
                ButtonIcon={FaCalendarCheck}
                buttonLink={"/contact"}
            />

        </>
    );
}


