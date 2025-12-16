'use client'

import React, { useState } from 'react'
import PageHeader from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import MapComponent from '@/components/MapContainer'
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function ContactPage() {
    // FAQ Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What types of residents do you serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve independent seniors, military veterans, adults in transition, and re-entry residents seeking a supportive, drug-free living environment."
                }
            },
            {
                "@type": "Question",
                "name": "Is this a drug-free home?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, NewMe Independent Living is a completely drug-free home. We maintain a safe, sober environment for all residents."
                }
            },
            {
                "@type": "Question",
                "name": "What amenities are included?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide 24-hour surveillance, shared and private rooms with TV, utilities and Wi-Fi included, on-site laundry, and a supportive living environment."
                }
            },
            {
                "@type": "Question",
                "name": "How do I apply for admission?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Contact us at 682-407-5920 or irednewme@gmail.com to discuss admission. We welcome individuals committed to maintaining a respectful, drug-free, and cooperative environment."
                }
            },
            {
                "@type": "Question",
                "name": "Are utilities included in the rent?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all utilities and Wi-Fi are included in your monthly rent, making budgeting simple and predictable."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#FFFDF8]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <PageHeader
                title="Contact Us"
                subtitle="We're here to answer your questions and help you find the perfect home."
            />

            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-[#6B4423] mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-[#8B7355] text-lg mb-8">
                                Whether you're interested in a tour, have questions about our care levels, or just want to say hello, we'd love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#F4E4B8] p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-[#6B4423]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#6B4423] mb-1">Phone</h3>
                                        <a href="tel:+16825593258" className="text-[#8B7355] hover:underline" aria-label="Call NewMe at 682-559-3258">682-559-3258</a>
                                        <p className="text-sm text-[#A67C52]">Available during office hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#F4E4B8] p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-[#6B4423]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#6B4423] mb-1">Email</h3>
                                        <a href="mailto:irednewme@gmail.com?subject=Contact%20from%20website" className="text-[#8B7355] hover:underline" aria-label="Email NewMe at irednewme@gmail.com">irednewme@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#F4E4B8] p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-[#6B4423]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#6B4423] mb-1">Location</h3>
                                        <p className="text-[#8B7355]">4801 Selkirk Drive<br />Forth Worth, TX 76109</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#F4E4B8] p-3 rounded-full">
                                        <Clock className="w-6 h-6 text-[#6B4423]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#6B4423] mb-1">Office Hours</h3>
                                        <p className="text-[#8B7355]">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-[#8B7355]">Sat - Sun: By Appointment</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-[#E8DCC8] h-[300px] rounded-3xl flex items-center justify-center relative overflow-hidden shadow-inner">
                            <MapComponent />
                            <span className="absolute bottom-4 text-[#6B4423] font-medium">Interactive Map</span>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#E8DCC8]">
                        <h3 className="text-2xl font-bold text-[#6B4423] mb-6">
                            Send Us a Message
                        </h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#6B4423]">First Name</label>
                                    <input type="text" className="w-full p-3 rounded-xl border border-[#D4B896] focus:outline-none focus:ring-2 focus:ring-[#A67C52] bg-[#FFFDF8]" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#6B4423]">Last Name</label>
                                    <input type="text" className="w-full p-3 rounded-xl border border-[#D4B896] focus:outline-none focus:ring-2 focus:ring-[#A67C52] bg-[#FFFDF8]" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#6B4423]">Email Address</label>
                                <input type="email" className="w-full p-3 rounded-xl border border-[#D4B896] focus:outline-none focus:ring-2 focus:ring-[#A67C52] bg-[#FFFDF8]" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#6B4423]">Phone Number</label>
                                <input type="tel" className="w-full p-3 rounded-xl border border-[#D4B896] focus:outline-none focus:ring-2 focus:ring-[#A67C52] bg-[#FFFDF8]" placeholder="(555) 123-4567" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#6B4423]">Interest</label>
                                <select className="w-full p-3 rounded-xl border border-[#D4B896] focus:outline-none focus:ring-2 focus:ring-[#A67C52] bg-[#FFFDF8]">
                                    <option>Independent Living</option>
                                    <option>Assisted Living</option>
                                    <option>Schedule a Tour</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#6B4423]">Message</label>
                                <textarea rows={4} className="w-full p-3 rounded-xl border border-[#D4B896] focus:outline-none focus:ring-2 focus:ring-[#A67C52] bg-[#FFFDF8]" placeholder="How can we help you?" />
                            </div>

                            <Button className="w-full bg-[#A67C52] hover:bg-[#8B6340] text-white py-6 text-lg rounded-xl shadow-lg">
                                Send Message
                                <Send className="w-5 h-5 ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#F9F5F0]">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#6B4423] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-[#8B7355]">
                            Find answers to common questions about our community and care.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "What types of residents do you serve?",
                                answer: "We serve independent seniors, military veterans, adults in transition, and re-entry residents seeking a supportive, drug-free living environment."
                            },
                            {
                                question: "Is this a drug-free home?",
                                answer: "Yes, NewMe Independent Living is a completely drug-free home. We maintain a safe, sober environment for all residents."
                            },
                            {
                                question: "What amenities are included?",
                                answer: "We provide 24-hour surveillance, shared and private rooms with TV, utilities and Wi-Fi included, on-site laundry, and a supportive living environment."
                            },
                            {
                                question: "How do I apply for admission?",
                                answer: (
                                    <>
                                        Contact us at <a href="tel:+16824075920" className="text-[#6B4423] underline">682-407-5920</a> or{' '}
                                        <a href="mailto:irednewme@gmail.com?subject=Admission%20Inquiry" className="text-[#6B4423] underline">irednewme@gmail.com</a> to discuss admission. We welcome individuals committed to maintaining a respectful, drug-free, and cooperative environment.
                                    </>
                                )
                            },
                            {
                                question: "Are utilities included in the rent?",
                                answer: "Yes, all utilities and Wi-Fi are included in your monthly rent, making budgeting simple and predictable."
                            }
                        ].map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

function FAQItem({ question, answer }: { question: string, answer: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-white rounded-2xl border border-[#E8DCC8] overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FFFDF8] transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-[#F4E4B8]/30 p-2 rounded-full">
                        <HelpCircle className="w-5 h-5 text-[#A67C52]" />
                    </div>
                    <span className="font-bold text-[#6B4423] text-lg">{question}</span>
                </div>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#A67C52]" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-[#A67C52]" />
                )}
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-[#8B7355] leading-relaxed border-t border-[#E8DCC8]/50 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    )
}
