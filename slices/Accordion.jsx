import { PrismicRichText } from "@prismicio/react";

export default function Accordion({ slice }) {
	const { title } = slice.primary;

	return (
		<div className="accordion">
			<div className="accordion__wrapper">
				<h2 className="accordion__wrapper__title">{title[0].text}</h2>
				<div className="accordion__items">
					{slice.items.map(({ question, answer }, index) => (
						<details className="accordion__items__item" key={index}>
							<summary className="accordion__items__item__question">
								{question[0].text}
								<img
									className="accordion__items__item__question__icon"
									src="icons/arrow-down.svg"
									alt=""
									role="presentation"
								/>
							</summary>
							<div className="accordion__items__item__answer">
								<PrismicRichText field={answer} 
								components={{
									paragraph: ({children}) => <p>{children}</p>
								}}/>
							</div>
						</details>
					))}
				</div>
			</div>

			<img
				className="accordion__illustration"
				src="/illustrations/mountain-right.svg"
				role="presentation"
			/>
		</div>
	);
}
