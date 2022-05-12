import { PrismicRichText, PrismicLink } from "@prismicio/react";
import getClassNames from "@/helpers/getClassNames";

export default function ImageWithText({ slice }) {
	const {
		content_width,
		cta_content,
		cta_link,
		image,
		text_background_color,
		text_content,
		image_placement,
		title,
		alignment,
	} = slice.primary;

	const homeClassNames = getClassNames("iwt", {
		content: content_width,
		alignment,
		image: image_placement,
		background: text_background_color,
	});

	return (
		<div className={homeClassNames}>
			<div className="iwt__wrapper">
				<img className="iwt__image" src={image.url} alt={image.alt} />
				<div className="itw__content">
					<h2 className="iwt__content__title">{title[0].text}</h2>
					<PrismicRichText field={text_content} />
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
		</div>
	);
}
