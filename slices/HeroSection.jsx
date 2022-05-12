export default function HeroSection({ slice }) {
	const { hero_image, center_title, hero_text } = slice.primary;
	return (
		<div className="hero-section">
			<img
				className="hero-section__image"
				src={hero_image.url}
				alt={hero_image.alt}
			/>
			<div className="hero-section__wrapper">
				{hero_text && (
					<h1
						className={
							center_title
								? "hero-section__title--centered"
								: "hero-section__title"
						}
					>
						{hero_text[0].text}
					</h1>
				)}
			</div>
		</div>
	);
}
