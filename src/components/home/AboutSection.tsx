'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Heart, Shield, Users, Home, ArrowRight } from 'lucide-react'

export default function AboutSection() {
    return (
        <section className='py-20 md:py-28 bg-gradient-to-b from-white to-[#FFFDF8]'>
            <div className='container mx-auto px-4 md:px-6'>
                {/* Section Header */}
                <div className='text-center mb-16 animate-fade-in-up'>
                    <h2 className='text-4xl md:text-5xl font-bold text-[#6B4423] mb-4'>
                        Welcome to NewMe Homes
                    </h2>
                    <p className='text-lg md:text-xl text-[#8B7355] max-w-3xl mx-auto'>
                        Where compassionate care meets the comfort of home
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
                    {/* Left: Image */}
                    <div className='relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up animation-delay-200'>
                        <Image
                            src="/assets/about-image.jpg"
                            alt="NewMe Homes Community"
                            fill
                            className='object-cover'
                        />
                        
                    </div>

                    {/* Right: Content */}
                    <div className='animate-fade-in-up animation-delay-400'>
                        <h3 className='text-3xl md:text-4xl font-bold text-[#6B4423] mb-6'>
                            A Place You'll Be Proud to Call Home
                        </h3>
                        <p className='text-lg text-[#8B7355] mb-6 leading-relaxed'>
                            At NewMe Homes, we believe that quality care should never compromise comfort,
                            dignity, or independence. Our dedicated team provides personalized support in a
                            warm, home-like environment designed to help you or your loved ones thrive.
                        </p>
                        <p className='text-lg text-[#8B7355] mb-8 leading-relaxed'>
                            Whether you're seeking independent living with peace of mind or assisted living
                            with comprehensive support, we're here to make every day meaningful, comfortable,
                            and filled with joy.
                        </p>

                        {/* CTA Button */}
                        <Link href={"/about"}>
                        <Button
                            size="lg"
                            className='bg-[#A67C52] hover:bg-[#8B6340] text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-2'
                        >
                            Learn More About Us
                            <ArrowRight className='w-5 h-5' />
                        </Button>
                        </Link>
                    </div>
                </div>

                {/* Core Values Grid */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16'>
                    {/* Value 1 */}
                    <div className='bg-white border-2 border-[#E8DCC8] rounded-2xl p-6 hover:shadow-xl hover:border-[#A67C52] transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600'>
                        <div className='bg-[#F4E4B8]/30 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
                            <Heart className='w-8 h-8 text-[#A67C52]' />
                        </div>
                        <h4 className='text-xl font-bold text-[#6B4423] mb-3'>
                            Compassionate Care
                        </h4>
                        <p className='text-[#8B7355] leading-relaxed'>
                            Our trained staff treats every resident with dignity, respect, and genuine warmth.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className='bg-white border-2 border-[#E8DCC8] rounded-2xl p-6 hover:shadow-xl hover:border-[#A67C52] transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600'>
                        <div className='bg-[#F4E4B8]/30 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
                            <Shield className='w-8 h-8 text-[#A67C52]' />
                        </div>
                        <h4 className='text-xl font-bold text-[#6B4423] mb-3'>
                            Safety First
                        </h4>
                        <p className='text-[#8B7355] leading-relaxed'>
                            24/7 professional support ensures peace of mind for residents and families.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className='bg-white border-2 border-[#E8DCC8] rounded-2xl p-6 hover:shadow-xl hover:border-[#A67C52] transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600'>
                        <div className='bg-[#F4E4B8]/30 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
                            <Users className='w-8 h-8 text-[#A67C52]' />
                        </div>
                        <h4 className='text-xl font-bold text-[#6B4423] mb-3'>
                            Community Spirit
                        </h4>
                        <p className='text-[#8B7355] leading-relaxed'>
                            Engage in activities, build friendships, and enjoy a vibrant social life.
                        </p>
                    </div>

                    {/* Value 4 */}
                    <div className='bg-white border-2 border-[#E8DCC8] rounded-2xl p-6 hover:shadow-xl hover:border-[#A67C52] transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600'>
                        <div className='bg-[#F4E4B8]/30 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
                            <Home className='w-8 h-8 text-[#A67C52]' />
                        </div>
                        <h4 className='text-xl font-bold text-[#6B4423] mb-3'>
                            Home-Like Comfort
                        </h4>
                        <p className='text-[#8B7355] leading-relaxed'>
                            Spacious, well-appointed rooms and common areas designed for your comfort.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
