<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top-right-mobile">
        <div class="header__top-search">
          <img src="/svg/Search.svg" alt="search" class="header__top-icon">
        </div>
        <div class="header__top-mobile-menu" @click="isOpenedMobileMenu = !isOpenedMobileMenu">
          <img src="/svg/BurgerMenu.svg" alt="menu" class="header__top-icon">
        </div>
      </div>
        <router-link class="header__top-logo" to="/">Avion</router-link>
      <div class="header__top-right">
        <div class="header__top-cart">
          <router-link to="/cart">
            <img src="/svg/Shopping-cart.svg" alt="cart">
          </router-link>
        </div>
        <div class="header__top-user">
          <router-link to="/User">
            <img src="/svg/User-avatar.svg" alt="user">
          </router-link>
        </div>
      </div>
    </div>
    <div class="header__menu">
      <router-link
          class="header__menu-link"
          :to="elem.path"
          v-for="(elem, i) of menu"
          :key="i"
      >
        {{elem.name}}
      </router-link>
    </div>
    <div class="header__menu-mobile" v-if="isOpenedMobileMenu">
      <div class="header__menu-mobile-top">

      </div>
      <router-link
          class="header__menu-mobile-link"
          :to="elem.path"
          v-for="(elem, i) of menu"
          :key="i"
      >
        {{elem.name}}
      </router-link>
    </div>
  </header>
</template>

<script setup>
 import {ref} from 'vue'

 const menu = [
   {
     name: 'Plant pots',
     path: '/plant'
   },
   {
     name: 'Ceramics',
     path: '/ceramics'
   },
   {
     name: 'Tables',
     path: '/tables'
   },

 ]
 const isOpenedMobileMenu = ref(false)
</script>

<style lang="scss" scoped>
  .header{
    height: 132px;
    background: #fff;
    position: relative;
    @media screen and (max-width: 767px) {
      height: auto;
    }
    &__top{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      height: 70px;
      align-items: center;
      margin: 0 28px;

      @media screen and (max-width: 767px) {
        border-bottom: none;
        padding: 20px 0;
      }
      &-icon{
        display: block;
      }
      &-mobile-menu{
        display: none;
        @media screen and (max-width: 767px) {
          display: block;
          margin-left: 16px;
        }
      }
      &-right-mobile{
        @media screen and (max-width: 767px) {
          order: 2;
          display: flex;
          align-items: center;
        }
      }
      &-logo{
        font-family: 'Clash Display',sans-serif;
        color: #22202E;
        font-size: 24px;
        font-weight: 400;
        text-decoration: none;
        @media screen and (max-width: 767px) {
          order: 1;
        }
        &:hover{
          text-decoration: underline;
        }
      }
      &-right{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media screen and (max-width: 767px) {
          display: none;
        }
      }
      &-cart{
        margin-right: 16px;
      }
    }
    &__menu{
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 767px) {
        display: none;
      }
      &-link{
        text-decoration: none;
        color: #726E8D;
        margin: 20px 22px;
        &:hover{
          text-decoration: underline;
        }
      }
      &-mobile{
        position: absolute;
        background: $white;
        top: 50px;

        border: solid 1px black;
        width: 100%;
        &-top{

        }
        &-link{
          text-decoration: none;
          display: block;
          color: #726E8D;
          margin: 10px;
        }
      }
    }
  }
</style>