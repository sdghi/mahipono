import { PrismicLink } from "@prismicio/react";
import getClassNames from "@/helpers/getClassNames";

export default function MobileNavigation({ isMobileNavActive, navigation }) {
	const classNames = getClassNames("mobile-navigation", {
		visible: isMobileNavActive,
	});

	return (
		<nav className={classNames}>
			<ul className="mobile-navigation__items">
				{navigation.map((item, index) => (
					<li className="mobile-navigation__items__item" key={index}>
						<PrismicLink
							field={item.primary.link}
							className="mobile-navigation__items__item__link"
						>
							{item.primary.label}
						</PrismicLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
