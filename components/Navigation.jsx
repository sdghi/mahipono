import { PrismicLink } from "@prismicio/react";
import getClassNames from "@/helpers/getClassNames";

export default function Navigation({ navigation }) {
	return (
		<nav className="navigation">
			<ul className="navigation__items">
				{navigation.map((item, index) => (
					<li
						className={getClassNames("navigation__items__item", {
							"is-button": item.primary.type === "button",
						})}
						key={index}
					>
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
