import { PrismicRichText } from "@prismicio/react";
import getClassNames from "@/helpers/getClassNames";

export default function IllustrationCollection({ slice }) {
	console.log("slice", slice);
	const { title, grid_gap } = slice.primary;

	const classNames = getClassNames("ic", {
		gap: grid_gap,
	});

	return (
		<div className={classNames}>
			<div className="ic__wrapper">
				<h2 className="ic__title">{title[0].text}</h2>
				<div className="ic__items">
					{slice.items.map(
						({ content, illustration, title }, index) => (
							<div className="ic__items__item" key={index}>
								<img
									className="ic__items__item__image"
									src={illustration.url}
									alt={illustration.alt}
								/>
								<h3 className="ic__items__item__title">
									{title[0].text}
								</h3>
								<div className="ic__items__item__body">
									<PrismicRichText field={content} />
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}
