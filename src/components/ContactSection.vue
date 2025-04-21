<script setup>
import { ref, reactive } from 'vue';
import { Location, Message, Phone } from '@element-plus/icons-vue';
import SocialIcon from './SocialIcon.vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const rules = {
  name: [{ required: true, message: 'Please enter your name', trigger: 'blur' }],
  email: [
    { required: true, message: 'Please enter your email', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email address', trigger: 'blur' }
  ],
  subject: [{ required: true, message: 'Please enter a subject', trigger: 'blur' }],
  message: [{ required: true, message: 'Please enter your message', trigger: 'blur' }]
};

const formRef = ref(null);
const isLoading = ref(false);
const isSubmitted = ref(false);

const submitForm = async () => {
  if (!formRef.value) return;

  await formRef.value.validate(async (valid) => {
    if (valid) {
      isLoading.value = true;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      isLoading.value = false;
      isSubmitted.value = true;

      // Reset form
      formRef.value.resetFields();

      // Reset submission status after 5 seconds
      setTimeout(() => {
        isSubmitted.value = false;
      }, 5000);
    }
  });
};
</script>

<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">Get In Touch</h2>

    <div class="contact-container">
      <div class="contact-info">
        <h3>Contact Information</h3>
        <p>We'd love to hear from you. Whether you have a question about our services, projects, or anything else, our team is ready to answer all your questions.</p>

        <div class="info-items">
          <div class="info-item">
            <div class="info-icon">
              <el-icon><Location /></el-icon>
            </div>
            <div class="info-content">
              <h4>Address</h4>
              <p>123 Web Developer St, Coding City, 12345</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <el-icon><Message /></el-icon>
            </div>
            <div class="info-content">
              <h4>Email</h4>
              <p>hello@symonovbros.com</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <el-icon><Phone /></el-icon>
            </div>
            <div class="info-content">
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

<!--        <div class="social-media">-->
<!--          <h4>Find Us On</h4>-->
<!--          <div class="social-icons">-->
<!--            <a href="#" class="social-icon" title="Facebook">-->
<!--              <SocialIcon network="facebook" :size="20" />-->
<!--            </a>-->
<!--            <a href="#" class="social-icon" title="LinkedIn">-->
<!--              <SocialIcon network="linkedin" :size="20" />-->
<!--            </a>-->
<!--            <a href="#" class="social-icon" title="Twitter">-->
<!--              <SocialIcon network="twitter" :size="20" />-->
<!--            </a>-->
<!--            <a href="#" class="social-icon" title="Instagram">-->
<!--              <SocialIcon network="instagram" :size="20" />-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
      </div>

      <div class="contact-form">
        <h3>Send Us A Message</h3>

        <el-form
            ref="formRef"
            :model="form"
            :rules="rules"
            label-position="top"
            class="form"
        >
          <el-form-item label="Name" prop="name">
            <el-input v-model="form.name" placeholder="Your name" />
          </el-form-item>

          <el-form-item label="Email" prop="email">
            <el-input v-model="form.email" placeholder="Your email" />
          </el-form-item>

          <el-form-item label="Subject" prop="subject">
            <el-input v-model="form.subject" placeholder="Subject" />
          </el-form-item>

          <el-form-item label="Message" prop="message">
            <el-input
                v-model="form.message"
                type="textarea"
                :rows="5"
                placeholder="Your message"
            />
          </el-form-item>

          <el-form-item>
            <el-button
                type="primary"
                @click="submitForm"
                :loading="isLoading"
                :disabled="isSubmitted"
                class="submit-button"
            >
              {{ isSubmitted ? 'Message Sent!' : 'Send Message' }}
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: #242424;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
}

.contact-info,
.contact-form {
  background-color: #2a2a2a;
  padding: 2rem;
  border-radius: 8px;
}

.contact-info h3,
.contact-form h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

.contact-info > p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
}

.info-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(66, 184, 131, 0.1);
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}

.icon-text {
  font-size: 1.2rem;
}

.info-content h4 {
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
  color: #fff;
}

.info-content p {
  color: rgba(255, 255, 255, 0.8);
}

.social-media h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #fff;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon .icon-text {
  font-size: 0.8rem;
  font-weight: bold;
}

.social-icon:hover {
  background-color: #42b883;
  transform: translateY(-3px);
}

.form {
  width: 100%;
}

.el-form-item {
  margin-bottom: 1.5rem;
}

:deep(.el-form-item__label) {
  color: white !important;
  font-weight: 500;
}

:deep(.el-input__wrapper) {
  background-color: #333;
}

:deep(.el-input__inner),
:deep(.el-textarea__inner) {
  background-color: #333;
  border: none;
  color: white;
}

.submit-button {
  width: 100%;
  font-weight: 500;
  height: 50px;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>