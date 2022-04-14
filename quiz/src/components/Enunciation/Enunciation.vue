<script setup lang="ts">
    interface EnunciationProps {
        text: string;
    }

    defineProps<EnunciationProps>();

</script>


<template>
    <div class="description-container">
        <h2 class="enunciation-text">
            {{ text }}
        </h2>
    </div>
</template>

<style scoped src="./styles.css"></style>