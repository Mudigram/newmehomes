import { Metadata } from "next";
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
    title: "About Us | NewMe Independent Living",
    description: "Learn about NewMe Independent Living's mission to empower residents to live independently with dignity. Serving seniors, veterans, and adults in transition.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF8]">
            <PageHeader
                title="About Us"
                subtitle="Empowering independence with dignity and support."
            />

            {/* Mission & Vision Section */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#6B4423] mb-6 text-center">
                        Our Mission & Vision
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8DCC8]">
                            <h3 className="text-2xl font-bold text-[#A67C52] mb-4">Mission</h3>
                            <p className="text-lg text-[#8B7355] leading-relaxed">
                                To empower our residents to live independently in a nurturing and structured environment that promotes dignity, safety, and personal growth.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8DCC8]">
                            <h3 className="text-2xl font-bold text-[#A67C52] mb-4">Vision</h3>
                            <p className="text-lg text-[#8B7355] leading-relaxed">
                                To be a trusted home where every resident feels valued, respected, and supported in their journey to independence.
                            </p>
                        </div>
                    </div>

                    {/* Who We Serve */}
                    <div className="bg-[#F9F5F0] p-10 rounded-3xl mb-16">
                        <h3 className="text-2xl font-bold text-[#6B4423] mb-6 text-center">Who We Serve</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Independent seniors",
                                "Military veterans",
                                "Adults in transition",
                                "Re-entry residents"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                                    <div className="w-3 h-3 bg-[#F4E4B8] rounded-full"></div>
                                    <span className="text-[#6B4423] font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About Description */}
                    <div className="text-center">
                        <p className="text-lg text-[#8B7355] leading-relaxed mb-6">
                            NewMe Independent Living provides a safe, supportive, and affordable home environment for adults seeking independence with dignity. We serve individuals transitioning into stability, including independent seniors, military veterans, and adults in life transitions.
                        </p>
                        <p className="text-lg text-[#8B7355] leading-relaxed">
                            Our commitment is to create a nurturing space where residents can rebuild their lives with confidence, surrounded by a supportive community that respects their journey.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
