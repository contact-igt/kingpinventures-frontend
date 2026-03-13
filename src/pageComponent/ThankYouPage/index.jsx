import React from 'react';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { useRouter } from 'next/router';

const ThankYouPage = () => {
    const router = useRouter();

    return (
        <div className="pt-32 min-h-screen flex flex-col justify-center items-center px-6 md:px-12 bg-brand-warm relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-lime/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-3xl w-full mx-auto text-center relative z-10">
                {/* Success Icon */}
                <div className="mb-8 inline-flex items-center justify-center p-6 rounded-full bg-[#111827]/10 border border-[#111827]/20 animate-blob">
                    <CheckCircle className="w-16 h-16 text-[#111827]" />
                </div>

                {/* Heading */}
                <h1 className="font-display font-bold text-5xl md:text-7xl text-brand-dark uppercase mb-6 leading-tight">
                    Message <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-lime">
                        Received.
                    </span>
                </h1>

                {/* Confirmation Text */}
                <p className="font-body text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Thank you for reaching out to Kingpin Ventures. We’ve received your details and our team is already reviewing them. You can expect to hear from us within 24 hours.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button
                        onClick={() => router.push('/')}
                        className="btn-premium group flex items-center gap-3"
                    >
                        <Home size={20} />
                        Back to Home
                    </button>

                    <button
                        onClick={() => router.push('/services')}
                        className="btn-premium group flex items-center gap-3 !bg-transparent !text-brand-dark border border-brand-dark hover:!bg-brand-lime"
                    >
                        Explore Services
                        <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    </button>
                </div>

                {/* Footer-like text placed below buttons */}
                <div className="mt-8 text-center w-full px-6">
                    <p className="font-body text-xs text-[#444] uppercase tracking-widest">
                        Performance Driven Growth • Kingpin Ventures
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
