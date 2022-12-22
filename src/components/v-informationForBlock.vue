<template>
  <div
      class="hero__info"
      :style="{backgroundColor:background}"
      :class="{'hero__info-mobile-padding': mobilePadding}"
  >
    <div class="hero__info-text">
      <h2
          class="hero__info-title"
          :style="{color: colorTitle,}"
      >
        {{title}}
      </h2>
      <span
          class="hero__info-description"
          :style="{color: colorDescription}"
      >
        {{description}}
      </span>
    </div>
    <v-button
        :color="colorLink || 'secondary'"
        type="link"
        to="/"
        mobil-full-width="true"
    >
      View collection
    </v-button>

  </div>
</template>

<script setup>
  import VButton from "./UI/v-button.vue";
  const props = defineProps({
    title: {
      Type: String,
      required: false
    },
    description:{
      Type: String,
      required: false
    },
    link:{
      Type: String,
      required: false
    },
    colorTitle:{
      Type: String,
      default: ''
    },
    colorLink:{
      Type: String,
      required: false
    },
    colorDescription:{
      Type: String,
      default: '#fff'
    },
    background:{
      Type: String,
      default: '#fff'
    },
    mobilePadding: {
      Type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss" scoped>
.hero{
  &__info{
    max-width: 630px;
    background: $white;
    min-height: 444px;
    padding: 50px 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 767px){
      padding: 47px 25px 32px 25px;
      min-height: 0;
    }
    &-text{
      @media screen and (max-width: 767px){
        margin-bottom: 32px;
      }
    }
    &-title{
      font-family: $Clash;
      font-weight: 400;
      line-height: 1.5;
      font-size: 32px;
      color: $dark;
      @media screen and (max-width: 767px){
        font-size: 24px;
      }
    }
    &-description{
      color: $darkPurple;
      font-size: 18px;
      @media screen and (max-width: 767px){
        font-size: 14px;
      }
    }
    &-link{
      text-decoration: none;
      width: 170px;
      height: 56px;
      background: rgba(249, 249, 249, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        cursor: pointer;
        background: rgba(249, 249, 249, 0.30);
      }
    }
    &-mobile-padding{
      @media screen and (max-width: 767px){
        padding: 36px 32px;
      }
    }
  }
}
</style>