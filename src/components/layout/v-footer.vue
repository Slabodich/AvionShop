<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__top">
        <div class="footer__columns">
          <div class="footer__column">
            <span class="footer__columns-title">Menu</span>
            <router-link to="/" class="footer__columns-link">New arrivals</router-link>
            <router-link to="/" class="footer__columns-link">Best sellers</router-link>
            <router-link to="/" class="footer__columns-link">Recently viewed</router-link>
            <router-link to="/" class="footer__columns-link">Popular this week</router-link>
            <router-link to="/" class="footer__columns-link">All products</router-link>
          </div>
          <div class="footer__column">
            <span class="footer__columns-title">Categories</span>
            <router-link to="/" class="footer__columns-link">Crockery</router-link>
            <router-link to="/" class="footer__columns-link">Furniture</router-link>
            <router-link to="/" class="footer__columns-link">Homeware</router-link>
            <router-link to="/" class="footer__columns-link">Plant pots</router-link>
            <router-link to="/" class="footer__columns-link">Chairs</router-link>

            <router-link to="/" class="footer__columns-link">Crockery</router-link>
          </div>
          <div class="footer__column">
            <span class="footer__columns-title">Our company</span>
            <router-link to="/" class="footer__columns-link">About us</router-link>
            <router-link to="/" class="footer__columns-link">Vacancies</router-link>
            <router-link to="/" class="footer__columns-link">Contact us</router-link>
            <router-link to="/" class="footer__columns-link">Privacy</router-link>
            <router-link to="/" class="footer__columns-link">Returns policy</router-link>
          </div>
        </div>
        <div class="footer__sub-form">
          <span class="footer__columns-title">Join our mailing list</span>
          <v-subscribe-form
              color-button="lightgray"
              bg-color="rgba(255, 255, 255, 0.15)"
              color="white"
          />
        </div>
      </div>
      <div class="footer__bottom">
          <span class="footer__bottom-copy">Copyright 2022 Avion LTD</span>
          <div class="footer__bottom-socials">
            <a href="#" class="footer__bottom-link"><img src="/svg/logo-in.svg" alt="linkedin"></a>
            <a href="#" class="footer__bottom-link"><img src="/svg/logo-f.svg" alt="facebook"></a>
            <a href="#" class="footer__bottom-link"><img src="/svg/logo-inst.svg" alt="instagram"></a>
            <a href="#" class="footer__bottom-link"><img src="/svg/logo-skype.svg" alt="skype"></a>
            <a href="#" class="footer__bottom-link"><img src="/svg/logo-twitter.svg" alt="twitter"></a>
            <a href="#" class="footer__bottom-link"><img src="/svg/logo-pinterest.svg" alt="pinterest"></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import VSubscribeForm from "../v-subscribeForm.vue";
</script>

<style lang="scss" scoped>
  .footer{
    background: $darkPrimary;
    color: $white;
    &__content{
      padding: 58px 82px 25px 82px;
      @media screen and (max-width: 1024px){
        padding: 58px 30px 25px 30px;
      }
    }
    &__top{
      display: grid;
      grid-template-columns: 540px 1fr;
      column-gap: 110px;
      border-bottom: solid 1px #4E4D93;
      @media screen and (max-width: 1150px) {
        column-gap: 10px;
        grid-template-columns: 450px 1fr;
      }
      @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 767px){
        grid-template-columns: 1fr;
        padding-bottom: 24px;
      }
    }
    &__column{
      @media screen and (max-width: 767px){
        margin-bottom: 40px;
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
    &__columns{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 48px;
      @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);

      }
      &-title{
        display: block;
        font-family: $Clash;
        font-size: 16px;
        margin-bottom: 12px;
      }
      &-link{
        display: block;
        margin-bottom: 12px;
        font-size: 14px;
        color: $white;
        text-decoration: none;
        &:hover{
          text-decoration: underline;
        }
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
    &__bottom{
      display: flex;
      justify-content: space-between;
      padding-top: 24px;
      &-copy{
        display: block;
        font-weight: 400;
        font-size: 14px;
        @media screen and (max-width: 767px){
          margin: auto;
        }
      }
      &-link{
        margin-right: 24px;
        &:last-child{
          margin-right: 0;
        }
        @media screen and (max-width: 767px){
          display: none;
        }
      }
    }
  }
</style>