<template>
  <v-product-detail :product="currentProduct"/>
</template>

<script setup>
  import {ref, onMounted} from "vue";
  import {useRoute, useRouter} from "vue-router"
  import api from "@/api.js";
  import VProductDetail from "@/components/v-productDetail.vue";

  const route = useRoute()
  const router = useRouter()
  const productId = ref('')
  const currentProduct = ref({})

  onMounted(async () => {
    productId.value = route.params.id
    currentProduct.value = await api.getProduct(productId.value)
  })
</script>


<style scoped>

</style>