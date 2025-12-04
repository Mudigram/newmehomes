'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Phone, Calendar, Shield, Heart, Clock } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
            {/* Background Image with Overlay */}
            <div className='absolute inset-0 z-0'>
                <Image
                    src="/assets/hero-bg.jpg"
                    alt="NewMe Independent Living"
                    fill
                    className='object-cover'
                    priority
                />
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70' />
            </div>

            {/* Hero Content */}
            <div className='relative z-10 container mx-auto px-4 py-20 md:py-32'>
                <div className='max-w-4xl mx-auto text-center'>
                    {/* Main Headline */}
                    <div className='animate-fade-in-up'>
                        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
                            Your Home Away From Home
                            <span className='block text-[#F4E4B8] mt-2'>NewMe Independent Living</span>
                        </h1>
                    </div>

                    {/* Subheadline */}
                    <div className='animate-fade-in-up animation-delay-200'>
                        <p className='text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed'>
                            Safe, supportive, and affordable housing for independent seniors, veterans, and adults in transition.
                            A drug-free community where you can rebuild with dignity.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-400'>
                        <Button
                            size="lg"
                            className='bg-[#F4E4B8] hover:bg-[#E8DCC8] text-[#6B4423] font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-[#F4E4B8]/50 transition-all duration-300 hover:scale-105 gap-2'
                        >
                            <Calendar className='w-5 h-5' />
                            Learn More
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className='border-2 border-white text-white hover:bg-white hover:text-[#6B4423] font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 gap-2'
                        >
                            <Phone className='w-5 h-5' />
                            Call: 682-407-5920
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-600'>
                        {/* Card 1 */}
                        <div className='bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                            <div className='flex flex-col items-center text-center gap-3'>
                                <div className='bg-[#F4E4B8]/20 p-4 rounded-full'>
                                    <Shield className='w-8 h-8 text-[#F4E4B8]' />
                                </div>
                                <div>
                                    <h3 className='text-3xl font-bold text-white mb-1'>24/7</h3>
                                    <p className='text-gray-300 text-sm font-medium'>Surveillance</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                            <div className='flex flex-col items-center text-center gap-3'>
                                <div className='bg-[#F4E4B8]/20 p-4 rounded-full'>
                                    <Heart className='w-8 h-8 text-[#F4E4B8]' />
                                </div>
                                <div>
                                    <h3 className='text-3xl font-bold text-white mb-1'>Drug-Free</h3>
                                    <p className='text-gray-300 text-sm font-medium'>Safe Environment</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                            <div className='flex flex-col items-center text-center gap-3'>
                                <div className='bg-[#F4E4B8]/20 p-4 rounded-full'>
                                    <Clock className='w-8 h-8 text-[#F4E4B8]' />
                                </div>
                                <div>
                                    <h3 className='text-3xl font-bold text-white mb-1'>Affordable</h3>
                                    <p className='text-gray-300 text-sm font-medium'>All Utilities Included</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Wave */}
            <div className='absolute bottom-0 left-0 right-0 z-10'>
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-full h-auto'>
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}
