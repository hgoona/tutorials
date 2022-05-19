<script>
	import BigButton from '../lib/BigButton.svelte';
	import { sendMagicLink } from '$lib/firebase/client';

	const handleSubmit = ({ currentTarget }) => {
		const email = new FormData(currentTarget).get('email');

		const redirectUrl = `${window.location.origin}/auth/confirm`;
		sendMagicLink(email.toString(), redirectUrl);
	};


	// const formLogin = {
	// 	email: ''
	// };
</script>

<svelte:head>
	<title>Login page</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">login page</h1>

<p>welcome to the login page! </p>
<!-- <p>{formLogin.email}</p> -->

<section class="container flex-grow">
	<p>OLD You are not logged in!</p>
	<p>OLD Please enter your email and password</p>

	<form class="flex flex-col gap-6" on:submit|preventDefault={handleSubmit}>
		<input
			class="w-full rounded p-4 shadow"
			name="email"
			type="email"
			placeholder="example@google.com"
			aria-label="email"
			required
		/>
		<!-- <input
			class="w-full rounded p-4 shadow"
			name="password"
			type="password"
			placeholder="example@google.com"
			aria-label="password"
			required
		/> -->

		<BigButton>send magic link</BigButton>
	</form>
</section>
