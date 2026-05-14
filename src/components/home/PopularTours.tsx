'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Clock from 'lucide-react/icons/clock';
import Tag from 'lucide-react/icons/tag';
import ArrowRight from 'lucide-react/icons/arrow-right';
import Star from 'lucide-react/icons/star';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { tourPackages } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

const PopularTours = () => {
  return (
    <section className="py-24 bg-white" id="tours">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Handpicked Experiences</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Most Popular <span className="text-primary italic">Tour Packages</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Carefully crafted itineraries to showcase the very best of Sri Lanka's diverse landscape and rich culture.
            </p>
          </div>
          <Button variant="ghost" className="group text-primary hover:text-primary hover:bg-primary/5 gap-2 font-bold">
            View All Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tourPackages.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-md text-slate-900 hover:bg-white border-0 font-bold">
                      {tour.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ${tour.price}
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {tour.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {tour.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-xl font-bold group-hover:bg-primary/90 transition-all">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
