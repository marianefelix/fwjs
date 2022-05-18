<script setup lang="ts">
    import CustomButton from "../CustomButton/CustomButton.svelte";
    import Enunciation from "../Enunciation/Enunciation.svelte";

    export let data: { 
        title: string;
        description: string;
    }[];

    let currentlySelectedTab = 0;
    
    const tabOnClick = (tabIndex: number) => {
        currentlySelectedTab = tabIndex;
    };
</script>

<div class="tab-container">
    {#each data as tabItem, index (tabItem)}
        <CustomButton
            title={tabItem.title}
            selected={currentlySelectedTab === index}
            index={index}
            on:selection={e => tabOnClick(e.detail)}
        />
    {/each}

    <Enunciation text={data[currentlySelectedTab].description} />
</div>

<style scoped src="./styles.css"></style>