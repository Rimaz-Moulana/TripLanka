export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
  description: string;
  category: 'Beach' | 'Wildlife' | 'Culture' | 'Honeymoon' | 'Adventure';
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export const tourPackages: TourPackage[] = [
  {
    id: '1',
    title: '5 Days Beach Escape',
    slug: 'beach-escape',
    duration: '5 Days / 4 Nights',
    price: 499,
    image: 'https://images.unsplash.com/photo-1540206395-68808572332f', // Mirissa Beach
    highlights: ['Mirissa Whale Watching', 'Galle Fort Tour', 'Bentota Water Sports'],
    description: 'Experience the golden sands and turquoise waters of Sri Lanka\'s southern coast.',
    category: 'Beach',
  },
  {
    id: '2',
    title: '7 Days Cultural Heritage',
    slug: 'cultural-heritage',
    duration: '7 Days / 6 Nights',
    price: 750,
    image: '/images/sigiriya.png',
    highlights: ['Sigiriya Rock Fortress', 'Kandy Temple of Tooth', 'Dambulla Cave Temple'],
    description: 'Journey through the ancient kingdoms and spiritual heart of the island.',
    category: 'Culture',
  },
  {
    id: '3',
    title: '10 Days Luxury Honeymoon',
    slug: 'luxury-honeymoon',
    duration: '10 Days / 9 Nights',
    price: 1200,
    image: '/images/ella.png',
    highlights: ['Private Candlelight Dinner', 'Nuwara Eliya Tea Gardens', 'Ella Scenic Train Ride'],
    description: 'A romantic escape designed for unforgettable memories in paradise.',
    category: 'Honeymoon',
  },
  {
    id: '4',
    title: '14 Days Full Island Explorer',
    slug: 'island-explorer',
    duration: '14 Days / 13 Nights',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a', // Yala Safari
    highlights: ['Yala Safari', 'Polonnaruwa Ruins', 'Trincomalee Beaches', 'Adam\'s Peak Hike'],
    description: 'The ultimate Sri Lankan adventure covering every corner of the island.',
    category: 'Adventure',
  },
];

export const destinations: Destination[] = [
  { id: '1', name: 'Colombo', image: '/images/colombo.png', description: 'The bustling commercial capital.' },
  { id: '2', name: 'Kandy', image: '/images/kandy.png', description: 'The hill capital and spiritual center.' },
  { id: '3', name: 'Ella', image: '/images/ella.png', description: 'Breathtaking views and hiking trails.' },
  { id: '4', name: 'Galle', image: '/images/galle.png', description: 'Colonial charm and historic fort.' },
  { id: '5', name: 'Sigiriya', image: '/images/sigiriya.png', description: 'The majestic lion rock fortress.' },
  { id: '6', name: 'Nuwara Eliya', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162', description: 'Little England amidst tea hills.' },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'United Kingdom',
    rating: 5,
    text: 'Our trip was perfectly organized. The driver was professional and the hotels were amazing!',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Sri Lanka is beautiful, and TripLanka made it so easy to explore. Sigiriya was a highlight!',
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: '3',
    name: 'Emma Watson',
    location: 'Australia',
    rating: 4,
    text: 'Wonderful experience. The tea plantation tour in Nuwara Eliya was unforgettable.',
    avatar: 'https://i.pravatar.cc/150?u=emma',
  },
];
