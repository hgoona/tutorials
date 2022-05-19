<script>
	// import PostList from "../components/PostList.svelte";
	import Profile from '../components/Profile.svelte';

	import { pokemon } from '../stores/pokestore';
	import PokemanCard from '../components/pokemanCard.svelte';
	console.log($pokemon);

    let searchTerm ="";
    let filteredPokemon = [];

	// live triggers the function if the input is triggered
	$:{
		console.log(searchTerm)
		if(searchTerm){
			// search for the pokemon
			filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
		} else {
			filteredPokemon = [ ... $pokemon]
		}
	}

</script>



<svelte:head>
	<title>Svelte Test App</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Test app on SvelteKit</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Search Pokemon" >

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	<!-- {#each $pokemon as pokeman} -->
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
