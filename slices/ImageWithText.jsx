import { PrismicRichText, PrismicLink } from "@prismicio/react";
import getClassNames from "@/helpers/getClassNames";

export default function ImageWithText({ slice }) {
	const {
		cta_content,
		cta_link,
		image,
		text_background_color,
		text_content,
		image_placement,
		title,
	} = slice.primary;

	const homeClassNames = getClassNames("iwt", {
		image: image_placement,
		background: text_background_color,
	});

	return (
		<div className={homeClassNames}>
			<div className="iwt__wrapper">
				<div className="iwt__main">
					<div className="iwt__content">
						<h2 className="iwt__content__title">{title[0].text}</h2>
						<div className="iwt__content__body">
							<PrismicRichText field={text_content} />
						</div>
						{cta_content[0] && (
							<PrismicLink
								className="iwt__content__link"
								field={cta_link}
							>
								{cta_content[0].text}
							</PrismicLink>
						)}
					</div>
				</div>
				<div className="iwt__image-container">
					<img
						className="iwt__image-container__image"
						src={image.url}
						alt={image.alt}
					/>
				</div>
			</div>
		</div>
	);
}
