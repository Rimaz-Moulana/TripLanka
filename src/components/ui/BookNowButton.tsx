'use client';

import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BookNowButtonProps extends ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const BookNowButton = ({ className, children, ...props }: BookNowButtonProps) => {
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
