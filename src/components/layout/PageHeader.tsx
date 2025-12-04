'use client'

import React from 'react'

interface PageHeaderProps {
    title: string
    subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="relative bg-[#6B4423] py-24 md:py-32 overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#F4E4B8" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-[#F4E4B8] max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 48H1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0V48Z" fill="#FFFDF8" />
                </svg>
            </div>
        </div>
    )
}
