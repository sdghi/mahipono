import { PrismicRichText, PrismicLink } from "@prismicio/react";

export default function TextSection({ slice }) {
	console.log("slice", slice);

	return (
		<div
			className={`text-section ${
				slice.primary.alignment
					? `text-section--${slice.primary.alignment}`
					: ""
			} ${
				slice.primary.content_width
					? `text-section--${slice.primary.content_width}`
					: ""
			}
				`}
		>
			<div className="text-section__wrapper">
				<h2 className="text-section__title">
					{slice.primary.title[0].text}
				</h2>
				<PrismicRichText field={slice.primary.content} />
				{slice.primary.cta_content[0] && (
					<PrismicLink
						field={slice.primary.cta_link}
						className="text-section__link"
					>
						{slice.primary.cta_content[0].text}
					</PrismicLink>
				)}
			</div>

			<img
				className={`text-section-illustration text-section-illustration--${slice.primary.illustration_placement}`}
				src={
					slice.primary.illustration_placement === "left"
						? "/illustrations/mountain.svg"
						: "/illustrations/mountain-right.svg"
				}
				alt=""
			/>
		</div>
	);
}
