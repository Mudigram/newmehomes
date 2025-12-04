'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { PhoneOutgoing, Menu, X } from "lucide-react"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/accommodations', label: 'Accommodations' },
        { href: '/contact', label: 'Contact' },
        { href: '/reviews', label: 'Reviews' },
    ]

    return (
        <>
            {/* Sticky Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[#6B4423]/20 backdrop-blur-md shadow-lg py-2'
                    : 'bg-[#6B4423]/50 backdrop-blur-md shadow-lg py-4'
                    }`}
            >
                <div className='flex items-center justify-between px-4 md:px-6 pt-2'>
                    {/* Logo Section */}
                    <div className='flex flex-row items-center gap-3 pl-4'>
                        <Image
                            src={"/assets/logo.png"}
                            alt='Logo'
                            className='rounded-full'
                            width={45}
                            height={45}
                        />
                        <h1 className='font-bold text-white text-lg md:text-xl'>
                            NewMe Homes
                        </h1>
                    </div>

                    {/* Desktop Navigation - Centered with Blurry Background */}
                    <div className='hidden lg:block absolute left-1/2 transform -translate-x-1/2'>
                        <div className='bg-white/10 border border-white/80 backdrop-blur-2xl rounded-2xl py-3 px-6'>
                            <ul className='flex items-center gap-8'>
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className='text-white hover:text-[#F4E4B8] transition-colors font-semibold text-base whitespace-nowrap'
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Desktop Call Button */}
                    <div className='hidden lg:block pr-4'>
                        <div className='bg-[#F4E4B8] rounded-xl border border-[#A67C52]'>
                            <Button variant="ghost" className='gap-2 text-[#6B4423] hover:bg-[#E8DCC8] font-semibold'>
                                <PhoneOutgoing className='w-4 h-4' />
                                Call Us
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors'
                        aria-label='Toggle menu'
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className='fixed inset-0 bg-black/50 z-40 lg:hidden'
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-[#6B4423]/95 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className='flex flex-col h-full'>
                    {/* Mobile Menu Header */}
                    <div className='flex items-center justify-between p-6 border-b border-white/20'>
                        <h2 className='text-white font-bold text-lg'>Menu</h2>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className='text-white p-2 hover:bg-white/10 rounded-lg transition-colors'
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className='flex-1 overflow-y-auto py-6'>
                        <ul className='flex flex-col gap-2 px-4'>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className='block text-white hover:text-[#F4E4B8] hover:bg-white/10 transition-all font-semibold text-lg py-3 px-4 rounded-lg'
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Call Button */}
                    <div className='p-6 border-t border-white/20'>
                        <Button
                            variant="default"
                            className='w-full bg-[#F4E4B8] text-[#6B4423] hover:bg-[#E8DCC8] gap-2 py-6 text-base font-semibold'
                        >
                            <PhoneOutgoing className='w-5 h-5' />
                            Call Us Now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
