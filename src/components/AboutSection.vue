<script setup>
import { ref } from 'vue';
import SocialIcon from './SocialIcon.vue';

const brothers = ref([
  {
    name: 'Serhii Symonov',
    role: 'Frontend Developer',
    bio: 'Passionate about creating intuitive and engaging user interfaces with modern JavaScript frameworks. Specializes in Vue.js, React, and building seamless responsive designs. Always exploring new web technologies and best practices.',
    skills: ['Vue.js', 'React', 'JavaScript', 'CSS3/SASS', 'UI/UX Design'],
    social: {
      github: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Dmytro Symonov',
    role: 'Frontend Engineer',
    bio: 'Expert in crafting pixel-perfect, accessible web applications with a focus on performance optimization. Loves working with dynamic animations and interactive experiences. Committed to clean code principles and component-based architecture.',
    skills: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Animation', 'Performance'],
    social: {
      github: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
]);
</script>

<template>
  <section id="about" class="about-section">
    <h2 class="section-title">About Us</h2>

    <div class="brothers-container">
      <el-card v-for="(brother, index) in brothers" :key="index" class="brother-card" shadow="hover">
        <div class="brother-content">
          <div class="photo-container">
            <img :src="index === 0 ?
              '/images/ssymonov.jpg' :
              '/images/dsymonov.jpg'"
                 :alt="`${brother.name} profile`" class="profile-photo" />
          </div>

          <div class="info-container">
            <h3 class="brother-name">{{ brother.name }}</h3>
            <p class="brother-role">{{ brother.role }}</p>

            <p class="brother-bio">{{ brother.bio }}</p>

            <div class="skills-container">
              <el-tag v-for="(skill, skillIndex) in brother.skills"
                      :key="skillIndex"
                      class="skill-tag"
                      effect="dark">
                {{ skill }}
              </el-tag>
            </div>

            <div class="social-links">
              <a :href="brother.social.github" target="_blank" class="social-link" title="GitHub">
                <SocialIcon network="github" :size="18" />
              </a>
              <a :href="brother.social.twitter" target="_blank" class="social-link" title="Twitter">
                <SocialIcon network="twitter" :size="18" />
              </a>
              <a :href="brother.social.linkedin" target="_blank" class="social-link" title="LinkedIn">
                <SocialIcon network="linkedin" :size="18" />
              </a>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: #1a1a1a;
}

.brothers-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.brother-card {
  background-color: #2a2a2a;
  border: none;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.brother-card:hover {
  transform: translateY(-5px);
}

.brother-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 4px solid #42b883;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-container {
  text-align: center;
}

.brother-name {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.brother-role {
  font-size: 1.2rem;
  color: #42b883;
  margin-bottom: 1rem;
}

.brother-bio {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.skill-tag {
  background-color: #35495e;
  color: white;
  margin: 0;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #333;
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link .icon {
  font-size: 14px;
  font-weight: bold;
}

.social-link:hover {
  background-color: #42b883;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .brothers-container {
    grid-template-columns: 1fr;
  }
}
</style>