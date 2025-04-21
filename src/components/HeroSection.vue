<script setup>
import { ref, onMounted } from 'vue';

const titles = ref(['Frontend Developers', 'UI/UX Enthusiasts', 'Web Craftsmen']);
const currentTitleIndex = ref(0);
const currentTitle = ref(titles.value[0]);
const isAnimating = ref(false);

const cycleTitle = () => {
  isAnimating.value = true;
  setTimeout(() => {
    currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.value.length;
    currentTitle.value = titles.value[currentTitleIndex.value];
    isAnimating.value = false;
  }, 500);
};

onMounted(() => {
  setInterval(cycleTitle, 3000);
});
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-content">
      <h1>Symonov Brothers</h1>
      <div class="title-wrapper">
        <h2 :class="{ 'fade-out': isAnimating }">{{ currentTitle }}</h2>
      </div>
      <p>Transforming ideas into exceptional digital experiences</p>
      <div class="hero-buttons">
        <el-button type="primary" size="large" @click="$event => window.location.href='#portfolio'">
          View Our Work
        </el-button>
        <el-button size="large" @click="$event => window.location.href='#contact'">
          Get In Touch
        </el-button>
      </div>
    </div>

    <div class="hero-background">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0;
  max-width: 100%;
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
}

.hero-content {
  max-width: 800px;
  text-align: center;
  z-index: 2;
  padding: 2rem;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-wrapper {
  height: 3rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content h2 {
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
  transition: opacity 0.5s ease;
}

.hero-content h2.fade-out {
  opacity: 0;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.shape {
  position: absolute;
  background: rgba(66, 184, 131, 0.1);
  border-radius: 50%;
  filter: blur(30px);
  animation: float 15s infinite;
}

.shape-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
  background: rgba(53, 73, 94, 0.1);
  animation-delay: -2s;
}

.shape-3 {
  width: 200px;
  height: 200px;
  top: 30%;
  left: 20%;
  animation-delay: -4s;
}

.shape-4 {
  width: 250px;
  height: 250px;
  bottom: 20%;
  right: 15%;
  background: rgba(53, 73, 94, 0.1);
  animation-delay: -6s;
}

.shape-5 {
  width: 180px;
  height: 180px;
  top: 40%;
  right: 35%;
  animation-delay: -8s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-20px, 20px);
  }
  50% {
    transform: translate(10px, -15px);
  }
  75% {
    transform: translate(-15px, -10px);
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 3rem;
  }

  .hero-content h2 {
    font-size: 1.8rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>