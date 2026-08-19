import type { GitHubUser, GitHubRepo } from '../types';

const MOCK_GITHUB_USER: GitHubUser = {
  username: 'namdev',
  name: 'Thành Nam',
  avatarUrl: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/773624360_1068814392313252_7712551865050304274_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0zFwx4KRl4lRnckftshCqU33CXXPV3UZTfcJdc9XdRmapPMaahtG8JOmvbVoVulG7R368Be7P0qXMHaI3rw4j&_nc_ohc=BOlJ95CwvqQQ7kNvwGhQOzq&_nc_oc=AdoL6Vm87k3prwKjh2PMbM1cUHl1U9CNwg0rRtYr2S2EBVs5RxSgu5zVe3QrhaxFZWs&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=xzHZtHSVTlpbr9LrrU2xXg&_nc_ss=7b2a8&oh=00_AQH_r5tIdfKe46CpbMg1WXOWlSxHN_AokKn2MOVtItvnpQ&oe=6A8B06E5',
  bio: 'Android Native & Web Developer | Kotlin, React, Node.js',
  publicRepos: 18,
  followers: 42,
  following: 15,
  totalStars: 128,
  topLanguages: [
    { name: 'Kotlin', percentage: 48, color: '#A97BFF' },
    { name: 'TypeScript', percentage: 32, color: '#3178C6' },
    { name: 'JavaScript', percentage: 12, color: '#F7DF1E' },
    { name: 'HTML/CSS', percentage: 8, color: '#E34F26' }
  ],
  recentRepos: [
    {
      name: 'IPTV-Player-Android',
      description: 'Native Android IPTV player built with Kotlin, MVVM, Room DB, and ExoPlayer for high quality stream rendering.',
      htmlUrl: 'https://github.com',
      stars: 64,
      forks: 18,
      language: 'Kotlin',
      updatedAt: '2 days ago'
    },
    {
      name: 'Kawaii-ScreenPet-App',
      description: 'Interactive desktop pet style Android app using WindowManager overlay and background services.',
      htmlUrl: 'https://github.com',
      stars: 42,
      forks: 9,
      language: 'Kotlin',
      updatedAt: '1 week ago'
    },
    {
      name: 'Spa-Booking-Platform',
      description: 'Modern spa reservation web app built with React, TypeScript, Tailwind CSS, Node.js, and MongoDB.',
      htmlUrl: 'https://github.com',
      stars: 22,
      forks: 5,
      language: 'TypeScript',
      updatedAt: '2 weeks ago'
    }
  ]
};

export const fetchGitHubProfile = async (username: string = 'namdev'): Promise<GitHubUser> => {
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    
    if (!userRes.ok) {
      console.warn(`GitHub API returned status ${userRes.status}. Using mock fallback data.`);
      return MOCK_GITHUB_USER;
    }

    const userData = await userRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });

    let recentRepos: GitHubRepo[] = MOCK_GITHUB_USER.recentRepos;

    if (reposRes.ok) {
      const reposData = await reposRes.json();
      if (Array.isArray(reposData)) {
        recentRepos = reposData.map((r: any) => ({
          name: r.name,
          description: r.description || 'No description provided.',
          htmlUrl: r.html_url,
          stars: r.stargazers_count || 0,
          forks: r.forks_count || 0,
          language: r.language || 'Code',
          updatedAt: new Date(r.updated_at).toLocaleDateString()
        }));
      }
    }

    const totalStars = recentRepos.reduce((acc, r) => acc + r.stars, 0);

    return {
      username: userData.login || username,
      name: userData.name || 'Nam',
      avatarUrl: userData.avatar_url || MOCK_GITHUB_USER.avatarUrl,
      bio: userData.bio || MOCK_GITHUB_USER.bio,
      publicRepos: userData.public_repos || MOCK_GITHUB_USER.publicRepos,
      followers: userData.followers || MOCK_GITHUB_USER.followers,
      following: userData.following || MOCK_GITHUB_USER.following,
      totalStars: totalStars > 0 ? totalStars : MOCK_GITHUB_USER.totalStars,
      topLanguages: MOCK_GITHUB_USER.topLanguages,
      recentRepos: recentRepos.length > 0 ? recentRepos : MOCK_GITHUB_USER.recentRepos
    };
  } catch (error) {
    console.warn('Network error fetching GitHub profile. Using mock fallback data.', error);
    return MOCK_GITHUB_USER;
  }
};
