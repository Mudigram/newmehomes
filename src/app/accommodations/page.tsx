import { Metadata } from "next";
import PageHeader from '@/components/layout/PageHeader';
import { Check, Users, User, Wifi, Tv, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: "Accommodations | NewMe Independent Living",
    description: "Choose from shared or private rooms, all with TV, utilities, and Wi-Fi included. Comfortable, affordable housing in a supportive community.",
};

export default function AccommodationsPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF8]">
            <PageHeader
                title="Accommodations"
                subtitle="Comfortable living spaces designed for your independence."
            />

            {/* Room Options */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Shared Rooms */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#E8DCC8] flex flex-col">
                        <div className="bg-[#F9F5F0] p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-[#F4E4B8] p-3 rounded-full">
                                    <Users className="w-8 h-8 text-[#6B4423]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#6B4423]">Shared Rooms</h3>
                            </div>
                            <p className="text-[#8B7355] text-lg">
                                Affordable option with a roommate. Build friendships and community connections while enjoying all amenities.
                            </p>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h4 className="font-bold text-[#A67C52] mb-4 text-lg">Included:</h4>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Television in room",
                                    "All utilities included",
                                    "High-speed Wi-Fi",
                                    "24/7 surveillance",
                                    "On-site laundry access",
                                    "Supportive community"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#7A8450] mt-1 flex-shrink-0" />
                                        <span className="text-[#6B4423]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <Button className="w-full bg-[#A67C52] hover:bg-[#8B6340] text-white">
                                    Inquire About Availability
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Private Rooms */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#E8DCC8] flex flex-col">
                        <div className="bg-[#F9F5F0] p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-[#F4E4B8] p-3 rounded-full">
                                    <User className="w-8 h-8 text-[#6B4423]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#6B4423]">Private Rooms</h3>
                            </div>
                            <p className="text-[#8B7355] text-lg">
                                Your own private space for maximum independence and privacy. Perfect for those who value personal quiet time.
                            </p>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h4 className="font-bold text-[#A67C52] mb-4 text-lg">Included:</h4>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Television in room",
                                    "All utilities included",
                                    "High-speed Wi-Fi",
                                    "24/7 surveillance",
                                    "On-site laundry access",
                                    "Complete privacy"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#7A8450] mt-1 flex-shrink-0" />
                                        <span className="text-[#6B4423]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <Button className="w-full bg-[#A67C52] hover:bg-[#8B6340] text-white">
                                    Inquire About Availability
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities & Features */}
            <section className="py-20 bg-[#F9F5F0]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#6B4423] mb-4">
                            Amenities & Features
                        </h2>
                        <p className="text-[#8B7355] max-w-2xl mx-auto">
                            Residents enjoy access to comfortable communal areas, on-site laundry, reliable internet, and entertainment amenities. We maintain a peaceful, family-like setting where residents can thrive and rebuild with confidence.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: Wifi, title: "High-Speed Internet", desc: "Stay connected with reliable Wi-Fi" },
                            { icon: Tv, title: "Entertainment", desc: "TV in every room" },
                            { icon: Shield, title: "24/7 Security", desc: "Surveillance for your safety" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-[#E8DCC8] text-center">
                                <div className="bg-[#F4E4B8]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-8 h-8 text-[#6B4423]" />
                                </div>
                                <h3 className="font-bold text-[#6B4423] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#8B7355]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
