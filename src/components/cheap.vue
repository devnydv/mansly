<template>
  <div class="scroll-container">
    <a href="#" class="scroll-btn">All</a>
    <a href="#" class="scroll-btn">Mobiles</a>
    <a href="#" class="scroll-btn">Laptops</a>
    <a href="#" class="scroll-btn">Fashion</a>
    <a href="#" class="scroll-btn">Shoes</a>
    <a href="#" class="scroll-btn">Appliances</a>
    <a href="#" class="scroll-btn">Headphones</a>
    <a href="#" class="scroll-btn">Offers</a>
    <a href="#" class="scroll-btn">Deals</a>
    <a href="#" class="scroll-btn">Accessories</a>
  </div>
</template>

<style scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  background-color: #202020;
  white-space: nowrap;
}

/* Hide scrollbar (for Chrome, Safari, Opera) */
.scroll-container::-webkit-scrollbar {
  display: none;
}

/* Buttons (anchor style) */
.scroll-btn {
  background-color: #2a2a2a;
  color: #f1f1f1;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #333;
  flex-shrink: 0;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
}

.scroll-btn:hover {
  background-color: #00adb5;
  color: #242323;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .scroll-btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
