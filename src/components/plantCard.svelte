<script>
	import { identity } from 'svelte/internal';
	export let plant;
</script>

<!-- routing -->
<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${plant.id}`}
>
	<img class="h-40 w-40 object-cover" src={plant.image} alt={plant.name} />
	<h2 class="uppercase text-1xl font-bold">
		{plant.id}. {plant.name}
	</h2>
</a>
<p class="text-xs">
	{plant.imageURL} <br> ({plant.imageID})
</p>
