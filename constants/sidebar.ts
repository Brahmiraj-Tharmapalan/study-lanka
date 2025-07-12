import {
  BookOpen,
  Book,
  FileText,
  Briefcase,
  Palette,
  Calendar,
  ArrowLeftRight,
  Laptop,
  Car,
  Lightbulb
} from 'lucide-react';

export const serviceItems: SidebarItem[] = [
  { name: 'Tutoring', route: '/services/tutoring', icon: BookOpen },
  { name: 'Study Material', route: '/services/materials', icon: Book },
  { name: 'Assignment Help', route: '/services/assignment-help', icon: FileText },
  { name: 'Part-Time Jobs', route: '/services/part-time-jobs', icon: Briefcase },
  { name: 'Creative Freelancing', route: '/services/freelancing', icon: Palette },
  { name: 'Workshops / Events', route: '/services/workshops', icon: Calendar },
  { name: 'Book Exchange', route: '/services/book-exchange', icon: ArrowLeftRight  },
  { name: 'Tech Buy/Sell', route: '/services/tech', icon: Laptop },
  { name: 'Ride Sharing', route: '/services/ride-sharing', icon: Car },
  { name: 'Study Tips / Motivation', route: '/services/study-tips', icon: Lightbulb },
];