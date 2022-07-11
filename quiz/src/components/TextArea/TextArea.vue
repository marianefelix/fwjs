<script setup lang="ts">
    interface TextAreaProps {
        name: string;
        value: string;
        errorMessage?: string;
    }

    defineProps<TextAreaProps>();
</script>

<template>
    <div>
        <textarea :name="name" v-model="value" />
        <small v-if="errorMessage">{{errorMessage}}</small>
    </div>
</template>

<style scoped src="./styles.css"></style>