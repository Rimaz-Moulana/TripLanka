'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const BookNowButton = ({ className, children, ...props }: React.ComponentProps<typeof Button>) => {
  return (
    <Button 
      onClick={() => window.dispatchEvent(new Event('openBookingModal'))}
      className={cn(className)}
      {...props}
    >
      {children || 'Book Now'}
    </Button>
  );
};
