<template>
  <div class="container">
    <div class="products">
      <v-products-item
          v-for="product of products"
          :id="product.id"
          :key="product.id"
          :img="product.img"
          :name="product.title"
          :price="product.price"
      />
    </div>
<!--    <router-link  to="/">View collection</router-link>-->
    <div class="products__link">
      <v-button
          color="lightgray"
          type="link"
          to="/"
          mobil-full-width="true"
      >
        View collection
      </v-button>
    </div>
  </div>
</template>

<script setup>

import VProductsItem from "./v-products-item.vue";
import VButton from "./UI/v-button.vue";

const props = defineProps({
  products:{
    required: true
  }
})

</script>

<style lang="scss" scoped>
  .products{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    padding: 0 80px;
    margin-bottom: 40px;
    @media screen and (max-width: 1024px){
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 20px;
    }
    @media screen and (max-width: 767px){
      padding: 0 24px;
    }
    &__link{
      text-align: center;
    }
  }
  .container{
    margin-bottom: 56px;
  }
</style>