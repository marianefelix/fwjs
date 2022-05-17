<script setup lang="ts">
  import Tab from "./components/Tab/Tab.vue";

  const data = [
  {
    "title": "Tab 1",
    "description": "Texto 1",
  },
  {
    "title": "Tab 2",
    "description": "Texto 2",
  },
  {
    "title": "Tab 3",
    "description": "Texto 3",
  },
  {
    "title": "Tab 4",
    "description": "Texto 4",
  },
];
</script>

<template>
  <Tab :data="data" />
</template>

<style>
  @import './assets/base.css';
</style>
