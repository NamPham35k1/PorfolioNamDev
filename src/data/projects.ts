import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'appfood-ordering',
    title: 'AppFood — Ứng dụng Đặt đồ ăn & Giao hàng',
    subtitle: 'Đồ án ứng dụng di động đặt đồ ăn thông minh trên Android (Kotlin / Java & REST API)',
    description: 'Dự án Đồ án ứng dụng Android Native phục vụ nhu cầu đặt món ăn và giao hàng thực tế. Tích hợp tra cứu món ăn thông minh, tùy chọn toppings, giỏ hàng, đặt hàng trực tuyến, theo dõi trạng thái đơn hàng thời gian thực và quản lý địa chỉ giao hàng.',
    problem: 'Người dùng cần giải pháp đặt món ăn nhanh chóng, giao diện đơn giản, trực quan, hỗ trợ theo dõi tiến trình đơn hàng và lưu lịch sử giao dịch tiện lợi trên thiết bị di động.',
    solution: 'Phát triển ứng dụng Android AppFood với kiến trúc MVVM kết hợp Room Database lưu cache giỏ hàng offline, Retrofit API kết nối backend server, Firebase Realtime theo dõi đơn hàng và giao diện mượt mà.',
    features: [
      'Giao diện Android Native hiện đại (Kotlin/Java, Material Design UI, ViewBinding/Jetpack Compose)',
      'Danh mục món ăn phân loại theo cửa hàng, tìm kiếm từ khóa, gợi ý món hot & topping phong phú',
      'Giỏ hàng thông minh, tự động tính toán tổng tiền, chiết khấu và phí vận chuyển',
      'Theo dõi tiến trình đơn hàng thời gian thực (Đã đặt, Đang chuẩn bị, Đang giao, Đã hoàn thành)',
      'Lưu vết địa chỉ nhận hàng, lịch sử đơn hàng và đánh giá chất lượng món ăn',
      'Tích hợp RESTful API backend Node.js / Express & xác thực tài khoản Firebase Auth'
    ],
    techStack: ['Kotlin', 'Android SDK', 'MVVM', 'Room DB', 'Retrofit', 'Firebase', 'REST API', 'Material UI'],
    category: 'Android',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop'
    ],
    challenges: [
      'Tối ưu hóa giao diện danh mục món ăn mượt mà 60fps khi render danh sách dài.',
      'Đồng bộ hóa dữ liệu giỏ hàng local và trạng thái đơn hàng realtime qua API.'
    ],
    results: [
      'Đạt kết quả xuất sắc trong Đồ án chuyên ngành Công nghệ Thông tin tại Trường UTT.',
      'Hoạt động ổn định với thời gian phản hồi API và lưu giỏ hàng tức thì.'
    ],
    featured: true,
  },
  {
    id: 'iptv-player',
    title: 'IPTV Player',
    subtitle: 'High-performance Android IPTV media streaming application',
    description: 'A feature-packed native Android streaming app built with Kotlin and ExoPlayer, designed to parse M3U/M3U8 playlists with low latency and seamless channel rendering.',
    problem: 'Existing IPTV players often suffer from high buffering times, complex user interfaces, poor playlist organization, and lack of watch history sync across channel streams.',
    solution: 'Engineered a clean Android application leveraging ExoPlayer with custom HLS dynamic buffer sizing, Room local persistence for offline channel caching, and an intuitive TV-friendly UI.',
    features: [
      'High-speed M3U and M3U8 playlist parser with automatic category auto-grouping',
      'ExoPlayer hardware-accelerated video rendering with custom aspect ratio controls',
      'Favorites bookmarking and watch history tracking with local Room storage',
      'Smart AI channel recommendation based on user viewing preferences',
      'Picture-in-Picture (PiP) background playback mode support'
    ],
    techStack: ['Kotlin', 'MVVM', 'Room DB', 'Retrofit', 'ExoPlayer', 'MongoDB', 'Coroutines'],
    category: 'Android',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=1000&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop'
    ],
    challenges: [
      'Parsing massive M3U playlists exceeding 50,000 channel entries without blocking UI main thread.',
      'Handling stream disconnects dynamically and auto-reconnecting live stream feeds.'
    ],
    results: [
      'Achieved sub-second stream startup time for standard HLS live feeds.',
      'Smooth 60fps UI navigation through nested channel categories.'
    ],
    featured: true,
  },
  {
    id: 'kawaii-screenpet',
    title: 'Kawaii ScreenPet',
    subtitle: 'Desktop pet style Android application with floating overlay',
    description: 'An interactive Android application that brings animated desktop-style pets to user screens using system overlay services, custom animations, and interactive touch responses.',
    problem: 'Mobile users lack fun, interactive desktop companion applications that can run unobtrusively on top of other Android apps without slowing down system performance.',
    solution: 'Developed an Android Foreground Service using WindowManager overlay permissions, managing smooth sprite animations, state persistence, and low-memory background execution.',
    features: [
      'Interactive floating companion rendered on top of any active screen',
      'Custom pet animations (walking, sleeping, eating, playful reactions)',
      'Pet customization shop with skin selections and accessories',
      'Low CPU/RAM background service optimization for extended battery life',
      'Pet state management backed by Android Room database'
    ],
    techStack: ['Kotlin', 'Room DB', 'Android Service', 'WindowManager Overlay', 'Canvas API'],
    category: 'Android',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
    ],
    challenges: [
      'Managing Android overlay permission lifecycles across diverse OEM Android versions.',
      'Optimizing sprite sheet rendering to minimize GPU power consumption.'
    ],
    results: [
      'Maintained under 2% battery consumption per 24 hours of background execution.',
      'Delivered seamless touch event pass-through when interacting with underneath apps.'
    ],
    featured: true,
  },
  {
    id: 'spa-booking',
    title: 'Spa Booking Platform',
    subtitle: 'Modern service reservation web app with admin management',
    description: 'A full-stack spa & beauty salon booking web platform featuring real-time appointment calendar scheduling, customer management, service catalogs, and admin analytical dashboards.',
    problem: 'Traditional booking workflows rely on phone calls or manual spreadsheets, leading to double bookings and lost customer retention.',
    solution: 'Built a responsive React + Node.js application featuring an interactive visual calendar, dynamic time-slot reservation system, automated SMS/Email notifications, and MongoDB database storage.',
    features: [
      'Interactive appointment booking workflow with real-time time-slot selection',
      'Admin management dashboard for tracking bookings, staff schedules, and revenue',
      'Responsive design styled with Tailwind CSS for mobile and desktop clients',
      'Secure customer profile management and service history tracking',
      'REST API backend built with Express.js and MongoDB Mongoose models'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'Fullstack',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop'
    ],
    challenges: [
      'Preventing concurrent user race conditions during simultaneous time-slot reservation requests.',
      'Creating a fluid responsive calendar component that functions smoothly on mobile screens.'
    ],
    results: [
      'Reduced booking confirmation processing time to under 3 seconds.',
      'Achieved 100% responsive test score on modern mobile viewports.'
    ],
    featured: true,
  },
  {
    id: 'dev-saas-dashboard',
    title: 'DevPulse SaaS Analytics',
    subtitle: 'Real-time developer metrics and API monitoring dashboard',
    description: 'A sleek developer analytics product built with React, Chart.js, Tailwind CSS, and REST API integrations to track server health, request throughput, and database queries.',
    problem: 'Developers lack lightweight, visually appealing dashboards to monitor API health and microservice metrics without setting up bloated enterprise tools.',
    solution: 'Designed a minimal glassmorphic dashboard with live data widgets, dark theme aesthetics, fast state management, and real-time polling.',
    features: [
      'Live metric charts for HTTP response times, throughput, and error rates',
      'Dark mode SaaS layout with glassmorphism visual cards',
      'Customizable widget grid with Drag-and-Drop arrangement',
      'API key generator and endpoint security access controller'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'REST API', 'Vite'],
    category: 'Web',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    ],
    challenges: ['Optimizing chart rerenders while streaming live socket updates.'],
    results: ['Maintained consistent 60fps UI frame rate under heavy data updates.'],
    featured: false,
  },
  {
    id: 'rest-api-microservices',
    title: 'Scalable REST API Engine',
    subtitle: 'Production-ready Node.js & MongoDB backend infrastructure',
    description: 'A enterprise-grade starter template for RESTful microservices featuring JWT authentication, role-based access control, Rate limiting, MongoDB Mongoose schema validation, and Swagger docs.',
    problem: 'Starting new backend projects often involves setting up boilerplates, authentication, security headers, rate limiting, and error handlers repeatedly.',
    solution: 'Architected a modular Node.js + Express backend infrastructure with clean controller-service pattern, environment configuration, and automated API documentation.',
    features: [
      'JWT token authentication with refresh tokens and Redis caching layer',
      'Rate limiting, Helmet security headers, CORS origin controls',
      'Structured MongoDB schemas with automated validation and indexing',
      'Comprehensive error handling middleware and winston logging'
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'JWT'],
    category: 'Backend',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop'
    ],
    challenges: ['Designing scalable database schemas with low-latency indexing.'],
    results: ['Tested up to 5,000 requests/sec with minimal response degradation.'],
    featured: false,
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((p) => p.id === id);
};
