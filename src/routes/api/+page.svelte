<script lang="ts">
	export let data;
	import img from "$lib/images/icons/api.png"
</script>

<svelte:head>
	<title>API</title>
	<link rel="shortcut icon" type="image/jpg" href={img}/>
	<meta name="author" content="Ivan Golov" />
	<meta name="description" content="My experiense of interacting with API" />
</svelte:head>

<div class="text-column">
	<section class="API-experience">
		<div class="container">
			<div class="API_title">
				<h2 class="title-1">Joke!!!</h2>
			</div>

			<div class="comic">
				<h1>{data.comic.safe_title}</h1>
				<img src={data.comic.img} alt={data.comic.alt} />
				<p>{data.comic.dataInfo}</p>
			</div>
		</div>
	</section>
</div>

<style>
	.comic {
		color: white;
		font-size: 20px;
		padding-top: 20px;
	}

	.comic h1 {
		font-size: 30px;
	}
	.comic p {
		padding-top: 10px;
	}

	.API-experience {
		background-color: #313131;
		padding: 70px 0;
		text-align: center;
	}

	.API_title {
		text-align: center;
		color: white;
		padding-bottom: 15px;
	}
</style>
