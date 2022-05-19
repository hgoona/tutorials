<script>
	import Nav from '../components/nav.svelte';

	import App from './fb';
	import { onMount } from 'svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';

	onMount(()=> {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) =>{
			if(user) {
				console.log('Welcome to the file portal');
			} else {
				goto('/login');
			}
		})
	})
</script>

<!-- global padding -->
<div class="p-8 max-w-6xl mx-auto">
	<Nav />

	<slot />
</div>
>

<style>
	/* global styles */
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
