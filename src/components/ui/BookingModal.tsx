'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, Clock, Map, Users, CreditCard } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { tourPackages } from '@/lib/data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [tripType, setTripType] = useState<'premium' | 'custom'>('premium');
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    date: '',
    time: '',
    selectedPackage: tourPackages[0]?.title || '',
    budget: '',
    days: '',
    destinations: '',
    persons: '',
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = `*New Booking Inquiry*\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*WhatsApp:* ${formData.whatsapp}\n`;
    message += `*Date:* ${formData.date}\n`;
    message += `*Time:* ${formData.time}\n\n`;
    
    if (tripType === 'premium') {
      message += `*Trip Type:* Premium Package\n`;
      message += `*Selected Package:* ${formData.selectedPackage}\n`;
    } else {
      message += `*Trip Type:* Custom / Budget Trip\n`;
      message += `*Budget:* ${formData.budget}\n`;
      message += `*Days:* ${formData.days}\n`;
      message += `*Persons:* ${formData.persons}\n`;
      message += `*Destinations:* ${formData.destinations}\n`;
    }

    const text = encodeURIComponent(message);
    window.open(`https://wa.me/94756001237?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-slate-50">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Book Your Trip</h2>
                <p className="text-sm text-slate-500 mt-1">Fill out the details below and we'll contact you instantly via WhatsApp.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                    <Input required name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="h-12 bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">WhatsApp Number</label>
                    <Input required name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="+1 234 567 890" className="h-12 bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Date</label>
                    <Input required name="date" type="date" value={formData.date} onChange={handleChange} className="h-12 bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Time</label>
                    <Input required name="time" type="time" value={formData.time} onChange={handleChange} className="h-12 bg-slate-50 border-slate-200" />
                  </div>
                </div>

                {/* Trip Type Selector */}
                <div className="pt-4 border-t border-slate-100">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">Trip Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setTripType('premium')}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${tripType === 'premium' ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                    >
                      <h4 className="font-bold text-slate-900">Premium Packages</h4>
                      <p className="text-xs text-slate-500 mt-1">Select from our curated itineraries</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTripType('custom')}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${tripType === 'custom' ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                    >
                      <h4 className="font-bold text-slate-900">Custom / Budget</h4>
                      <p className="text-xs text-slate-500 mt-1">Build your own personalized trip</p>
                    </button>
                  </div>
                </div>

                {/* Dynamic Fields */}
                <div className="min-h-[160px]">
                  {tripType === 'premium' ? (
                    <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Select Package</label>
                      <select 
                        name="selectedPackage" 
                        value={formData.selectedPackage} 
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary outline-none"
                      >
                        {tourPackages.map((pkg) => (
                          <option key={pkg.id} value={pkg.title}>{pkg.title} - {pkg.duration}</option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2"><CreditCard className="w-3.5 h-3.5" /> Budget</label>
                        <Input name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. $1000 - $1500" className="h-12 bg-slate-50 border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Total Days</label>
                        <Input name="days" type="number" value={formData.days} onChange={handleChange} placeholder="e.g. 7" className="h-12 bg-slate-50 border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2"><Users className="w-3.5 h-3.5" /> Persons Count</label>
                        <Input name="persons" type="number" value={formData.persons} onChange={handleChange} placeholder="e.g. 2 Adults, 1 Child" className="h-12 bg-slate-50 border-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2"><Map className="w-3.5 h-3.5" /> Destinations</label>
                        <Input name="destinations" value={formData.destinations} onChange={handleChange} placeholder="e.g. Kandy, Ella, Galle" className="h-12 bg-slate-50 border-slate-200" />
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Footer Actions */}
            <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50 flex justify-end gap-4 shrink-0">
              <Button type="button" variant="ghost" onClick={onClose} className="font-bold text-slate-500">
                Cancel
              </Button>
              <Button type="submit" form="booking-form" className="h-12 px-8 rounded-xl font-bold bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-lg shadow-[#25D366]/20 gap-2 text-base">
                <Send className="w-4 h-4" />
                Book via WhatsApp
              </Button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
