import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { ShieldCheck, Heart, Award, Users } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Happy Travelers', value: '10k+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Professional Guides', value: '50+' },
    { label: 'Tour Packages', value: '100+' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1590424744297-f67459075d9e?q=80&w=2000&auto=format&fit=crop" 
            alt="About Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-primary italic">Story</span></h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Crafting unforgettable memories in the heart of the Indian Ocean for over a decade.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?q=80&w=800&auto=format&fit=crop" 
                  alt="Team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
            
            <div className="space-y-8">
              <span className="text-primary font-bold uppercase tracking-widest text-sm block">Established 2010</span>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Authentic Experiences, <span className="text-primary italic">Personalized Service</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                TripLanka was founded with a simple mission: to show the world the true beauty of Sri Lanka through the eyes of locals. We believe that travel should be more than just visiting places; it should be about connecting with cultures and creating lasting bonds.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="shrink-0 bg-primary/10 p-3 rounded-2xl h-fit">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Passion</h4>
                    <p className="text-sm text-slate-500">We love our island and want you to love it too.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 bg-secondary/10 p-3 rounded-2xl h-fit">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Trust</h4>
                    <p className="text-sm text-slate-500">Safety and reliability are our top priorities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-3xl shadow-sm border border-border/50">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us signals repeated or specialized */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Travelers <span className="text-primary italic">Trust Us</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Award Winning</h3>
              <p className="text-slate-500 text-sm">Recognized for excellence in hospitality and tour management.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Local Experts</h3>
              <p className="text-slate-500 text-sm">Every guide is a local expert with deep knowledge of history.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Sustainable Travel</h3>
              <p className="text-slate-500 text-sm">We care for our environment and support local communities.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
