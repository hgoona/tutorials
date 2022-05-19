<script>
	// import PostList from "../components/PostList.svelte";
	import { plants } from '../stores/ecostore';
	import PlantCard from '../components/plantCard.svelte';
	console.log($plants);

    export let searchTerm ="";

    let filteredPlants = [];

	// live triggers the function if the input is triggered
	$:{
		console.log(searchTerm)
		if(searchTerm){
			// search for the plant
			filteredPlants = $plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));
		} else {
			filteredPlants = [ ... $plants]
		}
	}

</script>


<svelte:head>
	<title>Ecodex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Earthli : Ecodex</h1>

<p>Welcome to the Ecodex!</p>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Search Pokemon" >

<div class="py-4 grid gap-4 grid-rows-1 md:grid-cols-2 grid-cols-1">
	<!-- {#each $plants as plant} -->
	{#each filteredPlants as plant}
		<PlantCard {plant} />
	{/each}
</div>
