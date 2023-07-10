<script>
	import Header from './Header.svelte';
	import Contacts from './Contacts.svelte';
	import './styles.css';
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<Contacts />
</div>

<style>


</style>
