'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookNowButton } from '@/components/ui/BookNowButton';
import Play from 'lucide-react/icons/play';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop"
        >
          {/* I'll use a placeholder video or just an image for now */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-beach-waves-on-the-golden-sand-34563-large.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-primary/20 backdrop-blur-md rounded-full border border-white/20">
            Trusted Travel Partner in Sri Lanka
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
            Discover Paradise in <span className="text-primary italic">Sri Lanka</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Experience private tours, curated holiday packages, and professional guides as you explore the Pearl of the Indian Ocean.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookNowButton size="lg" className="rounded-full px-8 text-base h-14 bg-primary hover:bg-primary/90 min-w-[200px]">
              Explore Tours
            </BookNowButton>
            <BookNowButton size="lg" variant="outline" className="rounded-full px-8 text-base h-14 bg-white/10 hover:bg-white/20 border-white/20 text-white min-w-[200px]">
              Plan My Trip
            </BookNowButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
        <span className="text-white/40 text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
