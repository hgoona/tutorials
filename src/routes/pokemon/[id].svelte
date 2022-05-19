<script context="module">
	export async function load({ params }) {
		// API call based on ID
		const id = params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		return { props: { pokeman } };
	}
</script>

<script>
	export let pokeman;
</script>

<svelte:head>
	<title>{pokeman.name}</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>

<!-- hello world -->
