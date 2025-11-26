import NavbarCss from '../styles/Navbar.module.css'
import { useState } from 'react'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	return (
		<nav className={NavbarCss.navbar}>
			<div className={NavbarCss.navbarContainer}>
				<a href='top'>
					<h1>Sylwester Szwarczyński</h1>
				</a>
				<ul className={`${NavbarCss.navLinks} ${isOpen ? NavbarCss.active : ''}`}>
					<li>
						<a href='#about' onClick={toggleMenu}>
							O mnie
						</a>
					</li>
					<li>
						<a href='#skills' onClick={toggleMenu}>
							Umiejętności
						</a>
					</li>
					<li>
						<a href='#projects' onClick={toggleMenu}>
							Projekty
						</a>
					</li>
					<li>
						<a href='#contact' onClick={toggleMenu}>
							Kontakt
						</a>
					</li>
					<li className={NavbarCss.CVButton}>
						<a href='git-sheet.pdf' download onClick={toggleMenu}>
							Pobierz CV
						</a>
					</li>
				</ul>
				<div className={`${NavbarCss.burger} ${isOpen ? NavbarCss.toggle : ''}`} onClick={toggleMenu}>
					<div className={NavbarCss.line1}></div>
					<div className={NavbarCss.line2}></div>
					<div className={NavbarCss.line3}></div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
