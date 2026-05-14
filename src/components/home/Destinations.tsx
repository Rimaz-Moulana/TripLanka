'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { destinations } from '@/lib/data';
import MapPin from 'lucide-react/icons/map-pin';

const Destinations = () => {
  return (
    <section className="py-24 bg-slate-50" id="destinations">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Explore Sri Lanka</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Our Top <span className="text-primary italic">Destinations</span>
          </h2>
          <p className="text-slate-600 text-lg">
            From ancient ruins to misty tea gardens and pristine beaches, discover the most breathtaking locations in the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-white/80 text-sm font-medium">Sri Lanka</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{dest.name}</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {dest.description}
                </p>
                <div className="w-12 h-1 bg-primary mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
