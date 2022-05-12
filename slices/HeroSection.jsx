export default function HeroSection({ slice }) {
	return (
		<div className="hero-section">
			<img
				className="hero-section__image"
				src={slice.primary.hero_image.url}
				alt={slice.primary.hero_image.alt}
			/>
			<div className="hero-section__wrapper">
				{slice.primary.hero_text && (
					<h1
						className={
							slice.primary.center_title
								? "hero-section__title--centered"
								: "hero-section__title"
						}
					>
						{slice.primary.hero_text[0].text}
					</h1>
				)}
			</div>
		</div>
	);
}
