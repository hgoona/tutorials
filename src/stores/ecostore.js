import { writable } from 'svelte/store';

export const plants = writable([]);

// import searchTerm from '../routes/ecodex';

let limit = 2;
let query = 'basil';
// let query = searchTerm ;
// let num = '63631775';

const fetchPlants = async () => {
	const url = `https://api.inaturalist.org/v1/taxa?q=${query}&taxon_id=47126&per_page=${limit}`;
	console.log({ limit, query });
	const res = await fetch(url);
	const data = await res.json();
	console.log({ data });


	const loadedPlants = data.results.map((data) => {

		//get extension
		let imageURL = data.default_photo.url;
		let imageExt = imageURL.split(".").pop();
		console.log(imageExt); // "js"

		return {
			name: data.preferred_common_name,
			id: `ID ${data.id}`,
			imageID: `${data.default_photo.id}`,
			image: data.default_photo.medium_url,
			// imageDefault: data.default_photo.medium_url,
			imageURL: data.default_photo.medium_url,
		};
	});
	plants.set(loadedPlants);
};

fetchPlants();
