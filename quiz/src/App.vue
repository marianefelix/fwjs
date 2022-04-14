<script setup lang="ts">
  import CustomButton from "./components/CustomButton/CustomButton.vue";
</script>

<template>
  <CustomButton 
    title="Tab 1" 
    v-bind:selected="false" 
  />
</template>

<style>
  @import './assets/base.css';
</style>
