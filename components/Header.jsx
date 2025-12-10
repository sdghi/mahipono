import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import MobileNavToggle from "@/components/MobileNavToggle";

export default function Header({ navigation }) {
	const [isMobileNavActive, setIsMobileNavActive] = useState(false);

	function toggleMobileNav() {
		setIsMobileNavActive(!isMobileNavActive);
	}

	return (
        <>
            <header className="header">
				<div className="header__wrapper">
					<Link href="/" arial-label="Go to the homepage">

                        <img src="/site-branding.svg" role="presentation" />

                    </Link>
					<MobileNavToggle
						toggleMobileNav={toggleMobileNav}
						isMobileNavActive={isMobileNavActive}
					/>
					<Navigation navigation={navigation} />
				</div>
				<MobileNavigation
					isMobileNavActive={isMobileNavActive}
					navigation={navigation}
					toggleMobileNav={toggleMobileNav}
				/>
			</header>
        </>
    );
}
