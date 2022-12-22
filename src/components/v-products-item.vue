<template>
  <div class="products-item">
    <router-link to="/">
      <img
          :src="img"
          :alt="name"
          class="products-item__img"
      >
    </router-link>
    <router-link  class="products-item__name" to="/">{{name}}</router-link>
    <span class="products-item__price">£{{price}}</span>
    
  </div>
</template>

<script setup>

  const props = defineProps({
    img:{
      Type: String,
      required: true
    },
    name:{
      Type: String,
      required: true,
    },
    price:{
      Type: Number,
      required: true
    }

  })
</script>

<style lang="scss" scoped>
  .products-item{
    &__img{
      display: block;
      margin-bottom: 24px;
    }
    &__name{
      font-family: $Clash;
      font-weight: 400;
      font-size: 20px;
      color: $darkPrimary;
      line-height: 28px;
      text-decoration: none;
      display: block;
      margin-bottom: 8px;
      &:hover{
        text-decoration: underline;
      }
      @media screen and (max-width: 767px){
        font-size: 16px;
      }
    }
    &__price{
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      display: block;
      color: $darkPrimary;
      @media screen and (max-width: 767px){
        font-size: 15px;
      }
    }
  }
</style>