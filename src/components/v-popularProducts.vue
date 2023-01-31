<template>
    <v-products :products="popularProducts"/>
</template>

<script setup>
  import VProducts from "@/components/v-products.vue";

  import  {onMounted, ref} from "vue";
  import api from "@/api.js";

  const popularProducts = ref([])

  onMounted(async () => {
    popularProducts.value = await api.getPopularProducts()
  })
</script>

<style scoped>

</style>