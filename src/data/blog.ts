import type { BlogPost } from '../types';

export const blogPostsData: BlogPost[] = [
  {
    slug: 'how-i-structure-a-kotlin-android-project',
    title: 'How I Structure a Production-Ready Kotlin Android Project',
    description: 'A comprehensive guide on clean architecture, MVVM pattern, Dependency Injection with Hilt, Room database layer, and Coroutines Flow management in modern Android apps.',
    category: 'Android',
    date: 'February 12, 2026',
    readTime: '6 min read',
    author: {
      name: 'Thành Nam',
      avatar: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/773624360_1068814392313252_7712551865050304274_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0zFwx4KRl4lRnckftshCqU33CXXPV3UZTfcJdc9XdRmapPMaahtG8JOmvbVoVulG7R368Be7P0qXMHaI3rw4j&_nc_ohc=BOlJ95CwvqQQ7kNvwGhQOzq&_nc_oc=AdoL6Vm87k3prwKjh2PMbM1cUHl1U9CNwg0rRtYr2S2EBVs5RxSgu5zVe3QrhaxFZWs&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=xzHZtHSVTlpbr9LrrU2xXg&_nc_ss=7b2a8&oh=00_AQH_r5tIdfKe46CpbMg1WXOWlSxHN_AokKn2MOVtItvnpQ&oe=6A8B06E5',
      role: 'Android & Web Developer',
    },
    coverImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1000&auto=format&fit=crop',
    tags: ['Android', 'Kotlin', 'MVVM', 'Clean Architecture', 'Room'],
    content: `
Building scalable Android applications requires a clean separation of concerns. In this article, I share the project structure I use for native Android development with Kotlin.

### Key Layers in Clean Architecture
1. **Domain Layer**: Contains Business Logic, UseCases, and Entities.
2. **Data Layer**: Repositories, Room DAO, Retrofit APIs, and Data Mappers.
3. **UI Layer**: ViewModels, Composables / XML Views, and UI State classes.

### ViewModel & Coroutine Scope Pattern
Always scope asynchronous operations to \`viewModelScope\` and expose read-only \`StateFlow\` to the view layer:
    `,
    codeSnippets: [
      {
        language: 'kotlin',
        filename: 'MainViewModel.kt',
        code: `package com.nam.dev.ui.main

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

sealed interface UiState<out T> {
    object Loading : UiState<Nothing>
    data class Success<T>(const val data: T) : UiState<T>
    data class Error(val message: String) : UiState<Nothing>
}

class MainViewModel(
    private val getChannelsUseCase: GetChannelsUseCase
) : ViewModel() {

    private val _uiState = MutableStateFlow<UiState<List<Channel>>>(UiState.Loading)
    val uiState: StateFlow<UiState<List<Channel>>> = _uiState.asStateFlow()

    fun loadChannels() {
        viewModelScope.launch {
            _uiState.value = UiState.Loading
            try {
                val channels = getChannelsUseCase()
                _uiState.value = UiState.Success(channels)
            } catch (e: Exception) {
                _uiState.value = UiState.Error(e.localizedMessage ?: "Unknown error")
            }
        }
    }
}`
      }
    ],
    relatedSlugs: ['building-iptv-player-with-exoplayer', 'common-android-gradle-errors']
  },
  {
    slug: 'building-rest-apis-with-nodejs',
    title: 'Building Scalable REST APIs with Node.js, Express, and MongoDB',
    description: 'Learn how to construct robust, enterprise-grade backend services with JWT authentication, custom middleware, MongoDB Mongoose models, and rate limiting.',
    category: 'Backend',
    date: 'January 28, 2026',
    readTime: '8 min read',
    author: {
      name: 'Thành Nam',
      avatar: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/773624360_1068814392313252_7712551865050304274_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0zFwx4KRl4lRnckftshCqU33CXXPV3UZTfcJdc9XdRmapPMaahtG8JOmvbVoVulG7R368Be7P0qXMHaI3rw4j&_nc_ohc=BOlJ95CwvqQQ7kNvwGhQOzq&_nc_oc=AdoL6Vm87k3prwKjh2PMbM1cUHl1U9CNwg0rRtYr2S2EBVs5RxSgu5zVe3QrhaxFZWs&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=xzHZtHSVTlpbr9LrrU2xXg&_nc_ss=7b2a8&oh=00_AQH_r5tIdfKe46CpbMg1WXOWlSxHN_AokKn2MOVtItvnpQ&oe=6A8B06E5',
      role: 'Android & Web Developer',
    },
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API', 'Backend'],
    content: `
A clean backend architecture ensures easy maintenance and seamless database integration. Here is the controller-service pattern used in Node.js services.

### Controller-Service Pattern
Separating route handlers from database access keeps your Express app clean and testable.
    `,
    codeSnippets: [
      {
        language: 'javascript',
        filename: 'controllers/projectController.js',
        code: `const projectService = require('../services/projectService');

exports.getProjects = async (req, res, next) => {
  try {
    const { category, limit = 10 } = req.query;
    const projects = await projectService.fetchProjects({ category, limit });
    
    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error);
  }
};`
      }
    ],
    relatedSlugs: ['react-mongodb-crud-architecture']
  },
  {
    slug: 'react-mongodb-crud-architecture',
    title: 'React + MongoDB CRUD Application Architecture',
    description: 'Connecting ReactJS client components to Express & MongoDB backend using TanStack Query, Axios interceptors, and TypeScript interfaces.',
    category: 'React',
    date: 'January 15, 2026',
    readTime: '5 min read',
    author: {
      name: 'Thành Nam',
      avatar: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/773624360_1068814392313252_7712551865050304274_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0zFwx4KRl4lRnckftshCqU33CXXPV3UZTfcJdc9XdRmapPMaahtG8JOmvbVoVulG7R368Be7P0qXMHaI3rw4j&_nc_ohc=BOlJ95CwvqQQ7kNvwGhQOzq&_nc_oc=AdoL6Vm87k3prwKjh2PMbM1cUHl1U9CNwg0rRtYr2S2EBVs5RxSgu5zVe3QrhaxFZWs&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=xzHZtHSVTlpbr9LrrU2xXg&_nc_ss=7b2a8&oh=00_AQH_r5tIdfKe46CpbMg1WXOWlSxHN_AokKn2MOVtItvnpQ&oe=6A8B06E5',
      role: 'Android & Web Developer',
    },
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'MongoDB', 'TanStack Query', 'Axios'],
    content: `
Managing client-side server state in React apps becomes effortless with TanStack Query. It handles caching, background fetching, and optimistic updates automatically.
    `,
    codeSnippets: [
      {
        language: 'typescript',
        filename: 'hooks/useProjects.ts',
        code: `import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Project } from '../types';

const fetchProjects = async (): Promise<Project[]> => {
  const { data } = await axios.get('/api/v1/projects');
  return data.data;
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
};`
      }
    ],
    relatedSlugs: ['building-rest-apis-with-nodejs']
  },
  {
    slug: 'building-iptv-player-with-exoplayer',
    title: 'Building an IPTV Player with ExoPlayer in Kotlin',
    description: 'Step-by-step implementation of M3U/M3U8 playlist parsing, HLS live stream playback, and custom buffer configuration using ExoPlayer in Android.',
    category: 'Android',
    date: 'January 05, 2026',
    readTime: '9 min read',
    author: {
      name: 'Thành Nam',
      avatar: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/773624360_1068814392313252_7712551865050304274_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0zFwx4KRl4lRnckftshCqU33CXXPV3UZTfcJdc9XdRmapPMaahtG8JOmvbVoVulG7R368Be7P0qXMHaI3rw4j&_nc_ohc=BOlJ95CwvqQQ7kNvwGhQOzq&_nc_oc=AdoL6Vm87k3prwKjh2PMbM1cUHl1U9CNwg0rRtYr2S2EBVs5RxSgu5zVe3QrhaxFZWs&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=xzHZtHSVTlpbr9LrrU2xXg&_nc_ss=7b2a8&oh=00_AQH_r5tIdfKe46CpbMg1WXOWlSxHN_AokKn2MOVtItvnpQ&oe=6A8B06E5',
      role: 'Android & Web Developer',
    },
    coverImage: 'https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=1000&auto=format&fit=crop',
    tags: ['Android', 'Kotlin', 'ExoPlayer', 'IPTV', 'Media'],
    content: `
Media streaming on Android requires proper lifecycle handling and custom load control for low latency HLS playback.
    `,
    codeSnippets: [
      {
        language: 'kotlin',
        filename: 'ExoPlayerHelper.kt',
        code: `package com.nam.dev.media

import android.content.Context
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.ExoPlayer

class IPTVPlayerManager(private val context: Context) {

    private var exoPlayer: ExoPlayer? = null

    fun initializePlayer(streamUrl: String): ExoPlayer {
        val player = ExoPlayer.Builder(context).build().apply {
            val mediaItem = MediaItem.fromUri(streamUrl)
            setMediaItem(mediaItem)
            prepare()
            playWhenReady = true
        }
        exoPlayer = player
        return player
    }

    fun release() {
        exoPlayer?.release()
        exoPlayer = null
    }
}`
      }
    ],
    relatedSlugs: ['how-i-structure-a-kotlin-android-project']
  },
  {
    slug: 'common-android-gradle-errors',
    title: 'Common Android Gradle Errors and How to Solve Them Fast',
    description: 'Fix JVM target mismatches, KSP vs KAP dependency conflicts, duplicate class definitions, and build cache corruption issues easily.',
    category: 'Dev Tips',
    date: 'December 20, 2025',
    readTime: '4 min read',
    author: {
      name: 'Thành Nam',
      avatar: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/773624360_1068814392313252_7712551865050304274_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0zFwx4KRl4lRnckftshCqU33CXXPV3UZTfcJdc9XdRmapPMaahtG8JOmvbVoVulG7R368Be7P0qXMHaI3rw4j&_nc_ohc=BOlJ95CwvqQQ7kNvwGhQOzq&_nc_oc=AdoL6Vm87k3prwKjh2PMbM1cUHl1U9CNwg0rRtYr2S2EBVs5RxSgu5zVe3QrhaxFZWs&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&_nc_gid=xzHZtHSVTlpbr9LrrU2xXg&_nc_ss=7b2a8&oh=00_AQH_r5tIdfKe46CpbMg1WXOWlSxHN_AokKn2MOVtItvnpQ&oe=6A8B06E5',
      role: 'Android & Web Developer',
    },
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
    tags: ['Android', 'Gradle', 'Kotlin', 'Build Errors', 'Dev Tips'],
    content: `
Gradle errors can halt mobile development workflows. Here are quick fixes for common issues faced during Android SDK updates.
    `,
    codeSnippets: [
      {
        language: 'groovy',
        filename: 'build.gradle.kts',
        code: `// Fix JVM Target mismatch in Kotlin Android projects
android {
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
}`
      }
    ],
    relatedSlugs: ['how-i-structure-a-kotlin-android-project']
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPostsData.find((b) => b.slug === slug);
};
