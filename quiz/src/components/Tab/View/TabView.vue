<script setup lang="ts">
    // imports
    import { ref } from "@vue/reactivity";
    import  { tabStore } from '@/store/TabStore.store';

    // states
    const currentlySelectedTab = ref(0);
    
    // functions
    const tabOnClick = (tabIndex: number) => {
        currentlySelectedTab.value = tabIndex;
    };

    const isTabSelected = (tabIndex: number) => {
        if (Number(tabIndex) === currentlySelectedTab.value) {
            return true;
        }

        return false;
    };
</script>


<template>
    <div class="tab-container">
        <h3>Conteúdo</h3>
        <div 
            class="tab-panel"
            v-if="Object.keys(tabStore.tabList).length === 0"
        >
            <button
                class="selected"
                @click="tabOnClick(0)"
            >
                Tab 1
            </button>
        </div>
        <p 
            class="no-content"
            v-if="Object.keys(tabStore.tabList).length === 0"
        >
            Sem conteúdo
        </p>
        <div v-else>
            <div
                class="tab-panel"
                v-for="tabItem, index in tabStore.tabList"
            >
                <button
                    :key="`tabItem-${index}`"
                    :class="isTabSelected(index) ? 'selected' : ''"
                    @click="tabOnClick(index)"
                >
                    {{ tabItem.title }}
                </button>
            </div>
            <p>
                {{tabStore.tabList[currentlySelectedTab].content}}
            </p>
        </div>
    </div>
</template>

<style scoped src="./styles.css"></style>