<!-- app/pages/index.vue -->
<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Welcome to <span class="gradient-text">MyApp</span>
        </h1>
        <p class="hero-subtitle">
          A modern Nuxt 4 application with feature-based architecture
        </p>
        <div class="hero-actions">
          <NuxtLink to="/todos" class="btn btn-primary"> Get Started </NuxtLink>
          <a href="#features" class="btn btn-secondary"> Learn More </a>
        </div>
      </div>
    </section>

    <section id="features" class="features">
      <h2 class="section-title">Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Fast & Modern</h3>
          <p>Built with Nuxt 4 for blazing fast performance</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>Feature-Based</h3>
          <p>Organized architecture for better scalability</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">💎</div>
          <h3>TypeScript</h3>
          <p>Full type safety for robust development</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2>Ready to build something amazing?</h2>
      <p>Start managing your todos and explore the features</p>
      <NuxtLink to="/todos" class="btn btn-large"> Go to Todos → </NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  padding: 0;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 1rem;
  margin-bottom: 4rem;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(to right, #ffd89b, #19547b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
}

/* Features Section */
.features {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #2d3748;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.feature-card p {
  color: #718096;
  line-height: 1.6;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 10px 40px rgba(245, 87, 108, 0.3);
}

.cta h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta .btn {
  background: white;
  color: #f5576c;
}

.cta .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>
