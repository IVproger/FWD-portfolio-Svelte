<script>
	import Header from './Header.svelte';
	import Contacts from './Contacts.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>Home</title>
	<link rel="shortcut icon" type="image/jpg" href="" />
	<meta name="author" content="Ivan Golov" />
	<meta name="description" content=" " />
</svelte:head>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<Contacts />
</div>

<style>
</style>
