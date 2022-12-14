<template>
  <div class="hero">
    <div class="hero__info">
      <div class="hero__info-text">
        <h2 class="hero__info-title">Luxury homeware for people who love timeless design quality</h2>
        <span class="hero__info-description">Shop the new Spring 2022 collection today</span>
      </div>
      <a  class="hero__info-link" href="#">View collection</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-hero"
}
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
    &__info{
      max-width: 630px;
      background: white;
      height: 444px;
      padding: 50px 55px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-title{
        font-family: 'Clash Display', sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: #22202E;
      }
      &-description{
        color: #726E8D;
      }
      &-link{
        text-decoration: none;
      }
    }
  }
</style>