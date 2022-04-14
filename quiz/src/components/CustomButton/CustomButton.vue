<style scoped src="./styles.css"></style>

<script setup lang="ts">
    interface CustomButtonProps {
        title: string;
        selected: boolean;
    }

    defineProps<CustomButtonProps>()
</script>

<template>
    <button
        :class="{selected: selected}"
        type="button" 
    >
        {{ title }}
    </button>
</template>