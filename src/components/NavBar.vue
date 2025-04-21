<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const scrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="{ 'scrolled': scrolled }">
    <nav class="navbar">
      <div class="logo">
        <a href="#" @click="closeMenu">Symonov Bros</a>
      </div>

      <div class="menu-toggle" @click="toggleMenu">
        <div :class="['hamburger', { 'active': isMenuOpen }]">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul :class="['nav-links', { 'open': isMenuOpen }]">
        <li><a href="#hero" @click="closeMenu">Home</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#skills" @click="closeMenu">Skills</a></li>
<!--        <li><a href="#portfolio" @click="closeMenu">Portfolio</a></li>-->
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
}

header.scrolled {
  background-color: rgba(36, 36, 36, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.logo a {
  font-size: 1.8rem;
  font-weight: 700;
  color: #42b883;
  text-decoration: none;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #42b883;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #42b883;
}

.nav-links a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: #1e1e1e;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.5s ease;
    padding: 2rem;
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links li {
    margin: 1.5rem 0;
  }
}
</style>