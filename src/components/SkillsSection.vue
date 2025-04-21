<script setup>
import { ref } from 'vue';
import { Lightning, Iphone, Setting } from '@element-plus/icons-vue';

const skills = ref([
  {
    category: 'Frontend Frameworks',
    items: [
      { name: 'Vue.js', level: 95, color: '#42b883' },
      { name: 'React', level: 90, color: '#61dafb' },
      { name: 'Angular', level: 75, color: '#dd0031' },
    ]
  },
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', level: 95, color: '#f7df1e' },
      { name: 'TypeScript', level: 85, color: '#3178c6' },
      { name: 'HTML5/CSS3', level: 90, color: '#e34f26' },
    ]
  },
  {
    category: 'CSS Frameworks',
    items: [
      { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
      { name: 'Element Plus', level: 85, color: '#409eff' },
      { name: 'SASS/SCSS', level: 85, color: '#cc6699' },
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Vite', level: 80, color: '#646cff' },
      { name: 'Webpack', level: 75, color: '#8dd6f9' },
      { name: 'Git/GitHub', level: 90, color: '#f05032' },
    ]
  }
]);

const activeTab = ref(0);
</script>

<template>
  <section id="skills" class="skills-section">
    <h2 class="section-title">Our Skills</h2>

    <div class="skills-container">
      <el-tabs v-model="activeTab" tab-position="left" class="skills-tabs">
        <el-tab-pane
            v-for="(category, index) in skills"
            :key="index"
            :label="category.category"
            :name="index"
        >
          <div class="skills-content">
            <h3>{{ category.category }}</h3>

            <div class="skill-bars">
              <div
                  v-for="(skill, skillIndex) in category.items"
                  :key="skillIndex"
                  class="skill-item"
              >
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>

                <div class="progress-container">
                  <div
                      class="progress-bar"
                      :style="{ width: `${skill.level}%`, backgroundColor: skill.color }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="skills-features">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8">
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><Lightning /></el-icon>
            </div>
            <h4>Fast Performance</h4>
            <p>Optimized code for lightning-fast loading times and smooth user experience</p>
          </div>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8">
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><Iphone /></el-icon>
            </div>
            <h4>Responsive Design</h4>
            <p>Flawless layouts across all devices, from desktop to mobile</p>
          </div>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8">
          <div class="feature-card">
            <div class="feature-icon">
              <el-icon><Setting /></el-icon>
            </div>
            <h4>Modern Technologies</h4>
            <p>Using the latest frameworks and tools for cutting-edge development</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background-color: #242424;
}

.skills-container {
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.skills-content {
  padding: 1rem;
}

.skills-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #42b883;
}

.skill-bars {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
}

.skill-percentage {
  color: #42b883;
}

.progress-container {
  width: 100%;
  height: 8px;
  background-color: #333;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 4px;
  transition: width 1.5s ease-in-out;
}

.skills-features {
  margin-top: 4rem;
}

.feature-card {
  background-color: #2a2a2a;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(66, 184, 131, 0.1);
  border-radius: 50%;
  color: #42b883;
  font-size: 1.5rem;
}

.feature-icon-text {
  font-size: 1.8rem;
}

.feature-card h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .skills-tabs {
    flex-direction: column;
  }

  .feature-card {
    margin-bottom: 1.5rem;
  }
}
</style>