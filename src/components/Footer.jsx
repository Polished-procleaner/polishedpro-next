// src/components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaComment } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#064e3b] text-white">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-12 pb-8">
                <div className="grid gap-10 md:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Image
                                src="/images/img1.png"
                                alt="PolishedPro Cleaners"
                                width={42}
                                height={42}
                                className="h-[42px] w-auto"
                            />
                            <h3 className="text-[18px] font-semibold">PolishedPro Cleaners</h3>
                        </div>

                        <p className="italic mb-2">"Leave the Cleaning to Us"</p>

                        <p className="text-white/80 leading-relaxed">
                            Your trusted local cleaning experts, bringing professional results and
                            genuine care to every project. We're more than just cleaners – we're
                            your neighbors who happen to be really good at making things shine.
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                            <a
                                href="https://www.facebook.com/polishedprocleaners"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-9 h-9 rounded-lg flex items-center justify-center
                           text-white bg-gradient-to-r from-sky-500 to-green-500
                           hover:-translate-y-0.5 transition"
                            >
                                <FaFacebookF size={14} />
                            </a>
                            <a
                                href="https://www.instagram.com/polishedpro.cleaners"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-lg flex items-center justify-center
                           text-white bg-gradient-to-r from-sky-500 to-green-500
                           hover:-translate-y-0.5 transition"
                            >
                                <FaInstagram size={14} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@polishedprocleaners"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className="w-9 h-9 rounded-lg flex items-center justify-center
                           text-white bg-gradient-to-r from-sky-500 to-green-500
                           hover:-translate-y-0.5 transition"
                            >
                                <FaTiktok size={14} />
                            </a>
                            <a
                                href="sms:+19549096519"
                                aria-label="Text us"
                                className="w-9 h-9 rounded-lg flex items-center justify-center
                           text-white bg-gradient-to-r from-sky-500 to-green-500
                           hover:-translate-y-0.5 transition"
                            >
                                <FaComment size={14} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[18px] font-semibold mb-4">Residential Services</h3>
                        <ul className="space-y-2 text-white/90">
                            <li><Link href="/services" className="hover:text-white">Standard Cleaning</Link></li>
                            <li><Link href="/services" className="hover:text-white">Deep Cleaning</Link></li>
                            <li><Link href="/services" className="hover:text-white">Move-In/Move-Out</Link></li>
                            <li><Link href="/services" className="hover:text-white">Airbnb Cleaning</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[18px] font-semibold mb-4">Commercial Services</h3>
                        <ul className="space-y-2 text-white/90">
                            <li><Link href="/services" className="hover:text-white">Office Cleaning</Link></li>
                            <li><Link href="/services" className="hover:text-white">Warehouse Cleaning</Link></li>
                            <li><Link href="/services" className="hover:text-white">Retail Spaces</Link></li>
                            <li><Link href="/services" className="hover:text-white">Medical Facilities</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[18px] font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-white/90">
                            <li><a href="tel:+19549096519" className="hover:text-white">(954) 909-6519</a></li>
                            <li>info@polishedprocleaners.net</li>
                            <li>Free estimates available</li>
                            <li>Flexible scheduling</li>
                            <li>24/7 support</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/70">
                    <p>© PolishedPro Cleaners. All rights reserved. | Leave the Cleaning to Us</p>
                </div>
            </div>
        </footer>
    );
}
