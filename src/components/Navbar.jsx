import { Link } from 'react-router-dom'
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
				<h1>Sylwester Szwarczyński</h1>
				<ul className={`${NavbarCss.navLinks} ${isOpen ? NavbarCss.active : ''}`}>
					<li>
						<Link to='/about' onClick={toggleMenu}>
							About me
						</Link>
					</li>
					<li>
						<Link to='/skills' onClick={toggleMenu}>
							Skills
						</Link>
					</li>
					<li>
						<Link to='/projects' onClick={toggleMenu}>
							Projects
						</Link>
					</li>
					<li>
						<Link to='/contact' onClick={toggleMenu}>
							Contact
						</Link>
					</li>
					<li className={NavbarCss.CVButton}>
						<a href='git-sheet.pdf' download onClick={toggleMenu}>
							Download CV
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
