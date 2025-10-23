<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">MySite</div>
      <div class="menu-toggle" @click="toggleMenu">
        ☰
      </div>
      <ul :class="['nav-links', { open: isOpen }]">
        <li><router-link to="/">Home</router-link></li>
        <li><a href="#">Deals</a></li>
        <li><router-link to="/category">Categories</router-link></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
</script>

<style scoped>
/* Basic layout */
.navbar {
  background-color: #202020;
  color: #f1f1f1;
  padding: 0.8rem 1.2rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
}

/* Logo */
.logo {
  font-size: 1.4rem;
  font-weight: bold;
  color: #00adb5;
}

/* Nav Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.nav-links li a {
  color: #f1f1f1;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #00adb5;
}

/* Hamburger (hidden on desktop) */
.menu-toggle {
  font-size: 1.6rem;
  cursor: pointer;
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #1e1e1e;
    flex-direction: column;
    width: 200px;
    padding: 1rem;
    display: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li {
    margin: 0.8rem 0;
  }
}
</style>
