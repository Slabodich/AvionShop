<template>
  <div class="container">
    <div class="products">
      <v-products-item
          v-for="product of products"
          :key="product.id"
          :img="product.img"
          :name="product.name"
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
import {ref} from 'vue'
import VProductsItem from "./v-products-item.vue";
import VButton from "./UI/v-button.vue";
const products = ref([
  {
    id: 1,
    img: '/img/product1.jpg',
    name: 'The Dandy chair',
    price: 250
  },
  {
    id: 2,
    img: '/img/product2.jpg',
    name: 'Rustic Vase Set',
    price: 155
  },
  {
    id: 3,
    img: '/img/product3.jpg',
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 4,
    img: '/img/product4.jpg',
    name: 'The Lucy Lamp',
    price: 399
  }
])
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