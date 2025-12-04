'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Check, ArrowRight, Utensils, Bus, Dog, Wifi, Activity, Stethoscope } from 'lucide-react'

const amenities = [
    { icon: Utensils, label: "Gourmet Dining" },
    { icon: Bus, label: "Transportation" },
    { icon: Dog, label: "Pet Friendly" },
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Activity, label: "Wellness Programs" },
    { icon: Stethoscope, label: "24/7 Nursing" },
]

export default function ServicesSection() {
    return (
        <section className='py-20 md:py-28 bg-[#F9F5F0]'>
            <div className='container mx-auto px-4 md:px-6'>
                {/* Section Header */}
                <div className='text-center mb-16 animate-fade-in-up'>
                    <h2 className='text-4xl md:text-5xl font-bold text-[#6B4423] mb-4'>
                        Our Living Options
                    </h2>
                    <p className='text-lg md:text-xl text-[#8B7355] max-w-3xl mx-auto'>
                        Tailored care plans designed to meet your unique needs and lifestyle
                    </p>
                </div>

                {/* Services Cards */}
                <div className='grid md:grid-cols-2 gap-8 lg:gap-12 mb-20'>
                    {/* Independent Living Card */}
                    <div className='bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-[#D4B896] hover:border-[#F4E4B8] hover:shadow-2xl transition-all duration-300 group animate-fade-in-up animation-delay-200 flex flex-col'>
                        <div className='relative h-64 md:h-72 overflow-hidden'>
                            <Image
                                src="/assets/independent-living.jpg"
                                alt="Independent Living"
                                fill
                                className='object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                            <h3 className='absolute bottom-6 left-6 text-3xl font-bold text-white'>
                                Independent Living
                            </h3>
                        </div>
                        <div className='p-8 flex-1 flex flex-col'>
                            <p className='text-[#8B7355] mb-6 leading-relaxed'>
                                Perfect for active seniors who want to enjoy a maintenance-free lifestyle with the freedom to pursue their passions and socialize with friends.
                            </p>
                            <ul className='space-y-4 mb-8 flex-1'>
                                {[
                                    "Private, spacious suites",
                                    "Housekeeping & laundry services",
                                    "Social events & outings",
                                    "Emergency response system"
                                ].map((item, index) => (
                                    <li key={index} className='flex items-center gap-3'>
                                        <div className='bg-[#7A8450]/10 p-1 rounded-full'>
                                            <Check className='w-5 h-5 text-[#7A8450]' />
                                        </div>
                                        <span className='text-[#6B4423] font-medium'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className='w-full bg-[#A67C52] hover:bg-[#F4E4B8] hover:text-[#6B4423] text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300'
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Assisted Living Card */}
                    <div className='bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-[#D4B896] hover:border-[#F4E4B8] hover:shadow-2xl transition-all duration-300 group animate-fade-in-up animation-delay-400 flex flex-col'>
                        <div className='relative h-64 md:h-72 overflow-hidden'>
                            <Image
                                src="/assets/assisted-living.jpg"
                                alt="Assisted Living"
                                fill
                                className='object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                            <h3 className='absolute bottom-6 left-6 text-3xl font-bold text-white'>
                                Assisted Living
                            </h3>
                        </div>
                        <div className='p-8 flex-1 flex flex-col'>
                            <p className='text-[#8B7355] mb-6 leading-relaxed'>
                                Designed for residents who need a helping hand with daily activities while maintaining their dignity, independence, and quality of life.
                            </p>
                            <ul className='space-y-4 mb-8 flex-1'>
                                {[
                                    "Personalized care plans",
                                    "Medication management",
                                    "Assistance with bathing & dressing",
                                    "24/7 nursing support"
                                ].map((item, index) => (
                                    <li key={index} className='flex items-center gap-3'>
                                        <div className='bg-[#7A8450]/10 p-1 rounded-full'>
                                            <Check className='w-5 h-5 text-[#7A8450]' />
                                        </div>
                                        <span className='text-[#6B4423] font-medium'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className='w-full bg-[#A67C52] hover:bg-[#F4E4B8] hover:text-[#6B4423] text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300'
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Amenities Bar */}
                <div className='bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#E8DCC8] animate-fade-in-up animation-delay-600'>
                    <div className='text-center mb-10'>
                        <h3 className='text-2xl md:text-3xl font-bold text-[#6B4423] mb-2'>
                            Premium Amenities
                        </h3>
                        <p className='text-[#8B7355]'>Included with all living options</p>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
                        {amenities.map((item, index) => (
                            <div key={index} className='flex flex-col items-center text-center gap-3 group'>
                                <div className='bg-[#F9F5F0] p-4 rounded-full group-hover:bg-[#F4E4B8] transition-colors duration-300'>
                                    <item.icon className='w-8 h-8 text-[#6B4423]' />
                                </div>
                                <span className='text-[#6B4423] font-medium text-sm md:text-base'>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
