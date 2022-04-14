<script setup lang="ts">
    interface CustomButtonProps {
        title: string;
        selected: boolean;
        index: number;
    }

    interface CustomButtonEvents {
        onClick: (index: number) => void;
    }

    defineProps<CustomButtonProps>();
    defineEmits<CustomButtonEvents>();

    
</script>

<template>
    <button
        type="button"
        :class="{selected: selected}"
        :title="$props.title"
        @click="$emit('onClick', index)"
    >
        {{ title }}
    </button>
</template>

<style scoped src="./styles.css"></style>