<template>
  <div class="wrapper">
    <v-header />
    <router-view />
    <v-footer />
  </div>
</template>

<script setup>
  import VHeader from "@/components/layout/v-header.vue";
  import VFooter from "./components/layout/v-footer.vue";
</script>

<style lang="scss" scoped>
    @import "assets/style/global";
</style>
