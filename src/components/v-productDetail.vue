<template>
  <div class="product">
    <div>
      <img :src="product.image" :alt="product.name">
    </div>
    <div>
      <h2 class="product__name">{{product.name}}</h2>
      <span class="product__price">£{{product.price}}</span>
      <div class="product__block product__description">
        <span class="product__block-title">Product description</span>
        <div v-html="product.description"></div>
      </div>
      <div class="product__block">
        <span class="product__block-title">Dimensions</span>
        <span
          class="product__param"
          v-for="(param, i) of product.params"
          :key="i"
        >
          {{param.title}}: {{param.value}}
        </span>
      </div>
      <div class="product__block">
        <span class="product__block-title">Quantity</span>
        <div class="product__quantity">
          <span
              class="product__quantity-symbol"
              @click="changeQuantity('minus')"
          >-</span>
          <span class="product__quantity-value">{{quantity}}</span>
          <span
              class="product__quantity-symbol"
              @click="changeQuantity('plus')"
          >+</span>
        </div>
      </div>
      <v-button
          :color="$darkPrimary"
          @click="cartStore.addToCart(product, quantity)"
      >
        Add to cart
      </v-button>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import VButton from "./UI/v-button.vue";
  import { useCartStore } from "@/store/cart.js";

  const cartStore = useCartStore()
  const quantity = ref(1);

  const props = defineProps({
    product:{
      Type: Object,
      default: () => {},
      required: true
    }
  })
  const changeQuantity = type => {
    if (type === "minus"){
      quantity.value === 1 ? (quantity.value = 1) : (quantity.value--)
    }
    if (type === "plus"){
      quantity.value === 3 ? (quantity.value = 3) : (quantity.value++)
    }
  }
</script>

<style lang="scss" scoped>
  .product{
    background: $light;
    padding: 50px 80px;
    display: grid;
    grid-template-columns: 1fr 500px;
    column-gap: 65px;
    color: $darkPrimary;
    font-family: $Clash;
    margin-bottom: 65px;
    &__name{
      font-size: 36px;
    }
    &__price{
      font-size: 24px;
      font-family: $Satoshi;
      display: block;
      border-bottom: solid 1px #EBE8F4;
      padding-bottom: 28px;
    }
    &__block{
      margin-bottom: 40px;
      &-title{
        font-family: $Clash;
        margin-bottom: 14px;
        display: block;
      }
    }
    &__description{

      margin-top: 24px;
      font-size: 16px;
      font-family: $Satoshi;
    }
    &__param{
      display: block;
    }
    &__quantity{
      background: $white;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 122px;
      height: 46px;
      &-symbol{
        color: #EBE8F4;
        cursor: pointer;
        size: 16px;
      }
    }
  }
</style>