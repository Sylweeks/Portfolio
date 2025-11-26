import footerCss from '../styles/Footer.module.css'

export default function Footer() {
	return (
		<footer className={footerCss.footer}>
			<p className={footerCss.footerCopy}>© 2025 Sylwester Szwarczyński</p>

			<a href='#top' className={footerCss.footerBack}>
				Powrót na górę
				<span className={footerCss.arrow}>↑</span>
			</a>
		</footer>
	)
}
