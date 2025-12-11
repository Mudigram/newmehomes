'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#6B4423] text-white py-14">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Logo + Intro */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">NewMe Independent Living</h3>
                    <p className="text-[#F4E4B8] leading-relaxed">
                        Safe, supportive, and affordable home environment for adults seeking independence with dignity.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-3 text-[#F4E4B8]">
                        <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-white">Services</Link></li>
                        <li><Link href="/accommodations" className="hover:text-white">Accommodations</Link></li>
                        <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Contact</h4>
                    <ul className="space-y-3 text-[#F4E4B8]">
                        <li className="flex gap-3 items-center">
                            <MapPin size={18} />
                            <span>[Address - To Be Updated]</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone size={18} />
                            <a href="tel:+16824075920" className="hover:text-white" aria-label="Call NewMe at 682-407-5920">682-407-5920</a>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail size={18} />
                            <a href="mailto:irednewme@gmail.com?subject=Contact%20from%20website" className="hover:text-white" aria-label="Email NewMe at irednewme@gmail.com">irednewme@gmail.com</a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
                    <p className="text-[#F4E4B8] mb-4">Subscribe for updates & wellness tips.</p>
                    <div className="flex rounded-full overflow-hidden bg-white/10 backdrop-blur border border-white/20">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 bg-transparent text-white px-4 py-2 focus:outline-none placeholder-white/60"
                        />
                        <button className="px-5 bg-[#F4E4B8] text-[#6B4423] font-semibold hover:bg-[#E8DCC8] transition">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 mt-10 pt-6 text-center text-[#F4E4B8] text-sm">
                © {new Date().getFullYear()} NewMe Homes — Made with <Heart size={14} className="inline-block mx-1" /> for compassionate care.
            </div>
        </footer>
    )
}
