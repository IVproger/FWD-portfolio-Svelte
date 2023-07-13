<script>
	// import { base } from '$app/paths';
	import { page } from '$app/stores';
	import avatar from '$lib/images/header/ivan.png';
</script>

<head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
		integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</head>

<header class="header">
	<div class="container">
		<!-- Header nav -->
		<div class="header-nav">
			<a href="https://t.me/Ione_Golov" class="logo">Ivan</a>
			<nav id="nav" class="nav">
				<ul class="nav-list">
					<li class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a class="nav-link active" href="/">Home</a>
					</li>
					<li class="nav-item" aria-current={$page.url.pathname === '/skills' ? 'page' : undefined}>
						<a class="nav-link" href="/skills"> Skills </a>
					</li>
					<li class="nav-item" aria-current={$page.url.pathname === '/api' ? 'page' : undefined}>
						<a class="nav-link" href="/api"> API </a>
					</li>
					<li
						class="nav-item"
						aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
					>
						<a class="nav-link" href="/projects"> Projects </a>
					</li>
				</ul>
			</nav>
		</div>

		<!-- Header content -->
		<div class="header-row">
			<div class="header-content">
				<h1 class="header-heading">
					Ivan Golov <br />
					Startuper & Developer
				</h1>
				<p>
					I am a student at Innopolis University who is constantly developing and wants to change
					the world. I'm studying Data Analytics and AI, but that doesn't stop me from practicing in
					web development.
				</p>
			</div>

			<div class="header-img">
				<picture>
					<img src={avatar} alt="owvner" />
				</picture>
			</div>
		</div>
	</div>
</header>

<style>
	/* Header */

	.header {
		padding-top: 46px;
		background-color: #f1f1f1;
		padding-bottom: 40px;
	}

	.header-nav {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 30px;
	}

	.logo {
		position: relative;
		padding: 0 12px 3px 0;
		font-weight: 700;
		font-size: 32px;
		color: #000;
		line-height: 1;
	}

	.logo::after {
		position: absolute;
		right: 0;
		bottom: 0;
		content: '';
		display: block;
		width: 8px;
		height: 8px;
		background-color: #fda300;
		border-radius: 50%;
	}

	/* Nav block */
	.nav-list {
		display: flex;
		column-gap: 50px;
		font-weight: 500;
		font-size: 18px;
	}

	.nav-link {
		color: #000;
	}

	.nav-link:hover {
		color: #606060;
	}

	/* Header-content */

	.header-row {
		display: flex;
		justify-content: space-between;
		column-gap: 30px;
		background-color: white;
		border-radius: 3%;
	}

	.header-content {
		width: 500px;
		margin-top: 200px;
		padding-left: 40px;
		line-height: 1.3;
	}

	.header-heading {
		margin-bottom: 20px;
		font-weight: 600;
		font-size: 40px;
	}

	.header-img {
		width: 500px;
	}

	.header-content p {
		line-height: 2;
	}
</style>
