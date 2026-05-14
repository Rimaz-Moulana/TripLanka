'use client';

import React from 'react';
import Calendar from 'lucide-react/icons/calendar';
import Users from 'lucide-react/icons/users';
import Briefcase from 'lucide-react/icons/briefcase';
import Map from 'lucide-react/icons/map';
import Search from 'lucide-react/icons/search';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchForm = () => {
  return (
    <div className="container mx-auto px-4 relative z-20 -mt-16">
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Dates */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> Arrival / Departure
            </label>
            <Input type="text" placeholder="Select Dates" className="border-0 bg-slate-50 rounded-xl focus-visible:ring-primary h-12" />
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Users className="w-3 h-3" /> Travelers
            </label>
            <Input type="number" placeholder="Number of persons" className="border-0 bg-slate-50 rounded-xl focus-visible:ring-primary h-12" />
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Briefcase className="w-3 h-3" /> Budget Range
            </label>
            <select className="w-full border-0 bg-slate-50 rounded-xl focus:ring-2 focus:ring-primary h-12 px-3 text-sm">
              <option>Economy ($500 - $1000)</option>
              <option>Standard ($1000 - $2000)</option>
              <option>Luxury ($2000+)</option>
            </select>
          </div>

          {/* Interests */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Map className="w-3 h-3" /> Interests
            </label>
            <select className="w-full border-0 bg-slate-50 rounded-xl focus:ring-2 focus:ring-primary h-12 px-3 text-sm">
              <option>Beach & Relax</option>
              <option>Cultural Heritage</option>
              <option>Wildlife Safari</option>
              <option>Honeymoon</option>
              <option>Adventure</option>
            </select>
          </div>

          {/* Submit */}
          <div className="flex items-end">
            <Button className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20 gap-2">
              <Search className="w-4 h-4" />
              Plan My Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
