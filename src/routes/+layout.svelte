<script>
	import Header from './Header.svelte';
	import Contacts from './Contacts.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="author" content="Ivan Golov" />
	<meta name="description" content="Navigation on website and Personal contacts" />
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
