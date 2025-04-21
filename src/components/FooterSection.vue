<script setup>
import { ArrowUp } from '@element-plus/icons-vue';
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <h3>Symonov Bros</h3>
        <p>Crafting exceptional web experiences</p>
      </div>

      <div class="footer-links">
        <div class="footer-links-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
<!--            <li><a href="#portfolio">Portfolio</a></li>-->
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-links-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Frontend Design</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Responsive Websites</a></li>
            <li><a href="#">Performance Optimization</a></li>
          </ul>
        </div>

        <div class="footer-links-column">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Email Us</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Symonov Brothers. All rights reserved.</p>
      <p>
        <a href="#">Privacy Policy</a> |
        <a href="#">Terms of Service</a>
      </p>

      <div class="back-to-top">
        <a href="#hero" class="back-to-top-button">
          <el-icon><ArrowUp /></el-icon>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a1a1a;
  padding: 3rem 2rem 1rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  flex: 1 1 300px;
}

.footer-logo h3 {
  font-size: 1.8rem;
  color: #42b883;
  margin-bottom: 0.5rem;
}

.footer-logo p {
  color: rgba(255, 255, 255, 0.8);
}

.footer-links {
  flex: 2 1 600px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-links-column {
  flex: 1 1 150px;
}

.footer-links-column h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-links-column h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: #42b883;
}

.footer-links-column ul {
  list-style: none;
  padding: 0;
}

.footer-links-column li {
  margin-bottom: 0.8rem;
}

.footer-links-column a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links-column a:hover {
  color: #42b883;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1280px;
  margin: 1.5rem auto 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  position: relative;
}

.footer-bottom a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom a:hover {
  color: #42b883;
}

.back-to-top {
  position: absolute;
  bottom: 0;
  right: 20px;
}

.back-to-top-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #42b883;
  color: white !important;
  transition: transform 0.3s ease;
  text-decoration: none;
}

.back-to-top-button .arrow-up {
  font-size: 20px;
  font-weight: bold;
}

.back-to-top-button:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .back-to-top {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 1.5rem;
  }
}
</style>