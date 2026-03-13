import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const clientIndustries = [
    {
        name: "Healthcare & Medical",
        portfolio: ["Hospitals", "Clinics", "Doctors", "RCM Companies"],
        services: ["Patient Acquisition", "Brand Awareness", "Lead Generation", "Website Development"]
    },
    {
        name: "Education & EdTech",
        portfolio: ["Universities", "Colleges", "Training Institutes", "Online Courses"],
        services: ["Student Enrollment", "Course Sales", "Brand Positioning", "LMS Development"]
    },
    {
        name: "E-commerce & D2C",
        portfolio: ["Fashion", "Beauty", "Electronics", "Home Decor"],
        services: ["Sales Growth", "ROAS Optimization", "Brand Building", "Shopify Development"]
    },
    {
        name: "Real Estate & Construction",
        portfolio: ["Developers", "Agents", "Architects", "Interior Designers"],
        services: ["Lead Generation", "Project Showcasing", "Brand Awareness", "Virtual Tours"]
    },
    {
        name: "B2B & Consulting",
        portfolio: ["SaaS", "IT Services", "Business Consultants", "Law Firms"],
        services: ["Lead Generation", "LinkedIn Marketing", "Content Strategy", "Website Development"]
    }
];

const clientList = [
    "Pixel Eye Hospital", "Antardrashti Netralaya", "Naitrika Eye Care", "Dr. Senthil Ophthall", "Dr. Ramanan", "Wellinit (USA)", "HealthPilot.ai",
    "NextLevel.in", "777 Hosting", "VLS Law Academy", "KR Institute", "Triumph Vetrivel Motors", "Wild Funk", "Phone & Co", "Sri Krish Mirra Builders", " Phoenix Fitness", "⁠Dhiren Eye Care", "⁠RR Constructions", "Blueray International", "⁠Pulz Care", "Sky Thru Restaurant", "⁠Global Uninexus", "T3 Institute of Wellness & Coaching", "Mahimy Foods"
];

const ClientsIndustriesPage = ({ onContactClick }) => {
    return (
        <div className="pt-32 min-h-screen">
            {/* Hero Section */}
            <section className="px-6 md:px-12 mb-24">
                <div className="max-w-[1600px] mx-auto">
                    <p className="font-body text-[#111827] mb-6 tracking-[0.2em] text-sm uppercase font-semibold flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#111827] rounded-full animate-pulse"></span>
                        Proven Results, Real Partners
                    </p>
                    <h1 className="font-display font-bold text-[9vw] md:text-[7vw] leading-[0.9] tracking-tight text-brand-dark uppercase mb-8">
                        Industries We <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-lime">Transform.</span>
                    </h1>
                    <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl">
                        We partner with brands that are serious about scaling — across India, Singapore, and the USA.
                    </p>
                </div>
            </section>

            {/* Core Industries Served */}
            <section className="border-y border-gray-100 relative z-10 bg-brand-warm">
                <div className="max-w-[1600px] mx-auto">
                    <h2 className="font-display text-4xl font-bold uppercase p-8 md:p-12 text-[#111827] border-b border-gray-200">Core Industries You Serve</h2>
                    <div className="flex flex-col">
                        {clientIndustries.map((industry, index) => (
                            <div key={index} className="grid lg:grid-cols-3 border-b border-gray-100 group hover:bg-white active:bg-white transition-colors duration-300">
                                {/* Industry Title and Portfolio */}
                                <div className="lg:col-span-1 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-200">
                                    <h3 className="font-display text-2xl font-bold mb-4 text-[#111827] group-hover:text-[#111827] transition-colors">{industry.name}</h3>
                                    <h4 className="font-body text-sm uppercase tracking-widest text-gray-600 mb-3">Client Portfolio Highlights:</h4>
                                    <ul className="space-y-2 font-body text-sm text-[#111827]/90">
                                        {industry.portfolio.map((client, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <MapPin className="w-3 h-3 shrink-0 text-[#111827]" />
                                                <span>{client}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Services Delivered */}
                                <div className="lg:col-span-2 p-8 md:p-12 bg-[#ffffff]/50 lg:bg-transparent">
                                    <h4 className="font-body text-sm uppercase tracking-widest text-gray-600 font-bold mb-4">Services delivered:</h4>
                                    <div className="grid sm:grid-cols-2 gap-4 font-body text-[#111827]/90">
                                        {industry.services.map((service, i) => (
                                            <p key={i} className="flex items-start gap-2 text-sm">
                                                <ArrowRight className="w-4 h-4 shrink-0 mt-0.5 text-[#111827]" />
                                                <span>{service}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client List (Optional Section) */}
            <section className="py-16 md:py-24 px-6 md:px-12 border-b border-gray-100 bg-brand-gray">
                <div className="max-w-[2000px] mx-auto">
                    <h2 className="font-display text-4xl font-bold uppercase mb-12 text-[#111827] text-center">Highlighted Clients</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 max-w-7xl mx-auto ">
                        {clientList.map((client, index) => (
                            <div key={index} className="p-4 mt-4 border border-gray-100 flex items-center justify-center text-center bg-white hover:border-brand-lime transition-all duration-300 shadow-sm">
                                <p className="font-body text-sm font-medium text-brand-dark">{client}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Closing CTA */}
            <section className="py-16 md:py-32 border-t border-gray-200 text-center px-6 bg-brand-warm">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-display text-4xl md:text-6xl text-brand-dark font-bold mb-8 leading-tight">
                        If You’re in Any of These Industries — <span className="text-brand-dark">We Can Scale You.</span>
                    </h2>
                    <p className="font-body text-gray-600 text-xl mb-12">
                        We know the numbers. We know the bottlenecks. We know how to build predictable, profitable growth.
                    </p>
                    <button
                        onClick={onContactClick}
                        className="btn-premium group flex items-center justify-center mx-auto gap-4"
                    >
                        Book a Discovery Call
                        <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300" size={20} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ClientsIndustriesPage;
