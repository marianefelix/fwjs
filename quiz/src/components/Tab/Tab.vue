<script setup lang="ts">
    // imports
    import { ref } from "@vue/reactivity";
    import CustomButton from "../CustomButton/CustomButton.vue";
    import Enunciation from "../Enunciation/Enunciation.vue";

    interface TabProps {
        data: {
            title: string;
            description: string;
        }[];
    }

    defineProps<TabProps>();

    // states
    const currentlySelectedTab = ref(0);
    
    // functions
    const tabOnClick = (tabIndex: number) => {
        currentlySelectedTab.value = tabIndex;
    };

    const isTabSelected = (tabIndex: number) => {
        if (tabIndex === currentlySelectedTab.value) {
            return true;
        }

        return false;
    };
</script>


<template>
    <div class="tab-container">
        <CustomButton
            v-for="(tabItem, index) in data" 
            :key="tabItem.title"
            :title="tabItem.title"
            :selected="isTabSelected(index)"
            :index="index"
            @on-click="tabOnClick"
        />

        <Enunciation 
            :text="data[currentlySelectedTab].description" 
        />
    </div>
</template>

<style scoped src="./styles.css"></style>