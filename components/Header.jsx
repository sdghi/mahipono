import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Header({ navigation }) {
	return (
		<header className="header">
			<div className="header__wrapper">
				<Link href="/">mahipono</Link>
				<Navigation navigation={navigation} />
			</div>
		</header>
	);
}
