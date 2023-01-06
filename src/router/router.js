import {createRouter, createWebHistory} from "vue-router";
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/products/:id',
            name: 'Product',
            component: Product
        }
    ]
})

export default router;