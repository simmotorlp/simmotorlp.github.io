<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
<!--      <PortfolioSection />-->
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  width: 100%;
}

main {
  max-width: 100%;
  margin: 0 auto;
}

section {
  padding: 4rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

h2.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
}

h2.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #42b883, #35495e);
  border-radius: 2px;
}

@media (max-width: 768px) {
  section {
    padding: 3rem 1.5rem;
  }

  h2.section-title {
    font-size: 2rem;
  }
}
</style>