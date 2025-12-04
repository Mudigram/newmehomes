'use client'

import React, { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        relation: "Daughter of Resident",
        rating: 5,
        text: "Finding NewMe Homes was a blessing for our family. The staff treats my mother with such dignity and warmth. It's not just a facility; it truly feels like a home where she is loved and cared for."
    },
    {
        id: 2,
        name: "Robert Chen",
        relation: "Resident (Independent Living)",
        rating: 5,
        text: "I was hesitant about moving, but the community here is fantastic. I've made great friends, the food is excellent, and I have the freedom to do what I love without the hassle of home maintenance."
    },
    {
        id: 3,
        name: "Emily Thompson",
        relation: "Niece of Resident",
        rating: 5,
        text: "The peace of mind we have knowing Aunt Marie is safe and happy is priceless. The 24/7 nursing staff is professional and attentive, and the activities keep her engaged and smiling."
    },
    {
        id: 4,
        name: "Michael Ross",
        relation: "Son of Resident",
        rating: 5,
        text: "The transition to assisted living was challenging for my dad, but the team at NewMe Homes made it seamless. They were patient, kind, and went above and beyond to make him feel comfortable."
    },
    {
        id: 5,
        name: "Linda Martinez",
        relation: "Resident (Assisted Living)",
        rating: 5,
        text: "I feel safe here. The caregivers are like family to me. They know my favorite stories and always have a smile. The garden is my favorite place to sit and enjoy the afternoon."
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex, isAutoPlaying])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        )
    }

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false)
    const handleMouseLeave = () => setIsAutoPlaying(true)

    return (
        <section className='py-20 md:py-28 bg-[#6B4423] text-white overflow-hidden'>
            <div className='container mx-auto px-4 md:px-6'>
                {/* Section Header */}
                <div className='text-center mb-16 animate-fade-in-up'>
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                        What Families Say
                    </h2>
                    <p className='text-lg md:text-xl text-[#F4E4B8] max-w-3xl mx-auto'>
                        Real stories from our residents and their loved ones
                    </p>
                </div>

                {/* Carousel Container */}
                <div
                    className='relative max-w-6xl mx-auto'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-[#A67C52] hover:bg-[#F4E4B8] hover:text-[#6B4423] text-white p-3 rounded-full transition-all duration-300 shadow-lg'
                        aria-label="Previous review"
                    >
                        <ChevronLeft className='w-6 h-6' />
                    </button>

                    <button
                        onClick={nextSlide}
                        className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-[#A67C52] hover:bg-[#F4E4B8] hover:text-[#6B4423] text-white p-3 rounded-full transition-all duration-300 shadow-lg'
                        aria-label="Next review"
                    >
                        <ChevronRight className='w-6 h-6' />
                    </button>

                    {/* Cards Wrapper */}
                    <div className='overflow-hidden px-4 py-8'>
                        <div
                            className='flex transition-transform duration-500 ease-in-out'
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className='w-full flex-shrink-0 px-6 md:px-8'
                                >
                                    <div className='bg-white text-[#6B4423] rounded-3xl p-6 md:p-12 shadow-2xl border-t-8 border-[#F4E4B8] relative mx-auto max-w-3xl'>
                                        {/* Quote Icon */}
                                        <div className='absolute top-6 right-8 opacity-10'>
                                            <Quote className='w-24 h-24 text-[#6B4423]' />
                                        </div>

                                        {/* Stars */}
                                        <div className='flex gap-1 mb-6'>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className='w-6 h-6 fill-[#F4E4B8] text-[#F4E4B8]' />
                                            ))}
                                        </div>

                                        {/* Text */}
                                        <p className='text-lg md:text-2xl font-medium leading-relaxed mb-8 italic relative z-10'>
                                            "{testimonial.text}"
                                        </p>

                                        {/* Author */}
                                        <div className='flex items-center gap-4 border-t border-[#E8DCC8] pt-6'>
                                            <div className='w-12 h-12 bg-[#A67C52] rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className='font-bold text-lg'>{testimonial.name}</h4>
                                                <p className='text-[#8B7355] text-sm font-medium'>{testimonial.relation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicators */}
                    <div className='flex justify-center gap-3 mt-8'>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-[#F4E4B8] w-8'
                                    : 'bg-[#A67C52] hover:bg-[#D4B896]'
                                    }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
