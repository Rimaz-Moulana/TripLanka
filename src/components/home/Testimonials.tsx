'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Star from 'lucide-react/icons/star';
import Quote from 'lucide-react/icons/quote';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonials } from '@/lib/data';

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-primary/40 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Voices of Our <span className="text-primary italic">Happy Travelers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Read stories from travelers who have explored the magic of Sri Lanka with us.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 p-4">
                  <Card className="bg-white/5 border-white/10 text-white h-full hover:bg-white/10 transition-colors duration-500">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-6 text-primary">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg italic text-slate-300 mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        <div>
                          <h4 className="font-bold text-white">{testimonial.name}</h4>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-primary hover:text-white" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-primary hover:text-white" />
          </Carousel>
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-16 flex flex-col items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
          <div className="flex items-center gap-2">
            <span className="font-bold">4.9 / 5.0</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            Based on 500+ Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
