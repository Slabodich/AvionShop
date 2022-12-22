<template>
  <form class="subscribe-form">
    <input
        type="text"
        class="subscribe-form__input"
        placeholder="your@email.com"
        :style="{backgroundColor: bgColor, color: color}"
    >
    <v-button
        :color="colorButton"
    >
      Sign up
    </v-button>
  </form>
</template>

<script setup>
  import VButton from "./UI/v-button.vue";

  const props = defineProps({
    bgColor:{
      Type: String,
      required: false
    },
    colorButton:{
      Type: String,
      required: false
    },
    color:{
      Type: String,
      required: false
    }
  })
</script>

<style lang="scss" scoped>
  .subscribe-form{
    display: flex;
    &__input{
      flex-grow: 1;
      height: 56px;
      padding: 0 15px;
      font-size: 16px;
      border: none;
    }
  }
</style>