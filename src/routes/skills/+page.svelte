<script>
	import skill_1 from "$lib/images/icons/icon skill 1.svg";
	import skill_2 from "$lib/images/icons/icon skill 2.svg";
	import skill_3 from "$lib/images/icons/incon skill 3.svg";
</script>

<svelte:head>
	<title>Skills</title>
	<meta name="description" content="Page about personal skills" />
</svelte:head>

<div class="skills-title">
	<h2 class="title-1">Skills</h2>
</div>

<section class="skills">
	<div class="container">
		<div class="skills-row">
			<div class="skills-card">
				<img class="skills-card-img" src={skill_1} alt="skill 1" />
				<h3 class="skills-card-title">Project managment</h3>
				<p>I am able to manage different teams and complex projects.</p>
			</div>

			<div class="skills-card">
				<img class="skills-card-img"  src={skill_2} alt="skill 2" />
				<h3 class="skills-card-title">Tech skills</h3>
				<p>
					I know the base of Java, C++, Python. I am also actively learning web development and
					working with servers.
				</p>
			</div>

			<div class="skills-card">
				<img class="skills-card-img" src={skill_3} alt="skill 3" />
				<h3 class="skills-card-title">Languages</h3>
				<p>
					I speak English at the B2 level and have practical experience in business negotiations.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.skills {
		padding: 90px 0;
	}

	.skills-row {
		display: flex;
		column-gap: 30px;
		row-gap: 60px;
		flex-wrap: wrap;
	}

	.skills-card {
		flex: 1 1 0;
		min-width: 315px;
	}

	.skills-title {
		text-align: center;
		margin-top: 90px;
	}

	.skills-card-img {
		margin-bottom: 30px;
		width: 70px;
	}

	.skills-card-title {
		font-weight: 600;
		font-size: 24px;
		margin-bottom: 10px;
		text-transform: uppercase;
	}

	.skills-card p {
		line-height: 2;
	}
</style>
