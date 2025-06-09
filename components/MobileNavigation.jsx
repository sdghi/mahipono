import { PrismicLink } from "@prismicio/react";
import getClassNames from "@/helpers/getClassNames";

export default function MobileNavigation({
	isMobileNavActive,
	navigation,
	toggleMobileNav,
}) {
	const classNames = getClassNames("mobile-navigation", {
		visible: isMobileNavActive,
	});

	return (
		<nav className={classNames}>
			<ul className="mobile-navigation__items">
				{navigation.map((item, index) => (
					<li className="mobile-navigation__items__item" key={index}>
						{item.slice_type ==="multi_link" && item.items && item.items.length > 0 ? (
							<details className="mobile-navigation__items__item__details">
								<summary className="mobile-navigation__items__item__details__summary">{item.primary.label} <span className="mobile-navigation__items__item__details__expand-icon"></span></summary>
								<ul className="mobile-navigation__items__item__details__list">
									{item.items.map((subitem, subIndex) => (
									<li className="mobile-navigation__items__item__details__list__item">
										<PrismicLink 
										field={subitem.link}
										className="mobile-navigation__items__item__details__list__item__link">
											{subitem.label}
										</PrismicLink>
									</li>
									))}
								</ul>
							</details>
						) : (
						<PrismicLink
							field={item.primary.link}
							className="mobile-navigation__items__item__link"
							onClick={toggleMobileNav}
						>
							{item.primary.label}
						</PrismicLink>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}
