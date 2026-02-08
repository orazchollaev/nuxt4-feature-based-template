<!-- app/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>MyApp</h3>
          <p>Built with Nuxt 4 & Feature-Based Architecture</p>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/todos">Todos</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Connect</h4>
          <div class="social-links">
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} MyApp. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.footer-section h4 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.footer-section p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-section a:hover {
  color: white;
  transform: translateX(5px);
  display: inline-block;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}
</style>
