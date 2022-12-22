<template>
  <div
      v-if="type === 'button'"
      class="btn"
      :class="[
          'btn',
          {
            'btn-primary' : color === 'primary',
            'btn-secondary' : color === 'secondary',
            'btn-lightgray' : color === 'lightgray',
            'btn-fullwidth' : mobilFullWidth
          }
          ]"
  >
    <slot />
  </div>
  <router-link
      v-else
      :to="to"
      class="btn"
      :class="[
          'btn',
          {
            'btn-primary' : color === 'primary',
            'btn-secondary' : color === 'secondary',
            'btn-lightgray' : color === 'lightgray',
            'btn-fullwidth' : mobilFullWidth
          }
          ]"
  >
    <slot />
  </router-link>
</template>

<script setup>
  const props = defineProps({
    background: {
      Type: String,
      required: false
    },
    type:{
      Type: String,
      default: 'button'
    },
    to: {
      Type: String,
      required: false
    },
    color: {
      Type: String,
      default: 'primary'
    },
    mobilFullWidth: {
      Type: Boolean,
      default: false
    }
  })
</script>


<style lang="scss" scoped>
  .btn{
    text-decoration: none;
    padding: 0 15px;
    height: 56px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    white-space: nowrap;

    &:hover{
      cursor: pointer;
      opacity: 0.8;
    }
    &-primary{
      background: $darkPrimary;
      color: $white;
    }
    &-secondary{
      background: rgba(249, 249, 249, 0.15);
      color: $white;
    }
    &-lightgray{
      background:  #F9F9F9;
      color: $darkPrimary;
    }
    &-fullwidth{
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }
</style>