<script setup lang="ts">
    // imports
    import { ref } from "@vue/reactivity";
    import CustomButton from "../CustomButton/CustomButton.vue";
    import Enunciation from "../Enunciation/Enunciation.vue";

    // states
    const tabList = [
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
            v-for="(tabItem, index) in tabList" 
            :key="tabItem.title"
            :title="tabItem.title"
            :selected="isTabSelected(index)"
            :index="index"
            @on-click="tabOnClick"
        />

        <Enunciation 
            :text="tabList[currentlySelectedTab].description" 
        />
    </div>
</template>

<style scoped src="./styles.css"></style>