<script setup>
import { onMounted, ref } from 'vue';
const mdata = ref([]);
onMounted(() => {
    document.title = "Mansly - Latest Deals & Discounts";
    // Fetch deals or perform other setup tasks here
    async function getdata() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            mdata.value = data;
        } catch (error) {
            console.error('Error fetching deals:', error);
        }

    }

    getdata();
});
//import Card from '@/components/Home/ui/card.vue';
</script>
<template>

    
    <section class="deal-section">
        <h1 class="page-title">🔥 Latest Deals & Discounts</h1>
        <div class="deal-grid">
            <div class="deal-card" v-for="value in mdata" :key="value.id">
                <img src="https://m.media-amazon.com/images/I/510OM8sOrkL._SL1000_.jpg" alt="Deal image" />
                <div class="deal-content">
                    <h2 class="deal-title">{{ value.title }}</h2>
                    <div class="price">
                        <span class="discounted">₹999</span>
                        <span class="original">₹1,999</span>
                    </div>
                    <div class="deal-buttons">
                        <button class="btn details">Details</button>
                        <button class="btn grab">Grab Deal</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.deal-section {

    background-color: #121212;
    color: #f1f1f1;
    padding: 2rem 5rem;
}

/* Page title (H1) */
.page-title {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #00adb5;
    font-weight: 600;
    letter-spacing: 0.5px;
}

@media (max-width: 768px) {
    .page-title {
        font-size: 1.4rem;
    }
}

/* Grid layout */
.deal-grid {

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}

.deal-card {
    background-color: #1e1e1e;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.deal-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

/* Image */
.deal-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
}

/* Content */
.deal-content {
    padding: 1rem;
}

.deal-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #f1f1f1;
}

/* Price */
.price {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.8rem;
}

.discounted {
    font-size: 1.2rem;
    font-weight: bold;
    color: #00adb5;
}

.original {
    font-size: 0.9rem;
    color: #999;
    text-decoration: line-through;
}

/* Buttons */
.deal-buttons {
    display: flex;
    justify-content: space-between;
    gap: 0.6rem;
}

.btn {
    flex: 1;
    padding: 0.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;
}

.details {
    background-color: #2a2a2a;
    color: #f1f1f1;
}

.details:hover {
    background-color: #3a3a3a;
}

.grab {
    background-color: #00adb5;
    color: #121212;
    font-weight: bold;
}

.grab:hover {
    background-color: #06c2c9;
}

/* Responsive Layout */
@media (max-width: 1200px) {
    .deal-grid {

        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 768px) {
    .deal-section {


        padding: 2rem 1rem;
    }

    .deal-grid {
        padding: 2rem 1rem;
        grid-template-columns: repeat(2, 1fr);
    }

    .deal-card img {
        height: 140px;
    }

    .deal-title {
        font-size: 0.9rem;
    }
}
</style>