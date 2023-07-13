import moment from 'moment';

// export const prerender = true;

export interface ComicData {
	alt: string;
	safe_title: string;
	img: string;
	day: number;
	month: number;
	year: number;
	dataInfo: string;
}

export async function load() {
	const email = 'i.golov@innopolis.university';
	const param = new URLSearchParams();
	param.append('email', email);

	const res = await fetch(`https://fwd.innopolis.app/api/hw2?${param}`);
	const comicId = await res.json();

	const res1 = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
	const data: ComicData = await res1.json();

	const { day, month, year } = data;
	const date = new Date(year, month, day);
	const dateOfLoading = date.toLocaleDateString();
	const timeAgo = moment(date).fromNow();
	

	return {
		comic: {
			alt: data.alt,
			safe_title: data.safe_title,
			img: data.img,
			dataInfo: `Date of loading: ${dateOfLoading} (${timeAgo})`
		}
	};
}
