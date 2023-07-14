<script>
	import project_1 from '$lib/images/projects/pr1.jpg';
	import project_2 from '$lib/images/projects/pr2.jpg';
	import project_3 from '$lib/images/projects/pr3.jpg';
	import img from "$lib/images/icons/projects.png"
</script>

<svelte:head>
	<title>Projects</title>
	<link rel="shortcut icon" type="image/jpg" href={img} />
	<meta name="author" content="Ivan Golov" />
	<meta name="description" content="My future projects" />
</svelte:head>

<div class="text-column">
	<section class="portfolio">
		<div class="container">
			<div class="portfolio-title">
				<h2 class="title-1">Future projects</h2>
			</div>

			<div class="project">
				<img class="project-img" src={project_3} alt="project 1" />
				<h3 class="project-title">
					<a href=" ">Online fashion store - Homepage </a>
				</h3>
			</div>

			<div class="project">
				<img class="project-img" src={project_2} alt="project 2" />
				<h3 class="project-title">
					<a href=" ">Reebok Store - Concept </a>
				</h3>
			</div>

			<div class="project">
				<img class="project-img" src={project_1} alt="project 3" />
				<h3 class="project-title">
					<a href=" ">Online fashion store - Homepage </a>
				</h3>
			</div>
		</div>
	</section>
</div>

<style>
	.portfolio {
		background-color: white;
		padding: 90px 0;
	}

	.portfolio-title {
		margin-bottom: 70px;
		text-align: center;
	}

	.project {
		text-align: center;
	}

	.project-img {
		margin-bottom: 40px;
	}

	.project-title {
		font-size: 18px;
	}

	.project-title a {
		color: #000;
		text-decoration: underline;
	}

	.project + .project {
		margin-top: 90px;
	}
</style>
