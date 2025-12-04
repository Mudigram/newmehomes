import { Metadata } from "next";
import PageHeader from '@/components/layout/PageHeader';
import { Check, Shield, Wifi, Tv, Home, Users, Sparkles, Clock, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: "Our Services | NewMe Independent Living",
    description: "Affordable residence with 24-hour surveillance, shared and private rooms with TV, utilities & Wi-Fi included, drug-free home, and on-site laundry.",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF8]">
            <PageHeader
                title="Our Services"
                subtitle="Everything you need for comfortable, independent living."
            />

            {/* Services Grid */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Home,
                            title: "Affordable Residence",
                            description: "Quality housing at prices that fit your budget. We believe everyone deserves a safe place to call home."
                        },
                        {
                            icon: Shield,
                            title: "24-Hour Surveillance",
                            description: "Your safety is our priority. Our facility is monitored 24/7 for your peace of mind."
                        },
                        {
                            icon: Users,
                            title: "Shared Rooms with TV",
                            description: "Comfortable shared accommodations with television, perfect for building community connections."
                        },
                        {
                            icon: Tv,
                            title: "Private Rooms with TV",
                            description: "For those who prefer more privacy, we offer private rooms equipped with television."
                        },
                        {
                            icon: Wifi,
                            title: "Utilities & Wi-Fi Included",
                            description: "All utilities and high-speed internet included in your monthly rate. No hidden fees."
                        },
                        {
                            icon: Sparkles,
                            title: "Drug-Free Home",
                            description: "We maintain a completely drug-free environment to support your journey to stability."
                        },
                        {
                            icon: Clock,
                            title: "On-Site Laundry",
                            description: "Convenient laundry facilities available on-site for all residents."
                        },
                        {
                            icon: Heart,
                            title: "Supportive Living Environment",
                            description: "A structured, nurturing community where residents support each other's growth and independence."
                        }
                    ].map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8DCC8] hover:border-[#F4E4B8] hover:shadow-xl transition-all duration-300">
                            <div className="bg-[#F4E4B8]/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <service.icon className="w-8 h-8 text-[#6B4423]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#6B4423] mb-3">{service.title}</h3>
                            <p className="text-[#8B7355] leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Admission Section */}
            <section className="py-20 bg-[#F9F5F0]">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#6B4423] mb-6">
                        Admission & House Rules
                    </h2>
                    <p className="text-lg text-[#8B7355] leading-relaxed mb-8">
                        Admission is open to individuals who are committed to maintaining a drug-free, respectful, and cooperative environment. Residents are expected to follow all house guidelines, participate in community upkeep, and support one another.
                    </p>
                    <div className="bg-white p-8 rounded-3xl shadow-lg inline-block">
                        <h3 className="font-bold text-[#A67C52] mb-4 text-lg">We Welcome:</h3>
                        <ul className="text-left space-y-3">
                            {[
                                "Independent seniors seeking affordable housing",
                                "Military veterans transitioning to civilian life",
                                "Adults in life transitions",
                                "Re-entry residents committed to positive change"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#7A8450] mt-1 flex-shrink-0" />
                                    <span className="text-[#6B4423]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
