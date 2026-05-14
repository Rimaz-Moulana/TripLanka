'use client';

import React, { useState } from 'react';
import Calendar from 'lucide-react/icons/calendar';
import Users from 'lucide-react/icons/users';
import Briefcase from 'lucide-react/icons/briefcase';
import Map from 'lucide-react/icons/map';
import MessageCircle from 'lucide-react/icons/message-circle';
import Mail from 'lucide-react/icons/mail';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    dates: '',
    travelers: '',
    budget: 'Standard ($1000 - $2000)',
    interest: 'Cultural Heritage'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateMessage = () => {
    return `Hello TripLanka! I would like to plan a trip.\n\nDetails:\n- Dates: ${formData.dates || 'Not specified'}\n- Travelers: ${formData.travelers || 'Not specified'}\n- Budget: ${formData.budget}\n- Interest: ${formData.interest}\n\nPlease let me know the available options.`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/94756001237?text=${text}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('TripLanka: New Trip Inquiry');
    const body = encodeURIComponent(generateMessage());
    window.open(`mailto:hello@triplanka.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="container mx-auto px-4 relative z-20 -mt-16">
      <div className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Dates */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-primary" /> Arrival / Departure
            </label>
            <Input 
              name="dates"
              value={formData.dates}
              onChange={handleChange}
              type="text" 
              placeholder="e.g. Dec 10 - Dec 20" 
              className="border border-slate-200 bg-slate-50 rounded-xl focus-visible:ring-primary h-12" 
            />
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-primary" /> Travelers
            </label>
            <Input 
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              type="number" 
              placeholder="Number of persons" 
              className="border border-slate-200 bg-slate-50 rounded-xl focus-visible:ring-primary h-12" 
            />
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-primary" /> Budget Range
            </label>
            <select 
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border border-slate-200 bg-slate-50 rounded-xl focus:ring-2 focus:ring-primary h-12 px-3 text-sm outline-none transition-all"
            >
              <option>Economy ($500 - $1000)</option>
              <option>Standard ($1000 - $2000)</option>
              <option>Luxury ($2000+)</option>
            </select>
          </div>

          {/* Interests */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Map className="w-3.5 h-3.5 text-primary" /> Interests
            </label>
            <select 
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full border border-slate-200 bg-slate-50 rounded-xl focus:ring-2 focus:ring-primary h-12 px-3 text-sm outline-none transition-all"
            >
              <option>Beach & Relax</option>
              <option>Cultural Heritage</option>
              <option>Wildlife Safari</option>
              <option>Honeymoon</option>
              <option>Adventure</option>
            </select>
          </div>

          {/* Submit Actions */}
          <div className="flex flex-col gap-3 justify-end mt-2 lg:mt-0">
            <Button onClick={handleWhatsApp} className="w-full h-11 rounded-xl text-sm font-bold shadow-md shadow-green-500/20 bg-green-600 hover:bg-green-700 text-white gap-2 transition-all">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button onClick={handleEmail} variant="outline" className="w-full h-11 rounded-xl text-sm font-bold gap-2 hover:bg-slate-50 transition-all border-slate-200 text-slate-700">
              <Mail className="w-4 h-4" />
              Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
