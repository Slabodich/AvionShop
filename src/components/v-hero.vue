<template>
  <div class="hero">
    <v-information-for-block
      title="Luxury homeware for people who love timeless design quality"
      description="Shop the new Spring 2022 collection today"
      link="/"
      color-link="lightgray"
      colorDescription="$darkPurple"
    />
    <img src="/img/Hero.jpg" alt="" class="hero-img">
  </div>
</template>

<script setup>
import VInformationForBlock from "./v-informationForBlock.vue";
</script>

<style lang="scss" scoped>
  .hero{
    background: url('/img/Hero.jpg');
    background-size: cover;
    height: 704px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 80px;
    max-width: 100%;
    @media screen and (max-width: 767px){
      background: transparent;
      height: 100%;
      padding: 0;
      display: block;
    }
    &-img {
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
      }
    }
  }
</style>