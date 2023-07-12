<script lang="ts">
	import moment from 'moment';

	type ComicData = {
		alt: string;
		safe_title: string;
		img: string;
		day: number;
		month: number;
		year: number;
	};

	const email = 'i.golov@innopolis.university';
	const param = new URLSearchParams();
	param.append('email', email);

	let comicData: ComicData = { alt: '', safe_title: '', img: '', day: 0, month: 0, year: 0 };
	let dataInfo = '';

	async function ShowComic() {
		try {
			const res = await fetch(`https://fwd.innopolis.app/api/hw2?${param}`);
			const comicId = await res.json();

			const res1 = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
			const data: ComicData = await res1.json();

			comicData.img = data.img;
			comicData.alt = data.alt;
			comicData.safe_title = data.safe_title;
			const { day, month, year } = data;
			const date = new Date(year, month, day);
			let dateOfLoading = date.toLocaleDateString();
			let timeAgo = moment(date).fromNow();
			dataInfo = `Date of loading: ${dateOfLoading} (${timeAgo})`;
		} catch (error) {
			console.log('Error:', error);
		}
	}
</script>

<div class="text-column">
	<section class="API-experience">
		<div class="container">
			<div class="API_title">
				<h2 class="title-1">Joke!!!</h2>
			</div>

			<button on:click|preventDefault={ShowComic} type="button" class="button-joke">
				See the picture !!!
			</button>

			<div class="comic">
				<h1>{comicData.safe_title}</h1>
				<img src={comicData.img} alt={comicData.alt} />
				<p>{dataInfo}</p>
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
