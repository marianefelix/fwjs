<script setup lang="ts">
    import CustomButton from "../CustomButton/CustomButton.svelte";
    import Enunciation from "../Enunciation/Enunciation.svelte";

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

    let currentlySelectedTab = 0;
    
    const tabOnClick = (tabIndex: number) => {
        currentlySelectedTab = tabIndex;
    };
</script>

<div class="tab-container">
    {#each tabList as tabItem, index (tabItem)}
        <CustomButton
            title={tabItem.title}
            selected={currentlySelectedTab === index}
            index={index}
            on:selection={e => tabOnClick(e.detail)}
        />
    {/each}

    <Enunciation text={tabList[currentlySelectedTab].description} />
</div>

<style scoped src="./styles.css"></style>