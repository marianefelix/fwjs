<script setup lang="ts">
    interface InputProps {
        type: string;
        name: string;
        value: string;
        errorMessage?: string;
    }

    defineProps<InputProps>();
</script>

<template>
    <div>
        <input :type="type" :name="name" v-model="value" />
        <small v-if="errorMessage">{{errorMessage}}</small>
    </div>
</template>

<style scoped src="./styles.css"></style>