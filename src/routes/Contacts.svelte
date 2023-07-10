<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import github from '$lib/images/icons/github-sign.png';
	import tg from '$lib/images/icons/telegram.png';
    import hh_ru from '$lib/images/icons/hh_letter_icon_216445.png';
    import email from '$lib/images/icons/email.png';
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

<footer class="contacts">
	<div class="container">
		<div class="contacts-title">
			<h2 class="title-1">Contacts</h2>
		</div>

		<div class="contacts-content">
			<p>
				Want to know more or just chat?<br />
				You are welcome!
			</p>
		</div>

		<div class="contacts-button">
			<a href="#!" class="btn"> Send message</a>
		</div>

		<div class="contacts-socials">
			<a href="https://github.com/IVproger" id="gh-link">
				<img src={github} alt="github" class="img-contacts" />
			</a>
			<a href="https://t.me/Ione_Golov" id="tg-link">
				<img src={tg} alt="telegram" class="img-contacts" />
			</a>
			<a
				id="hh_ru-link"
				href="https://innopolis.hh.ru/applicant/settings?from=header_new&hhtmFromLabel=header_new&hhtmFrom=main"
			>
				<img src={hh_ru} alt="min-hh-red" class="img-contacts" />
			</a>
			<a href="https://mail.google.com/mail/u/1/#inbox" id="email" class="img-contacts">
				<img src={email} alt="email" />
			</a>
		</div>

		<div class="contacts-footer">
			<p>
				Contact me on <br />
				Github, Telegram, HH.ru or email
			</p>
		</div>
	</div>
</footer>

<style>
	/* Footer */
	.contacts {
		padding: 90px 0;
		text-align: center;
        background-color: #f1f1f1;
	}

	.contacts-title {
		margin-bottom: 40px;
	}

	.contacts-content {
		max-width: 480px;
		font-size: 18px;
		margin: 0 auto 40px;
	}

	.contacts-button {
		margin-bottom: 80px;
	}

	.contacts-socials {
		display: flex;
		justify-content: center;
		column-gap: 60px;
		align-items: center;
		margin-bottom: 40px;
	}

	.contacts-footer {
		color: #828282;
	}

	.img-contacts {
		max-width: 60px;
	}
</style>
