export default function MobileNavToggle({
	toggleMobileNav,
	isMobileNavActive,
}) {
	return (
		<button
			className="header__mobile-nav-toggle"
			aria-label="Toggle mobile navigation"
			onClick={toggleMobileNav}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="29"
				height="24"
				viewBox="0 0 29 24"
			>
				<rect
					className="burger-top"
					id="Rectangle_89"
					data-name="Rectangle 89"
					width="29"
					height="4"
					y={isMobileNavActive ? 10 : 0}
					transform={`rotate(${isMobileNavActive ? "45" : "0"})`}
					fill="#fff"
				/>
				<rect
					className="burger-middle"
					id="Rectangle_90"
					data-name="Rectangle 90"
					width={isMobileNavActive ? 0 : 29}
					height="4"
					fill="#fff"
					y="10"
				/>
				<rect
					className="burger-bottom"
					id="Rectangle_91"
					data-name="Rectangle 91"
					width="29"
					height="4"
					fill="#fff"
					y={isMobileNavActive ? 10 : 20}
					transform={`rotate(${isMobileNavActive ? "-45" : "0"})`}
				/>
			</svg>
		</button>
	);
}
