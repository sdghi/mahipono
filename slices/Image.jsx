import { PrismicRichText } from "@prismicio/react";

export default function Image({ slice }) {
	const { image, caption } = slice.primary;
	return (
		<div className="image">
			<figure className="image__figure">
				<img
					className="image__figure__image"
					src={image.url}
					alt={image.alt}
				/>
				<figcaption className="image__figure__caption">
					<PrismicRichText field={caption} />
				</figcaption>
			</figure>
		</div>
	);
}
