<template>
  <div class="ideas">
    <v-information-for-block
      title="It started with a small idea"
      description="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
      background="#2A254B"
      color-title="#fff"
      color-description="#fff"
      mobile-padding="true"
    />
    <img src="/img/Image%20Block.jpg" alt="Block" class="ideas__image">
  </div>
</template>

<script setup>
import VInformationForBlock from "./v-informationForBlock.vue";
</script>

<style lang="scss" scoped>
  .ideas{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 80px;
    column-gap: 26px;
    margin-bottom: 80px;
    @media screen and (max-width: 767px){
      grid-template-columns: 1fr;
      padding: 0 24px;
    }
    &__image{
      height: 100%;
      object-fit: cover;
      @media screen and (max-width: 767px){
       margin-top: 24px;
      }
    }
  }
</style>