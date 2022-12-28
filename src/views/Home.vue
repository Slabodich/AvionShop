<script setup>
import VHero from "@/components/v-hero.vue";
import VAboutBrand from "@/components/v-aboutBrand.vue";
import VProducts from "@/components/v-products.vue";
import VIdeas from "@/components/v-ideas.vue";
import VJoinClub from "../components/v-joinClub.vue";

import  {onMounted, ref} from "vue";
import api from "../api.js";

const popularProducts = ref([])

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts()
})
</script>

<template>
  <div class="wrapper">
    <v-hero />
    <v-about-brand />
    <v-products :products="popularProducts"/>
    <v-ideas />
    <v-join-club />
  </div>
</template>

