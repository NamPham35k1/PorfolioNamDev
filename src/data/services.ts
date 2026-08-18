import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'android-development',
    title: 'Android App Development',
    iconName: 'Smartphone',
    shortDesc: 'Native Kotlin mobile apps with high performance, media streaming, offline storage, and polished UI.',
    description: 'Custom native Android development engineered from the ground up using Kotlin, Jetpack libraries, and robust MVVM architecture. Whether you need a streaming player, background overlay app, or production client product, I build fast, reliable apps.',
    features: [
      'Native Kotlin development with Android SDK & Coroutines',
      'ExoPlayer / Media3 integration for live IPTV & video streaming',
      'Local database caching with Room & offline-first architecture',
      'Background services, WindowManager overlays & system integrations',
      'REST API connection via Retrofit & OkHttp',
      'Firebase Authentication, Firestore, and Push Notifications'
    ],
    targetAudience: 'Startups, media businesses, and clients looking for high-performance native Android apps.',
    deliverables: ['Full Android Source Code (Kotlin)', 'APK / AAB Production Release', 'Architecture Documentation', 'API Integration Specs'],
    popularTag: true,
  },
  {
    id: 'web-development',
    title: 'Web Development & Dashboards',
    iconName: 'Layout',
    shortDesc: 'Modern React & TypeScript web applications, SaaS dashboards, booking portals, and responsive websites.',
    description: 'High-end web applications built using React 18, TypeScript, and Tailwind CSS. Designed to feel like modern SaaS products with smooth animations, mobile responsiveness, fast load times, and intuitive design system aesthetics.',
    features: [
      'Single Page Applications (SPA) with React Router & Vite',
      'Responsive design styled with Tailwind CSS & custom dark mode themes',
      'Interactive dashboards with chart metrics & data tables',
      'Client-side state management with TanStack Query & Zustand',
      'Form validations, modal drawers, and toast notifications',
      'SEO-friendly metadata structures and accessibility compliance'
    ],
    targetAudience: 'Businesses wanting high-converting web apps, booking portals, or modern SaaS interfaces.',
    deliverables: ['Production Web Build (Vercel/Netlify ready)', 'React + TypeScript Codebase', 'Component Design Tokens', 'Deployment Setup'],
    popularTag: true,
  },
  {
    id: 'backend-development',
    title: 'Backend REST API & Database Design',
    iconName: 'Server',
    shortDesc: 'Scalable Node.js, Express, and MongoDB RESTful microservices with secure authentication.',
    description: 'Solid backend architectures designed to serve mobile and web clients reliably. Clean controller-service layer separation, MongoDB data modeling, security headers, rate limiting, and automated error handling.',
    features: [
      'RESTful API route architecture using Node.js & Express.js',
      'MongoDB Mongoose schema design, indexing & data aggregation',
      'Secure JWT authentication, password hashing, & access controls',
      'Rate limiting, CORS configuration, & Helmet security headers',
      'Postman API testing collection and Swagger documentation',
      'Integration readiness for payment gateways & third-party services'
    ],
    targetAudience: 'Clients needing robust backends to power mobile applications or full-stack web platforms.',
    deliverables: ['Node.js API Repository', 'Database Schema Models', 'Postman API Specs', 'Environment Config (.env.example)'],
    popularTag: false,
  }
];
