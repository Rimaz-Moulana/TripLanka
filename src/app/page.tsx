import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import SearchForm from '@/components/home/SearchForm';
import PopularTours from '@/components/home/PopularTours';
import Destinations from '@/components/home/Destinations';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import { BookNowButton } from '@/components/ui/BookNowButton';

export const metadata = {
  title: 'TripLanka | Discover Paradise in Sri Lanka',
  description: 'Premium Sri Lanka travel agency offering private tours, holiday packages, airport transfers, and custom travel experiences.',
  keywords: 'Sri Lanka tours, private guides, holiday packages, Sri Lanka travel, luxury tours Sri Lanka',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero & Search */}
      <div className="relative">
        <HeroSection />
        <SearchForm />
      </div>

      {/* Main Sections */}
      <PopularTours />
      <WhyChooseUs />
      <Destinations />

      {/* CTA Section */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to Plan Your <span className="italic">Dream Vacation?</span>
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Contact our travel experts today and let us help you create a personalized itinerary that fits your dreams and budget perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookNowButton className="bg-white text-primary px-10 py-6 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl shadow-black/10">
              Get a Free Quote
            </BookNowButton>
            <BookNowButton className="bg-white/10 text-white border border-white/20 px-10 py-6 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-xl shadow-black/10">
              Book Your Trip
            </BookNowButton>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl" />
      </section>

      <Testimonials />

      <Footer />
    </main>
  );
}
