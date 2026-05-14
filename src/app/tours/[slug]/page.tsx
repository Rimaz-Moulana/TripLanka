'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { tourPackages } from '@/lib/data';
import Image from 'next/image';
import { Clock, CheckCircle2, XCircle, Calendar, Users, MapPin, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TourDetailPage() {
  const params = useParams();
  const tour = tourPackages.find(t => t.slug === params.slug);

  if (!tour) {
    return <div className="min-h-screen flex items-center justify-center">Tour not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header / Banner */}
      <section className="relative h-[60vh] md:h-[70vh] pt-20">
        <Image 
          src={tour.image} 
          alt={tour.title} 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 pb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-primary text-white border-0">{tour.category}</Badge>
            <Badge className="bg-white/20 backdrop-blur-md text-white border-white/20">{tour.duration}</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">{tour.title}</h1>
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Sri Lanka</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Private Tour</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Duration</p>
                    <p className="text-lg font-bold text-slate-900">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full"><Heart className="w-4 h-4" /></Button>
                  <Button variant="outline" size="icon" className="rounded-full"><Share2 className="w-4 h-4" /></Button>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-12">
                <h3 className="text-2xl font-bold mb-4">Tour Overview</h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {tour.description} This comprehensive tour covers the best spots in Sri Lanka, offering a blend of culture, nature, and relaxation. We ensure high-quality service and experienced guides for an unforgettable experience.
                </p>
                
                <h4 className="text-xl font-bold mb-4">Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary Tabs */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Detailed Itinerary</h3>
                <Tabs defaultValue="day1" className="w-full">
                  <TabsList className="bg-slate-100 p-1 rounded-xl mb-6">
                    <TabsTrigger value="day1" className="rounded-lg">Day 1-2</TabsTrigger>
                    <TabsTrigger value="day2" className="rounded-lg">Day 3-5</TabsTrigger>
                    <TabsTrigger value="day3" className="rounded-lg">Day 6-10</TabsTrigger>
                  </TabsList>
                  <TabsContent value="day1" className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-lg mb-4">Arrival & Initial Exploration</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Arrival at Bandaranaike International Airport. Meet your professional guide and transfer to your hotel. Begin your journey with a welcome dinner and a brief orientation of the island's beauty.
                    </p>
                  </TabsContent>
                  <TabsContent value="day2">
                    {/* Content for next days */}
                    <div className="bg-slate-50 p-6 rounded-2xl">
                      <h4 className="font-bold text-lg mb-4">Deep Dive into Culture & Nature</h4>
                      <p className="text-slate-600 text-sm">Experience the heart of Sri Lanka as we move inland toward the cultural triangle.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Included / Excluded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Included
                  </h4>
                  <ul className="space-y-3 text-sm text-green-700">
                    <li className="flex gap-2">Professional English Speaking Guide</li>
                    <li className="flex gap-2">Private Air-Conditioned Vehicle</li>
                    <li className="flex gap-2">All Government Taxes & Fees</li>
                    <li className="flex gap-2">Daily Breakfast & Dinner</li>
                  </ul>
                </div>
                <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Excluded
                  </h4>
                  <ul className="space-y-3 text-sm text-red-700">
                    <li className="flex gap-2">International Airfare</li>
                    <li className="flex gap-2">Entrance Fees to Monuments</li>
                    <li className="flex gap-2">Personal Expenses & Tips</li>
                    <li className="flex gap-2">Lunch (Optional)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sticky Inquiry Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-6">
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <div className="bg-primary p-6 text-white text-center">
                    <p className="text-sm font-medium opacity-80 mb-1 uppercase tracking-widest">Starting From</p>
                    <p className="text-4xl font-bold">${tour.price}</p>
                    <p className="text-xs opacity-60">per person (based on double occupancy)</p>
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Button variant="outline" className="w-full justify-start pl-10 rounded-xl h-12 text-slate-500">Pick a date</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Travelers</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="number" defaultValue={2} className="w-full pl-10 h-12 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                    </div>
                    <Button className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20">Book This Tour</Button>
                    <p className="text-center text-xs text-slate-400">No payment required now. Free cancellation up to 48h.</p>
                  </CardContent>
                </Card>

                <div className="bg-slate-900 rounded-3xl p-8 text-white">
                  <h4 className="font-bold text-lg mb-4">Have Questions?</h4>
                  <p className="text-slate-400 text-sm mb-6">Talk to our experts. We are available 24/7 to help you plan your trip.</p>
                  <Button variant="outline" className="w-full h-12 rounded-xl border-white/20 hover:bg-white/10 text-white">WhatsApp Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
