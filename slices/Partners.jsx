export default function Partners({ slice }) {
	return (
		<div className="partners">
			<div className="partners__wrapper">
				<h2 className="partners__title">
					{slice.primary.title[0].text}
				</h2>
				<div className="partners__items">
					{slice.items.map((item, i) => (
						<img
							className="partners__items__partner"
							key={i}
							src={item.image.url}
							alt={item.image.alt}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
