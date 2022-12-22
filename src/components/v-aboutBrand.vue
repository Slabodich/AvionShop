<template>
  <div class="about-brand">
    <h3 class="about-brand__title">What makes our brand different</h3>
    <div class="about-brand__items">
      <div
          class="about-brand__item"
          v-for="(item, i) of aboutBrands"
          :key="i"
      >
        <img
            class="about-brand__item-icon"
            :src="item.icon"
            :alt="item.title">
        <h4 class="about-brand__item-title">{{item.title}}</h4>
        <span class="about-brand__item-description">{{item.description}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

  const aboutBrands = [
    {
      icon: '/svg/aboutBrand1.svg',
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard'
    },
    {
      icon: '/svg/aboutBrand2.svg',
      title: 'Made by true artisans',
      description: 'Handmade crafted goods made with real passion and craftmanship'
    },
    {
      icon: '/svg/aboutBrand3.svg',
      title: 'Unbeatable prices',
      description: 'For our materials and quality you won’t find better prices anywhere'
    },
    {
      icon: '/svg/aboutBrand4.svg',
      title: 'Recycled packaging',
      description: 'We use 100% recycled to ensure our footprint is more manageable'
    }
  ]
</script>

<style  lang="scss" scoped>
  .about-brand{
    font-family: $Clash;
    color: $darkPrimary;
    padding: 80px 80px 130px 80px;
    @media screen and (max-width: 767px){
      padding: 48px 24px 50px 24px;
    }
    &__title{
      text-align: center;
      font-size: 24px;
      margin: 0 0 36px 0;
      font-weight: 400;
      @media screen and (max-width: 767px){
        text-align: left;
        font-size: 20px;
      }
     }
    &__items{
      margin-top: 36px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 18px;
      @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        gap: 40px 20px;
      }
      @media screen and (max-width: 767px){
        grid-template-columns: 1fr;
        gap: 26px;
      }
    }
    &__item{
      background: $light;
      padding: 48px;
      @media screen and (max-width: 767px){
        padding: 36px 24px;
      }
      &-icon{
        margin-bottom: 12px;
        display: block;
      }
      &-title{
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
      }
      &-description{
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
</style>