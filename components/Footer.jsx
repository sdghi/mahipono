export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__banner">
				<img
					className="footer__banner__illustration"
					src="/illustrations/footer-bg.svg"
					role="presentation"
				/>
			</div>
			<div className="footer__wrapper">
				<div className="footer__wrapper__content">
					copyright &copy;{new Date().getFullYear()} by Mahi Pono
				</div>

				<div className="footer__wrapper__social">
					<a
						className="footer__wrapper__social__link"
						href="https://www.instagram.com/mahipono/"
						target="_blank"
						rel="noreferrer"
						aria-label="Visit our Instagram"
					>
						<img
							className="footer__wrapper__social__link__icon"
							src="/icons/instagram.svg"
							alt="instagram icon"
						/>
					</a>
					<a
						className="footer__wrapper__social__link"
						href="https://www.facebook.com/mahipono/"
						target="_blank"
						rel="noreferrer"
						aria-label="Visit our Facebook"
					>
						<img
							className="footer__wrapper__social__link__icon"
							src="/icons/facebook.svg"
							alt="facebook icon"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}
