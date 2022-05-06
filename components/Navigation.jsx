import { PrismicLink, PrismicText } from "@prismicio/react";

export default function Navigation({ navigation }) {
	return (
		<nav className="navigation">
			<ul className="navigation__items">
				{navigation.map((item, index) => (
					<li className="navigation__items__item" key={index}>
						<PrismicLink
							field={item.primary.link}
							className="navigation__items__item__link"
						>
							{item.primary.label}
						</PrismicLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
