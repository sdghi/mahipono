import { PrismicRichText, PrismicLink } from "@prismicio/react";
import getClassNames from "@/helpers/getClassNames";

export default function EmbedWithText({ slice }) {
	const {
		cta_content,
		cta_link,
		embed_placement,
		embed,
		link,
		text_background_color,
		title,
		text_content,
	} = slice.primary;

	const classNames = getClassNames("embed-with-text", {
		embed: embed_placement,
		background: text_background_color,
	});
	return (
		<div className={classNames}>
			<div className="embed-with-text__wrapper">
				<div className="embed-with-text__main">
					<div className="embed-with-text__content">
						<h2 className="embed-with-text__content__title">
							{title[0].text}
						</h2>
						<div className="embed-with-text__content__body">
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
				{embed.html && (
					<div
						className="embed-with-text__embed-container"
						dangerouslySetInnerHTML={{ __html: embed.html }}
					></div>
				)}

				{!embed.html && (
					<div className="embed-with-text__embed-container">
						<iframe
							title={title[0].text}
							src={link.url}
							frameBorder="0"
						></iframe>
					</div>
				)}
			</div>
		</div>
	);
}
