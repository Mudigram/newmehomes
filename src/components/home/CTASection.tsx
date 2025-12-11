'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
import { Button } from '../ui/button'

export default function CTASection() {
    return (
        <section className="relative pt-20 md:pt-28 pb-20 bg-[#6B4423] text-white overflow-hidden">

            {/* Decorative Top Wave */}
            <div className="absolute top-0 left-0 right-0 -translate-y-full">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rotate-180">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Ready to Experience Compassionate Living?
                </h2>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-[#F4E4B8] mb-12 max-w-2xl mx-auto leading-relaxed">
                    Whether you're exploring independent living or assisted care, our team is here to guide you every step of the way.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href={"/Contact"}>
                    <Button
                        size="lg"
                        className="bg-[#F4E4B8] hover:bg-[#E8DCC8] text-[#6B4423] font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        <Calendar className="w-5 h-5" />
                        Schedule a Visit
                    </Button>
                    </Link>

                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        <Phone className="w-5 h-5" />
                        Call Us Now
                    </Button>
                </div>

            </div>
        </section>
    )
}
