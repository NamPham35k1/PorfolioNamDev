export type ProjectCategory = 'All' | 'Android' | 'Web' | 'Fullstack' | 'Backend';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  category: 'Android' | 'Web' | 'Fullstack' | 'Backend';
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  screenshots: string[];
  challenges: string[];
  results: string[];
  featured: boolean;
}

export type BlogCategory = 'All' | 'Android' | 'React' | 'Backend' | 'Database' | 'Dev Tips';

export interface CodeSnippet {
  language: string;
  filename?: string;
  code: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: Exclude<BlogCategory, 'All'>;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  coverImage: string;
  content: string;
  codeSnippets?: CodeSnippet[];
  tags: string[];
  relatedSlugs?: string[];
}

export type SkillGroup = 'Mobile' | 'Web' | 'Backend' | 'Tools';

export interface Skill {
  name: string;
  iconName: string;
  category: SkillGroup;
  level: number; // 0 to 100
  experience: string;
  description: string;
  tags?: string[];
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  description: string;
  features: string[];
  targetAudience: string;
  deliverables: string[];
  popularTag?: boolean;
}

export interface GitHubRepo {
  name: string;
  description: string;
  htmlUrl: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
}

export interface GitHubUser {
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  recentRepos: GitHubRepo[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export interface ContactFormPayload {
  name: string;
  email: string;
  projectType: 'Android App' | 'Web App' | 'Backend/API' | 'Bug Fix' | 'Other';
  budget: string;
  message: string;
}

export interface QuickStat {
  label: string;
  value: string;
  subtitle: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  technologies: string[];
  highlight?: string;
}
