import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1590424744297-f67459075d9e?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact <span className="text-primary italic">Us</span></h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have questions about our tours or need a custom itinerary? Get in touch with our travel experts today.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
                <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-slate-500 text-sm mb-4">Available 24/7 for urgent inquiries.</p>
                <p className="text-primary font-bold text-lg">+94 77 123 4567</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
                <div className="bg-secondary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-slate-500 text-sm mb-4">We'll respond within 24 hours.</p>
                <p className="text-secondary font-bold text-lg">hello@triplanka.com</p>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white">
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-slate-400 text-sm mb-6">Quick chat with our support team.</p>
                <Button className="w-full rounded-xl bg-white text-slate-900 hover:bg-slate-100 border-0">Chat Now</Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-border/50">
                <h2 className="text-3xl font-bold mb-8">Send Us a <span className="text-primary">Message</span></h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <Input placeholder="John Doe" className="h-14 rounded-xl bg-slate-50 border-0 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <Input placeholder="john@example.com" className="h-14 rounded-xl bg-slate-50 border-0 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                    <Input placeholder="+1 234 567 890" className="h-14 rounded-xl bg-slate-50 border-0 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject</label>
                    <Input placeholder="Inquiry about tour" className="h-14 rounded-xl bg-slate-50 border-0 focus-visible:ring-primary" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Message</label>
                    <textarea 
                      placeholder="Tell us about your dream trip..." 
                      className="w-full min-h-[150px] p-4 rounded-xl bg-slate-50 border-0 focus:ring-2 focus:ring-primary outline-none text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button className="w-full md:w-fit px-12 h-14 rounded-xl text-lg font-bold gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-slate-200 rounded-[2.5rem] h-[400px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-50 grayscale" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop)' }}></div>
            <div className="relative z-10 text-center">
              <div className="bg-white p-4 rounded-full shadow-2xl inline-flex mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Office in Colombo</h3>
              <p className="text-slate-600">123 Galle Road, Colombo 03, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
