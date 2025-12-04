'use client'

import React from 'react'
import { Heart, Shield, ChefHat, Users, Clock, Dog, Activity, Award } from 'lucide-react'

const features = [
    {
        icon: Heart,
        title: "Personalized Care",
        description: "Tailored care plans that respect individual preferences and needs.",
        color: "text-[#A67C52]",
        bg: "bg-[#A67C52]/10",
        colSpan: "md:col-span-1"
    },
    {
        icon: Shield,
        title: "Safety & Security",
        description: "24/7 professional staff and emergency response systems for peace of mind.",
        color: "text-[#7A8450]",
        bg: "bg-[#7A8450]/10",
        colSpan: "md:col-span-1"
    },
    {
        icon: ChefHat,
        title: "Gourmet Dining",
        description: "Chef-prepared meals using fresh, locally sourced ingredients.",
        color: "text-[#6B4423]",
        bg: "bg-[#6B4423]/10",
        colSpan: "md:col-span-1"
    },
    {
        icon: Users,
        title: "Vibrant Community",
        description: "A welcoming environment where friendships flourish and residents thrive.",
        color: "text-[#A67C52]",
        bg: "bg-[#A67C52]/10",
        colSpan: "md:col-span-2" // Wider card
    },
    {
        icon: Activity,
        title: "Engaging Activities",
        description: "Daily social, physical, and creative programs to keep the mind and body active.",
        color: "text-[#7A8450]",
        bg: "bg-[#7A8450]/10",
        colSpan: "md:col-span-1"
    },
    {
        icon: Clock,
        title: "Maintenance Free",
        description: "Say goodbye to chores. We handle housekeeping, laundry, and maintenance.",
        color: "text-[#6B4423]",
        bg: "bg-[#6B4423]/10",
        colSpan: "md:col-span-1"
    },
    {
        icon: Dog,
        title: "Pet Friendly",
        description: "We welcome your furry friends because they are family too.",
        color: "text-[#A67C52]",
        bg: "bg-[#A67C52]/10",
        colSpan: "md:col-span-1"
    },
    {
        icon: Award,
        title: "Experienced Staff",
        description: "Dedicated caregivers with years of experience and genuine compassion.",
        color: "text-[#7A8450]",
        bg: "bg-[#7A8450]/10",
        colSpan: "md:col-span-1"
    }
]

export default function WhyChooseUs() {
    return (
        <section className='py-20 md:py-28 bg-[#FFFDF8]'>
            <div className='container mx-auto px-4 md:px-6'>
                {/* Section Header */}
                <div className='text-center mb-16 animate-fade-in-up'>
                    <h2 className='text-4xl md:text-5xl font-bold text-[#6B4423] mb-4'>
                        Why Choose NewMe Homes?
                    </h2>
                    <p className='text-lg md:text-xl text-[#8B7355] max-w-3xl mx-auto'>
                        Experience the difference of a community built on care, comfort, and connection
                    </p>
                </div>

                {/* Feature Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {/* Central Highlight Card */}
                    <div className='md:col-span-2 lg:col-span-2 row-span-2 bg-[#6B4423] rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group animate-fade-in-up animation-delay-200'>
                        <div className='absolute inset-0 bg-[url("/assets/pattern.png")] opacity-5' />
                        <div className='relative z-10'>
                            <div className='bg-[#F4E4B8] text-[#6B4423] font-bold py-2 px-6 rounded-full inline-block mb-6 shadow-lg'>
                                Our Promise
                            </div>
                            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6 leading-tight'>
                                "To provide a home where every resident is treated with the dignity, respect, and love they deserve."
                            </h3>
                            <p className='text-[#F4E4B8] text-lg'>
                                — The NewMe Homes Team
                            </p>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.colSpan} bg-white rounded-3xl p-8 border border-[#E8DCC8] hover:border-[#F4E4B8] hover:shadow-xl transition-all duration-300 group animate-fade-in-up`}
                            style={{ animationDelay: `${(index + 2) * 100}ms` }}
                        >
                            <div className={`${feature.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className='text-xl font-bold text-[#6B4423] mb-3'>
                                {feature.title}
                            </h3>
                            <p className='text-[#8B7355] leading-relaxed'>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
