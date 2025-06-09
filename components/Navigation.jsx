import { PrismicLink } from "@prismicio/react";
import getClassNames from "@/helpers/getClassNames";

export default function Navigation({ navigation }) {
	
	return (
		<nav className="navigation">
			<ul className="navigation__items">
				{navigation.map((item, index) => 
					<li
						className={getClassNames("navigation__items__item", {
							"is-button": item.primary.type === "button","is-subnav": item.slice_type === "multi_link"
						})}
						key={index}
					>
						<PrismicLink
							field={item.primary.link}
							className="navigation__items__item__link"
						>
							{item.primary.label}
						</PrismicLink>

					{item.slice_type ==="multi_link" && item.items && item.items.length > 0 && (
						<ul className="navigation__items navigation__items__item__subnav">
							{item.items.map((subitem) => (
							<li className="navigation__items__item__subnav__item" key={index}>
								<PrismicLink
									field={subitem.link}
									className="navigation__items__item__subnav__item__link">
										{subitem.label}
									</PrismicLink>
							</li>
							))}
						</ul>
					)}
					</li>
				)}
			</ul>
		</nav>
	);
}

