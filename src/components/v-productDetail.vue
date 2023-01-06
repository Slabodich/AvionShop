<template>
  <div class="product">
    <div>
      <img :src="product.image" :alt="product.name">
    </div>
    <div>
      <h2 class="product__name">{{product.name}}</h2>
      <span class="product__price">£{{product.price}}</span>

      <div class="product__description">
        <span class="product__description-title">Product description</span>
        <div v-html="product.description"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    product:{
      Type: Object,
      default: () => {},
      required: true
    }
  })
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
    &__description{
      &-title{
        font-family: $Clash;
      }
      margin-top: 24px;
      font-size: 16px;
      font-family: $Satoshi;
    }
  }
</style>