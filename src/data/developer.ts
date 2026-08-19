import type { QuickStat, TimelineEvent } from '../types';

export const developerConfig = {
  name: 'Thành Nam',
  title: 'Android & Web Developer',
  tagline: 'Phát triển & maintain ứng dụng Android thực tế, tối ưu hóa Monetization (AdMob, IAP), Firebase & Full-stack Web.',
  status: 'Available for freelance',
  location: 'Việt Nam',
  email: 'thanhnamnb1004@gmail.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://www.linkedin.com/in/nam-ph%E1%BA%A1m-9961a7295/',
  facebookUrl: 'https://www.facebook.com/pham.thanh.nam.39218?locale=vi_VN',
  bio: `Mình có kinh nghiệm phát triển và maintain các ứng dụng Android thực tế, đặc biệt là các dự án theo mô hình monetization như AdMob, quảng cáo trong ứng dụng và các ứng dụng có tích hợp IAP. Mình cũng từng làm việc với các tính năng liên quan đến API, Firebase, local database và xử lý giao diện Android.`,
  coreFocus: [
    'Native Android Apps (Kotlin, MVVM, Room DB, Retrofit, Jetpack)',
    'Mobile Monetization (Google AdMob Ads, Mediation, In-App Purchase / IAP)',
    'Backend & Cloud Integration (RESTful API, Firebase Auth / Firestore / FCM)',
    'Modern Web Development (ReactJS, TypeScript, Tailwind CSS, Vite)',
  ]
};

export const quickStats: QuickStat[] = [
  {
    label: 'Projects Completed',
    value: '15+',
    subtitle: 'Android Apps & Web Applications',
    icon: 'FolderCheck',
  },
  {
    label: 'Technologies',
    value: '10+',
    subtitle: 'Kotlin, AdMob, IAP, Firebase, React...',
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
    title: 'Phát triển Native Android App & UI/UX',
    description: 'Nắm vững Kotlin, Android SDK, MVVM Architecture, Room Database, Retrofit API và tối ưu giao diện Android mượt mà.',
    technologies: ['Kotlin', 'Android SDK', 'MVVM', 'Room DB', 'Retrofit', 'UI Layouts'],
    highlight: 'Foundation & UI',
  },
  {
    year: '2025',
    title: 'Tích hợp Monetization (AdMob, IAP) & Firebase',
    description: 'Phát triển và duy trì các dự án ứng dụng Android thực tế theo mô hình thương mại: tích hợp quảng cáo AdMob (Banner, Interstitial, Native, App Open), In-App Purchases (IAP) và các dịch vụ Firebase.',
    technologies: ['Google AdMob', 'In-App Purchase (IAP)', 'Firebase', 'Local DB', 'REST APIs'],
    highlight: 'Monetization & Growth',
  },
  {
    year: '2026',
    title: 'Mở rộng sang Full-stack Web & Hệ sinh thái số',
    description: 'Xây dựng các sản phẩm web hiện đại với ReactJS, TypeScript, Tailwind CSS, Node.js API. Kết hợp thế mạnh Android di động và Web full-stack.',
    technologies: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    highlight: 'Full-Stack Evolution',
  },
];
