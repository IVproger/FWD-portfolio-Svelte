<script lang="ts">
	import moment from 'moment';

	interface ComicData {
		alt: string;
		safe_title: string;
		img: string;
		day: number;
		month: number;
		year: number;
	}

	const email = 'i.golov@innopolis.university';
	const param = new URLSearchParams();
	param.append('email', email);

	
async function ShowComic() {
		try {
			const res = await fetch(`https://fwd.innopolis.university/api/hw2?${param}`);
			const comicId = await res.json();

			const res1 = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
			const data: ComicData = await res1.json();

			const { alt, safe_title, img, day, month, year } = data;
			const date = new Date(year, month, day);
			const dateOfLoading = date.toLocaleDateString();
			const timeAgo = moment(date).fromNow();

			// const image = document.createElement('img') as HTMLImageElement;
			// image.src = img;
			// image.alt = alt;

			// const titleElement = document.createElement('h2') as HTMLHeadingElement;
			// titleElement.innerText = safe_title;

			// const dateElement = document.createElement('p') as HTMLParagraphElement;
			// dateElement.innerText = `Date of loading: ${dateOfLoading} (${timeAgo})`;

			// const container = document.getElementById('comic-container') as HTMLElement;
			// if (container != null) {
			// 	container.appendChild(titleElement);
			// 	container.appendChild(image);
			// 	container.appendChild(dateElement);
			// } else {
			// 	console.log('Error, container undefined');
			// }
		} catch (error) {
			console.log('Error:', error);
		}
	};
</script>

<svelte:head>
	<title>API</title>
	<meta name="description" content="" />
</svelte:head>

<div class="text-column">
	<section class="API-experience">
		<div class="container">
			<div class="API_title">
				<h2 class="title-1">Joke!!!</h2>
			</div>

			<button type="button" class="button-joke" id="button_API"> See the picture !!! </button>
		</div>
	</section>
</div>

<style>
	/* .comic-body {
		background-color: #313131;
	} */

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

	/* .joke {
		color: white;
	}

	.joke h2 {
		font-weight: 400;
		font-size: 20px;
		padding: 30px 0;
	} */

	/* .joke p {
		font-weight: 300;
		font-size: 15px;
		padding-top: 15px;
	}

	.new_btn {
		background-color: white;
		display: inline-block;
		border-radius: 30px;
		padding: 7px 22px;
		font-size: 18px;
		color: black;
		transition: background-color 0.2s ease-in, top 0.2s ease-in;
	} */
/* 
	.new_btn:hover,
	.new_btn:focus {
		background-color: #373737;
	} */

	.button-joke {
		background-color: white;
		font-size: 20px;
		border-radius: 50px;
		padding: 7px 7px;
	}

	.button-joke:hover,
	.button-joke:focus {
		background-color: #373737;
	}
</style>
