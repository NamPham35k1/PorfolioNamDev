import type { QuickStat, TimelineEvent } from '../types';

export const developerConfig = {
  name: 'Thành Nam',
  fullName: 'Phạm Thành Nam',
  dob: '15/10/2004',
  hometown: 'Ninh Bình',
  university: 'Trường Đại học Công nghệ Giao thông Vận tải (UTT)',
  major: 'Công nghệ thông tin (CNTT)',
  currentRole: 'Developer tại công ty công nghệ',
  experienceYears: 'Gần 1 năm kinh nghiệm',
  title: 'Android & Web Developer',
  tagline: 'Phát triển & maintain ứng dụng Android thực tế, tối ưu hóa Monetization (AdMob, IAP), Firebase & Full-stack Web.',
  status: 'Available for freelance',
  location: 'Chùa Láng, Hà Nội, Việt Nam',
  address: '112 P. Chùa Láng, Láng, Hà Nội, Việt Nam',
  coordinates: { lat: 21.023478897890854, lng: 105.80270560295986 },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=21.023478897890854,105.80270560295986',
  mapEmbedUrl: 'https://maps.google.com/maps?q=21.023478897890854,105.80270560295986&hl=vi&z=16&output=embed',
  avatarUrl: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/773624360_1068814392313252_7712551865050304274_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0zFwx4KRl4lRnckftshCqU33CXXPV3UZTfcJdc9XdRmapPMaahtG8JOmvbVoVulG7R368Be7P0qXMHaI3rw4j&_nc_ohc=BOlJ95CwvqQQ7kNvwGhQOzq&_nc_oc=AdoL6Vm87k3prwKjh2PMbM1cUHl1U9CNwg0rRtYr2S2EBVs5RxSgu5zVe3QrhaxFZWs&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=xzHZtHSVTlpbr9LrrU2xXg&_nc_ss=7b2a8&oh=00_AQH_r5tIdfKe46CpbMg1WXOWlSxHN_AokKn2MOVtItvnpQ&oe=6A8B06E5',
  email: 'thanhnamnb1004@gmail.com',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://www.linkedin.com/in/nam-ph%E1%BA%A1m-9961a7295/',
  facebookUrl: 'https://www.facebook.com/pham.thanh.nam.39218?locale=vi_VN',
  bio: `Mình tên là Phạm Thành Nam (sinh ngày 15/10/2004), quê ở Ninh Bình, hiện đang là sinh viên ngành Công nghệ Thông tin tại Trường Đại học Công nghệ Giao thông Vận tải (UTT) và làm Developer tại công ty công nghệ với gần 1 năm kinh nghiệm thực tế. Mình chuyên phát triển và maintain các ứng dụng Android thực tế, đặc biệt là các dự án theo mô hình monetization như AdMob, quảng cáo trong ứng dụng và các ứng dụng có tích hợp IAP, cùng với REST API, Firebase và xử lý giao diện Android.`,
  coreFocus: [
    'Native Android Apps (Kotlin, MVVM, Room DB, Retrofit, Jetpack)',
    'Mobile Monetization (Google AdMob Ads, Mediation, In-App Purchase / IAP)',
    'Backend & Cloud Integration (RESTful API, Firebase Auth / Firestore / FCM)',
    'Modern Web Development (ReactJS, TypeScript, Tailwind CSS, Vite)',
  ],
  achievements: [
    '🏆 Vô địch giải bóng đá Khoa Công nghệ Thông tin (CNTT)',
    '🥈 Á quân (Nhì) giải bóng đá Trường Đại học Công nghệ Giao thông Vận tải (UTT)',
  ],
  hobbies: ['Đam mê bóng đá', 'Thể thao', 'Lập trình ứng dụng', 'Công nghệ'],
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
