<script setup lang="ts">
    import { createEventDispatcher } from "svelte";

    export let title: string;
    export let selected: boolean;
    export let index: number;

    const dispatcher = createEventDispatcher();

    export const onClick = (index: number) => {
        dispatcher('onClick', index);
    };
    
</script>

<button
    type="button"
    class={selected ? 'selected' : ''}
    title={title}
    on:click={() => onClick(index)}
>
    { title }
</button>

<style scoped src="./styles.css"></style>