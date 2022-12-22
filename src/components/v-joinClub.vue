<template>
  <div class="join-club">
    <div class="join-club__content">
      <h3 class="join-club__title">
        Join the club and get the benefits
      </h3>
      <span class="join-club__description">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
      </span>
      <div class="join-club__checks">
        <div class="join-club__check">
          <img src="/svg/Checkmark.svg" alt="Check" class="join-club__check-icon">
          <span class="join-club__check-name">Exclusive offers</span>
        </div>
        <div class="join-club__check">
          <img src="/svg/Checkmark.svg" alt="Check" class="join-club__check-icon">
          <span class="join-club__check-name">Free events</span>
        </div>
        <div class="join-club__check">
          <img src="/svg/Checkmark.svg" alt="Check" class="join-club__check-icon">
          <span class="join-club__check-name">Large discounts</span>
        </div>
      </div>
      <v-subscribe-form />
    </div>
  </div>
</template>

<script setup>

import VSubscribeForm from "./v-subscribeForm.vue";
</script>

<style lang="scss" scoped>
  .join-club{
    background: url("/img/joinClub.jpg");
    background-size: cover;
    padding: 97px 0 86px 0;
    @media screen and (max-width: 767px){
      padding: 24px;
    }
    &__content{
      max-width: 500px;
      margin: auto;
      text-align: center;
      color: $white;
      @media screen and (max-width: 767px){
        text-align: left;
      }
    }
    &__title{
      display: block;
      font-family: $Clash;
      font-weight: 400;
      font-size: 32px;
      margin-bottom: 12px;
      @media screen and (max-width: 767px){
        font-size: 24px;
      }
    }
    &__description{
      display: block;
      font-size: 18px;
      margin-bottom: 30px;
      @media screen and (max-width: 767px){
        font-size: 14px;
      }
    }
    &__checks{
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      @media screen and (max-width: 767px){
        display: block;
      }
    }
    &__check{
      display: flex;
      align-items: center;
      &:nth-child(2){
        margin: 0 36px;
        @media screen and (max-width: 767px){
          margin: 8px 0;
        }
      }
      &-icon{
        margin-right: 9px;
      }
    }
  }
</style>