import React from 'react';
import ShieldCheck from 'lucide-react/icons/shield-check';
import Headphones from 'lucide-react/icons/headphones';
import Map from 'lucide-react/icons/map';
import Users from 'lucide-react/icons/users';
import CircleDollarSign from 'lucide-react/icons/circle-dollar-sign';
import CalendarDays from 'lucide-react/icons/calendar-days';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Licensed Tour Company',
      description: 'Fully authorized and regulated by the Sri Lanka Tourism Development Authority.',
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: '24/7 Support',
      description: 'Our dedicated team is always available to assist you throughout your journey.',
    },
    {
      icon: <Map className="w-8 h-8 text-primary" />,
      title: 'Custom Itineraries',
      description: 'Tailor-made travel plans designed specifically for your preferences and budget.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Professional Guides',
      description: 'Knowledgeable, English-speaking drivers and guides with years of experience.',
    },
    {
      icon: <CircleDollarSign className="w-8 h-8 text-primary" />,
      title: 'Best Price Guarantee',
      description: 'Premium travel experiences at the most competitive rates in the market.',
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-primary" />,
      title: 'Flexible Booking',
      description: 'Easy booking process with flexible cancellation policies for peace of mind.',
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop" 
                alt="Tourism Sri Lanka" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-border/50">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">100%</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Safe & Secure</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Travel with Confidence</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-12 leading-tight">
              Why Travelers Choose <span className="text-primary">TripLanka</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="shrink-0">
                    <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-primary/10 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
