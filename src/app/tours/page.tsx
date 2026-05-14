'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { tourPackages } from '@/lib/data';
import Image from 'next/image';
import { Clock, Tag, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function ToursPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Beach', 'Culture', 'Wildlife', 'Honeymoon', 'Adventure'];

  const filteredTours = filter === 'All' 
    ? tourPackages 
    : tourPackages.filter(tour => tour.category === filter);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop" 
            alt="Tours Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Explore Our <span className="text-primary italic">Tour Packages</span></h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Choose from our carefully curated selection of private tours and holiday experiences across Sri Lanka.
          </p>
        </div>
      </section>

      {/* Filter & Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-primary" /> Filter by Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        filter === cat 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-primary mb-2">Need a Custom Tour?</h4>
                <p className="text-sm text-slate-600 mb-4">
                  We can create a personalized itinerary just for you.
                </p>
                <Button className="w-full rounded-xl">Contact Experts</Button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <p className="text-slate-500 text-sm">Showing <b>{filteredTours.length}</b> tour packages</p>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input placeholder="Search tours..." className="pl-10 rounded-xl border-border/50 bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredTours.map((tour) => (
                  <Card key={tour.id} className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 border-0">{tour.category}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {tour.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{tour.title}</h3>
                      <p className="text-slate-500 text-sm mb-6 line-clamp-2">{tour.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">From</p>
                          <p className="text-xl font-bold text-primary">${tour.price}</p>
                        </div>
                        <Link href={`/tours/${tour.slug}`}>
                          <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary hover:text-white">View Details</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
