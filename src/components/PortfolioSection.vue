<script setup>
import { ref, computed } from 'vue';

const projects = ref([
  {
    title: 'E-Commerce Dashboard',
    category: 'Web Application',
    image: 'https://source.unsplash.com/random/600x400/?dashboard,analytics',
    description: 'A modern dashboard for e-commerce platform with real-time analytics, order management, and inventory tracking features.',
    technologies: ['Vue.js', 'Element Plus', 'Chart.js', 'Firebase'],
    link: '#'
  },
  {
    title: 'Travel Explorer App',
    category: 'Mobile UI',
    image: 'https://source.unsplash.com/random/600x400/?travel,app,mobile',
    description: 'Interactive travel application with destination discovery, itinerary planning, and social sharing capabilities.',
    technologies: ['React Native', 'Redux', 'Google Maps API', 'Node.js'],
    link: '#'
  },
  {
    title: 'Finance Portfolio Tracker',
    category: 'Web Application',
    image: 'https://source.unsplash.com/random/600x400/?finance,chart,statistics',
    description: 'Advanced financial portfolio manager with investment tracking, performance analysis, and visualization tools.',
    technologies: ['Vue.js', 'TypeScript', 'D3.js', 'Express'],
    link: '#'
  },
  {
    title: 'Health & Fitness Platform',
    category: 'Web Design',
    image: 'https://source.unsplash.com/random/600x400/?fitness,health,workout',
    description: 'Comprehensive fitness tracking platform with workout plans, nutrition guidance, and progress monitoring.',
    technologies: ['React', 'Tailwind CSS', 'MongoDB', 'GraphQL'],
    link: '#'
  },
  {
    title: 'Creative Portfolio Site',
    category: 'Web Design',
    image: 'https://source.unsplash.com/random/600x400/?portfolio,creative,design',
    description: 'Stunning portfolio website for a creative agency featuring advanced animations and interactive elements.',
    technologies: ['Vue.js', 'GSAP', 'Three.js', 'Vite'],
    link: '#'
  },
  {
    title: 'Project Management Tool',
    category: 'Web Application',
    image: 'https://source.unsplash.com/random/600x400/?project,management,team',
    description: 'Collaborative project management platform with task tracking, team communication, and resource allocation.',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Element Plus'],
    link: '#'
  }
]);

const filters = ref(['All', 'Web Application', 'Web Design', 'Mobile UI']);
const activeFilter = ref('All');

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === activeFilter.value);
});

const selectedProject = ref(null);
const isModalVisible = ref(false);

const showProjectDetails = (project) => {
  selectedProject.value = project;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <h2 class="section-title">Our Portfolio</h2>

    <div class="filters">
      <el-radio-group v-model="activeFilter" size="large">
        <el-radio-button v-for="filter in filters" :key="filter" :label="filter" :value="filter">
          {{ filter }}
        </el-radio-button>
      </el-radio-group>
    </div>

    <div class="projects-grid">
      <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="project-card"
          @click="showProjectDetails(project)"
      >
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
          <div class="project-overlay">
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.category }}</p>
              <span class="view-project">View Project</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
        v-model="isModalVisible"
        width="70%"
        destroy-on-close
        custom-class="project-modal"
    >
      <div v-if="selectedProject" class="project-details">
        <div class="project-details-image">
          <img :src="selectedProject.image" :alt="selectedProject.title" />
        </div>
        <div class="project-details-content">
          <h3>{{ selectedProject.title }}</h3>
          <p class="project-details-category">{{ selectedProject.category }}</p>
          <p class="project-details-description">{{ selectedProject.description }}</p>

          <div class="project-details-technologies">
            <h4>Technologies</h4>
            <div class="tech-tags">
              <el-tag
                  v-for="(tech, techIndex) in selectedProject.technologies"
                  :key="techIndex"
                  class="tech-tag"
                  effect="dark"
              >
                {{ tech }}
              </el-tag>
            </div>
          </div>

          <div class="project-details-actions">
            <el-button type="primary" @click="window.open(selectedProject.link, '_blank')">
              View Live
            </el-button>
            <el-button @click="closeModal">Close</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </section>
</template>

<style scoped>
.portfolio-section {
  background-color: #1a1a1a;
}

.filters {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 250px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(66, 184, 131, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-info {
  text-align: center;
  color: white;
  padding: 1rem;
}

.project-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.project-info p {
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.view-project {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-project:hover {
  background-color: white;
  color: #42b883;
}

/* Project Modal Styles */
:deep(.project-modal) {
  background-color: #2a2a2a;
  border-radius: 8px;
}

.project-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-details-image {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.project-details-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-details-content h3 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.project-details-category {
  color: #42b883;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.project-details-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.project-details-technologies h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #fff;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: #35495e;
}

.project-details-actions {
  display: flex;
  gap: 1rem;
}

@media (min-width: 768px) {
  .project-details {
    flex-direction: row;
  }

  .project-details-image,
  .project-details-content {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .filters {
    overflow-x: auto;
    padding-bottom: 1rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  :deep(.project-modal) {
    width: 90% !important;
  }
}
</style>