import type { Skill } from '../types';

export const skillsData: Skill[] = [
  // Mobile
  {
    name: 'Kotlin',
    iconName: 'Smartphone',
    category: 'Mobile',
    level: 92,
    experience: '2+ Years',
    description: 'Native Android language with Coroutines, Flow, Extension Functions & OOP.',
    tags: ['Android', 'Core', 'Modern']
  },
  {
    name: 'Android SDK',
    iconName: 'Smartphone',
    category: 'Mobile',
    level: 90,
    experience: '2+ Years',
    description: 'Services, Broadcast Receivers, WindowManager, Permissions & Lifecycle management.',
    tags: ['Native', 'Core']
  },
  {
    name: 'MVVM Architecture',
    iconName: 'Layers',
    category: 'Mobile',
    level: 95,
    experience: '2+ Years',
    description: 'Clean Architecture with ViewModels, LiveData/StateFlow, Repository Pattern.',
    tags: ['Architecture', 'Best Practices']
  },
  {
    name: 'Room Database',
    iconName: 'Database',
    category: 'Mobile',
    level: 88,
    experience: '2+ Years',
    description: 'Local ORM data persistence, migrations, DAO queries & Flow indexing.',
    tags: ['Database', 'Offline First']
  },
  {
    name: 'ExoPlayer / Media3',
    iconName: 'PlayCircle',
    category: 'Mobile',
    level: 85,
    experience: '1.5+ Years',
    description: 'HLS live stream playback, M3U playlist parsing, custom load control & dynamic buffering.',
    tags: ['Streaming', 'Video']
  },
  {
    name: 'Retrofit & OkHttp',
    iconName: 'Network',
    category: 'Mobile',
    level: 90,
    experience: '2+ Years',
    description: 'Type-safe HTTP client, interceptors, authentication headers & JSON serializing.',
    tags: ['Networking', 'APIs']
  },
  {
    name: 'Google AdMob & Ads',
    iconName: 'Sparkles',
    category: 'Mobile',
    level: 92,
    experience: '2+ Years',
    description: 'App Monetization, Banner, Interstitial, Native & App Open Ads integration & Mediation.',
    tags: ['Monetization', 'AdMob', 'Ads']
  },
  {
    name: 'In-App Purchases (IAP)',
    iconName: 'DollarSign',
    category: 'Mobile',
    level: 88,
    experience: '1.5+ Years',
    description: 'Google Play Billing API, subscriptions, one-time purchases & receipt verification.',
    tags: ['Monetization', 'IAP', 'Billing']
  },

  // Web
  {
    name: 'ReactJS',
    iconName: 'Code',
    category: 'Web',
    level: 88,
    experience: '1+ Year',
    description: 'Component architecture, Hooks, Custom State, React Router & SPA performance.',
    tags: ['Frontend', 'UI']
  },
  {
    name: 'TypeScript',
    iconName: 'FileCode',
    category: 'Web',
    level: 85,
    experience: '1+ Year',
    description: 'Strict type checking, Interfaces, Generics, Type utilities & clean code.',
    tags: ['Language', 'Safety']
  },
  {
    name: 'Tailwind CSS',
    iconName: 'Palette',
    category: 'Web',
    level: 92,
    experience: '1+ Year',
    description: 'Glassmorphism, custom responsive theme extensions, dark mode & animations.',
    tags: ['Styling', 'Modern']
  },
  {
    name: 'JavaScript (ES6+)',
    iconName: 'Terminal',
    category: 'Web',
    level: 90,
    experience: '2+ Years',
    description: 'Async/Await, Promises, Closures, DOM API & ES Modules.',
    tags: ['Core', 'Language']
  },
  {
    name: 'Vite & Frontend Tools',
    iconName: 'Zap',
    category: 'Web',
    level: 85,
    experience: '1+ Year',
    description: 'HMR bundler configuration, environment variables, build chunking.',
    tags: ['Build', 'Performance']
  },

  // Backend
  {
    name: 'Node.js',
    iconName: 'Server',
    category: 'Web',
    level: 82,
    experience: '1+ Year',
    description: 'Event loop architecture, Async file systems, NPM package ecosystem.',
    tags: ['Runtime', 'Backend']
  },
  {
    name: 'Express.js',
    iconName: 'Server',
    category: 'Backend',
    level: 85,
    experience: '1+ Year',
    description: 'RESTful API routing, middleware pipelines, error handling & JWT security.',
    tags: ['Framework', 'APIs']
  },
  {
    name: 'MongoDB & Mongoose',
    iconName: 'Database',
    category: 'Backend',
    level: 80,
    experience: '1+ Year',
    description: 'NoSQL collections, schema modeling, aggregation pipelines & indexing.',
    tags: ['Database', 'NoSQL']
  },
  {
    name: 'RESTful APIs',
    iconName: 'Globe',
    category: 'Backend',
    level: 90,
    experience: '2+ Years',
    description: 'API endpoint design, status codes, payload formatting, CORS & Rate limiting.',
    tags: ['Architecture', 'Standards']
  },
  {
    name: 'Firebase',
    iconName: 'Flame',
    category: 'Backend',
    level: 85,
    experience: '1.5+ Years',
    description: 'Firestore DB, Authentication, Cloud Messaging (FCM) & Crashlytics.',
    tags: ['BaaS', 'Cloud']
  },

  // Tools
  {
    name: 'Git & GitHub',
    iconName: 'GitBranch',
    category: 'Tools',
    level: 92,
    experience: '2+ Years',
    description: 'Branching workflows, Pull Requests, Merge conflict resolution & GitHub Actions.',
    tags: ['VCS', 'Collaboration']
  },
  {
    name: 'Android Studio',
    iconName: 'Cpu',
    category: 'Tools',
    level: 95,
    experience: '2+ Years',
    description: 'Profiling CPU/Memory, Layout Inspector, Gradle Sync & Emulator management.',
    tags: ['IDE', 'Android']
  },
  {
    name: 'VS Code',
    iconName: 'Monitor',
    category: 'Tools',
    level: 95,
    experience: '2+ Years',
    description: 'Extensions, debugging, multi-cursor editing & workspace configuration.',
    tags: ['IDE', 'Web']
  },
  {
    name: 'Postman / Insomnia',
    iconName: 'Send',
    category: 'Tools',
    level: 90,
    experience: '2+ Years',
    description: 'API testing collections, environment variables & response inspection.',
    tags: ['Testing', 'APIs']
  }
];
