<script setup>
import VHeader from "./components/layout/v-header.vue";
import VHero from "./components/v-hero.vue";
</script>

<template>
  <div class="wrapper">
    <v-header />
    <v-hero />
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url('https://fonts.cdnfonts.com/css/clash-display');
  *{
   box-sizing: border-box;
  }
  body{
    font-family: 'Satoshi', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 16px;
    img{
      max-width: 100%;
    }
  }
  .wrapper{
    max-width: 1440px;
    margin: auto;
  }
</style>
