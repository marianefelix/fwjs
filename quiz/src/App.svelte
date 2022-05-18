<script lang="ts">
	import CustomButton from "./components/CustomButton/CustomButton.svelte";
	import Tab from "./components/Tab/Tab.svelte";

	const data =  [
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
</script>

<main>
	<Tab data={data} />
</main>

<style>
	main {
		width: 100%;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>