<style scoped src="./styles.css"></style>

<script setup lang="ts">
    interface CustomButtonProps {
        title: string;
        selected: boolean;
        onClick: () => void;
    }

    defineProps<CustomButtonProps>()
</script>

<template>
    <button
        type="button"
        :class="{selected: selected}"
        :title="$props.title"
        @click="$props.onClick"
    >
        {{ title }}
    </button>
</template>