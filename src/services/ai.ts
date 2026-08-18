import { developerConfig } from '../data/developer';
import { skillsData } from '../data/skills';

export interface AIResponse {
  answer: string;
  suggestions: string[];
}

export const getAIResponse = async (userQuery: string): Promise<AIResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const query = userQuery.toLowerCase().trim();

  // Project queries
  if (query.includes('iptv') || query.includes('stream') || query.includes('video')) {
    return {
      answer: `Nam developed **IPTV Player**, a native Android app built with Kotlin, MVVM architecture, Room DB, Retrofit, and ExoPlayer. It parses M3U/M3U8 playlists with low-latency HLS streaming, user favorites, and AI channel recommendations.`,
      suggestions: ['Tell me about Kawaii ScreenPet', 'What web apps has Nam built?', 'How to contact Nam?']
    };
  }

  if (query.includes('pet') || query.includes('kawaii') || query.includes('overlay') || query.includes('desktop')) {
    return {
      answer: `Nam built **Kawaii ScreenPet**, a desktop-pet style Android app. It uses Android Foreground Services and WindowManager overlays to display interactive animated pets on top of other mobile applications without slowing down device performance.`,
      suggestions: ['Show me IPTV Player details', 'What technologies does Nam know?', 'Can Nam build Android apps for me?']
    };
  }

  if (query.includes('spa') || query.includes('booking') || query.includes('calendar')) {
    return {
      answer: `Nam built **Spa Booking Platform**, a modern full-stack web reservation application using React, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB. It features interactive calendar booking, customer portals, and admin management dashboards.`,
      suggestions: ['What backend services does Nam build?', 'View Nam\'s projects', 'How much does web development cost?']
    };
  }

  // Skills & Tech Stack
  if (query.includes('skill') || query.includes('tech') || query.includes('kotlin') || query.includes('react') || query.includes('stack')) {
    const mobileSkills = skillsData.filter(s => s.category === 'Mobile').map(s => s.name).join(', ');
    const webSkills = skillsData.filter(s => s.category === 'Web').map(s => s.name).join(', ');
    const backendSkills = skillsData.filter(s => s.category === 'Backend').map(s => s.name).join(', ');

    return {
      answer: `Nam specializes in both Mobile and Web tech stacks:\n- **Mobile**: ${mobileSkills}\n- **Web**: ${webSkills}\n- **Backend**: ${backendSkills}\n- **Tools**: Git, GitHub, Android Studio, VS Code, Postman.`,
      suggestions: ['Tell me about Nam\'s experience', 'What services can Nam build?', 'Let\'s start a project!']
    };
  }

  // Services & Freelance
  if (query.includes('build') || query.includes('service') || query.includes('hire') || query.includes('freelance') || query.includes('price')) {
    return {
      answer: `Nam offers 3 main freelance services:\n1. **Android App Development**: Native Kotlin apps, ExoPlayer streaming, offline Room DB, Firebase, and overlay services.\n2. **Web Development**: Modern React + TypeScript websites, SaaS dashboards, booking portals, and responsive interfaces.\n3. **Backend Development**: Scalable Node.js + Express REST APIs, MongoDB schema design, and JWT auth.`,
      suggestions: ['How to contact Nam?', 'View Featured Projects', 'What is Nam\'s availability?']
    };
  }

  // Experience & Bio
  if (query.includes('experience') || query.includes('who') || query.includes('about') || query.includes('nam')) {
    return {
      answer: `Hi! Nam is an **Android & Full-stack Web Developer** with 2+ years of hands-on experience building real-world native mobile applications and web products. He started in 2024 with Kotlin & Android SDK, expanded in 2025 into media streaming & overlay services, and grew in 2026 into React, TypeScript, and Node.js full-stack development.`,
      suggestions: ['What tech stack does Nam use?', 'Show projects', 'Ask for a quote']
    };
  }

  // Contact
  if (query.includes('contact') || query.includes('email') || query.includes('reach') || query.includes('hire')) {
    return {
      answer: `You can reach out to Nam directly through the **Contact page** on this website or email directly at **${developerConfig.email}**. Nam is currently **${developerConfig.status}**!`,
      suggestions: ['Go to Contact Page', 'What services does Nam offer?', 'What projects has Nam done?']
    };
  }

  // Generic context response
  return {
    answer: `Nam is an Android & Full-stack Web Developer specializing in Kotlin native mobile apps, React web applications, and Node.js/Express REST backends. Feel free to ask about his projects (IPTV Player, Kawaii ScreenPet, Spa Booking), technical skills, or freelance service packages!`,
    suggestions: [
      'What can Nam build for me?',
      'Tell me about IPTV Player project',
      'What is Nam\'s tech stack?',
      'Is Nam available for freelance?'
    ]
  };
};
