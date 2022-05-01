<script lang="ts">
	import CustomButton from "./components/CustomButton/CustomButton.svelte";
</script>

<main>
	<CustomButton 
		title="Tab 1" 
		selected={false} 
		index={0} 
	/>
</main>

<style>
	main {
		text-align: center;
	}
</style>