<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top-search">
        <img src="/svg/Search.svg" alt="search">
      </div>
        <a class="header__top-logo" href="#">Avion</a>
      <div class="header__top-left">
        <div class="header__top-left-cart">
          <a href="#">
            <img src="/svg/Shopping-cart.svg" alt="cart">
          </a>
        </div>
        <div class="header__top-left-user">
          <a href="#">
            <img src="/svg/User-avatar.svg" alt="user">
          </a>
        </div>
      </div>
    </div>
    <div class="header__menu">
      <a
          class="header__menu-link"
          :href="elem.path"
          v-for="(elem, i) of menu"
          :key="i"
      >
        {{elem.name}}
      </a>
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
</script>

<style lang="scss" scoped>
  .header{
    height: 132px;
    background: #fff;
    &__top{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      height: 70px;
      align-items: center;
      margin: 0 28px;
      &-logo{
        font-family: 'Clash Display',sans-serif;
        color: #22202E;
        font-size: 24px;
        font-weight: 400;
        text-decoration: none;
        &:hover{
          text-decoration: underline;
        }
      }
      &-left{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &-cart{
          margin-right: 16px;
        }
      }
    }
    &__menu{
      display: flex;
      justify-content: center;
      align-items: center;
      &-link{
        text-decoration: none;
        color: #726E8D;
        margin: 20px 22px;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
</style>