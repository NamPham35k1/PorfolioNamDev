import type { QuickStat, TimelineEvent } from '../types';

export const developerConfig = {
  name: 'Nam',
  title: 'Android & Web Developer',
  tagline: 'Building modern Android applications, React web apps, and scalable backend systems.',
  status: 'Available for freelance',
  location: 'Vietnam',
  email: 'nam.dev.contact@gmail.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  facebookUrl: 'https://facebook.com',
  bio: `I am a passionate Android & Full-stack Web Developer focused on building high-performance native mobile apps and modern web platforms. With expertise spanning Kotlin, Jetpack libraries, ExoPlayer streaming, ReactJS, TypeScript, and Node.js REST APIs, I craft products with premium UI/UX, robust architecture, and smooth user interactions.`,
  coreFocus: [
    'Native Android Development (Kotlin, MVVM, Room, Retrofit, ExoPlayer)',
    'Modern Web Development (ReactJS, TypeScript, Tailwind CSS, Vite)',
    'Backend Services & APIs (Node.js, Express.js, MongoDB, RESTful APIs)',
    'Desktop Overlay & System Services (Android Service, WindowManager)',
  ]
};

export const quickStats: QuickStat[] = [
  {
    label: 'Projects Completed',
    value: '15+',
    subtitle: 'Android & Web Applications',
    icon: 'FolderCheck',
  },
  {
    label: 'Technologies',
    value: '10+',
    subtitle: 'Kotlin, React, Node, MongoDB...',
    icon: 'Cpu',
  },
  {
    label: 'Years Experience',
    value: '2+',
    subtitle: 'Hands-on Production Code',
    icon: 'Sparkles',
  },
  {
    label: 'Availability',
    value: 'Available',
    subtitle: 'Open for Freelance & Contracts',
    icon: 'CheckCircle2',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Started Native Android Development',
    description: 'Mastered Kotlin, Android SDK fundamentals, MVVM architecture, Room database, Retrofit networking, and UI design principles.',
    technologies: ['Kotlin', 'Android SDK', 'MVVM', 'Room', 'Retrofit'],
    highlight: 'Foundation Year',
  },
  {
    year: '2025',
    title: 'Built Real-World Production Android Apps',
    description: 'Developed complex native Android solutions including IPTV Player with ExoPlayer media streaming, M3U playlist parsing, and Kawaii ScreenPet overlay system service.',
    technologies: ['Kotlin', 'ExoPlayer', 'Android Service', 'Coroutines', 'Firebase'],
    highlight: 'Key Milestones',
  },
  {
    year: '2026',
    title: 'Expanding into React & Full-stack Web Development',
    description: 'Engineered responsive web applications with ReactJS, TypeScript, Tailwind CSS, REST APIs, Express.js, and MongoDB. Combining mobile and web expertise to deliver cross-platform client solutions.',
    technologies: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'REST APIs'],
    highlight: 'Full-Stack Evolution',
  },
];
