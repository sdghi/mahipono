import { PrismicRichText, PrismicLink } from "@prismicio/react";
import getClassNames from "@/helpers/getClassNames";

export default function TextSection({ slice }) {
	const {
		alignment,
		content_width,
		title,
		content,
		cta_content,
		cta_link,
		illustration_placement,
	} = slice.primary;

	const sliceStyles = getClassNames("text-section", {
		alignment,
		width: content_width,
	});

	return (
		<div className={sliceStyles}>
			<div className="text-section__wrapper">
				{title[0] && (
					<h2 className="text-section__title">{title[0].text}</h2>
				)}
				<PrismicRichText field={content} />
				{cta_content[0] && (
					<PrismicLink
						field={cta_link}
						className="text-section__link"
					>
						{cta_content[0].text}
					</PrismicLink>
				)}
			</div>

			{illustration_placement !== "none" && (
				<img
					className={`text-section-illustration text-section-illustration--${illustration_placement}`}
					src={
						illustration_placement === "left"
							? "/illustrations/mountain.svg"
							: "/illustrations/mountain-right.svg"
					}
					alt=""
					role="presentation"
				/>
			)}
		</div>
	);
}
