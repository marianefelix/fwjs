<script setup lang="ts">
  import CustomButton from "./components/CustomButton/CustomButton.vue";
import Enunciation from "./components/Enunciation/Enunciation.vue";
</script>

<template>
  <CustomButton 
    title="Tab 1" 
    :selected="false"
    :onClick="() => {}"
  />
  <Enunciation text="Texto 1" />
</template>

<style>
  @import './assets/base.css';
</style>
