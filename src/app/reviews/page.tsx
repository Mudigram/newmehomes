import { Metadata } from "next";
import PageHeader from '@/components/layout/PageHeader';
import { Star, Quote, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: "Reviews | NewMe Independent Living",
    description: "Read testimonials from our residents and their families about their experience at NewMe Independent Living.",
};

const reviews = [
    {
        id: 1,
        name: "James Rodriguez",
        relation: "Veteran Resident",
        rating: 5,
        date: "November 2024",
        text: "After my service, I struggled to find stable housing. NewMe Independent Living gave me a fresh start. The staff is respectful, the environment is drug-free, and I finally have a place I can call home."
    },
    {
        id: 2,
        name: "Patricia Williams",
        relation: "Daughter of Resident",
        rating: 5,
        date: "October 2024",
        text: "My mother needed affordable housing after retirement. NewMe Independent Living has been a blessing. She feels safe, has made friends, and the all-inclusive pricing makes budgeting simple."
    },
    {
        id: 3,
        name: "Michael Chen",
        relation: "Resident in Transition",
        rating: 5,
        date: "September 2024",
        text: "I was going through a difficult transition and needed a supportive environment. The structured, drug-free community here helped me get back on my feet. I'm grateful for the second chance."
    },
    {
        id: 4,
        name: "Sarah Thompson",
        relation: "Family Member",
        rating: 4,
        date: "August 2024",
        text: "My brother is a veteran who found stability at NewMe. The 24/7 surveillance gives us peace of mind, and the staff treats everyone with dignity and respect."
    },
    {
        id: 5,
        name: "Robert Martinez",
        relation: "Senior Resident",
        rating: 5,
        date: "July 2024",
        text: "As an independent senior on a fixed income, I needed affordable housing that didn't compromise on safety. NewMe Independent Living checks all the boxes. Highly recommend."
    },
    {
        id: 6,
        name: "Linda Johnson",
        relation: "Re-entry Resident",
        rating: 5,
        date: "June 2024",
        text: "NewMe gave me a chance when I needed it most. The supportive community and structured environment helped me rebuild my life. I'm now employed and thriving."
    }
];

export default function ReviewsPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF8]">
            <PageHeader
                title="Reviews"
                subtitle="Hear from our residents and their families."
            />

            {/* Reviews Grid */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8DCC8] hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating ? 'fill-[#F4E4B8] text-[#F4E4B8]' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-[#A67C52] opacity-20" />
                            </div>

                            <p className="text-[#6B4423] mb-6 flex-1 leading-relaxed italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-[#E8DCC8]">
                                <div className="bg-[#F9F5F0] p-3 rounded-full">
                                    <User className="w-6 h-6 text-[#A67C52]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#6B4423]">{review.name}</h4>
                                    <p className="text-xs text-[#8B7355] font-medium">{review.relation}</p>
                                    <p className="text-xs text-[#A67C52] mt-1">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leave a Review CTA */}
                <div className="bg-[#6B4423] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Share Your Experience
                        </h2>
                        <p className="text-[#F4E4B8] text-lg mb-8">
                            Your feedback helps us continue to provide the best possible environment for our residents.
                        </p>
                        <Button className="bg-[#F4E4B8] hover:bg-[#E8DCC8] text-[#6B4423] font-bold py-6 px-10 rounded-full text-lg shadow-lg hover:scale-105 transition-transform">
                            Leave a Review
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
