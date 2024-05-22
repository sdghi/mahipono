import { createClient } from "../prismic";
import { PrismicRichText } from "@prismicio/react";
import Meta from "@/components/Meta";

export default function Contact({ page }) {
	const { title, description, phone_number, social_media } = page.data;
	const formattedNumber = phone_number[0].text
		.split(")")
		.join("-")
		.split(" ")
		.join("")
		.substring(1);
	return (
		<>
			<Meta title={title[0].text} />
			<div className="contact">
				<h1 className="contact__title">{title[0].text}</h1>
				<div className="contact__wrapper">
					<div className="contact__content">
						<div className="contact__content__body">
							<PrismicRichText field={description} />
						</div>
						<div className="contact__content__phone">
							<h2 className="contact__content__phone__title">
								PHONE NUMBER:
							</h2>
							<a
								className="contact__content__phone__number"
								href={`tel:${formattedNumber}`}
							>
								{phone_number[0].text}
							</a>
						</div>
						<div className="contact__content__social">
							<h2 className="contact__content__social__title">
								SOCIAL MEDIA:
							</h2>
							<div className="contact__content__social__items">
								{social_media.map((item, i) => (
									<a
										className="contact__content__social__items__item"
										href={item.media_link.url}
										target="_blank"
										rel="noreferrer"
										key={i}
										aria-label={item.social_title[0].text}
									>
										<img
											src={`/social/${item.social_title[0].text.toLowerCase()}.svg`}
											alt={`${item.social_title[0].text.toLowerCase()} icon`}
										/>
									</a>
								))}
							</div>
						</div>
					</div>
					<iframe
						className="contact__embed"
						id="JotFormIFrame-90524458668165"
						title="Mahi Pono Webpage Contact Us "
						allowtransparency="true"
						allowFullScreen=""
						allow="geolocation; microphone; camera"
						src="https://form.jotform.com/deakin09/MahiPonoContactUs"
						frameBorder="0"
						scrolling="yes"
					></iframe>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps({ previewData }) {
	const client = createClient({ previewData });

	const page = await client.getSingle("contact");
	return {
		props: { page },
	};
}
