import { Link } from 'react-router-dom'
import NavbarCss from '../styles/Navbar.css'

function Navbar() {
	return (
		<nav >
			<div className='navbar-container'>
				<h1>Sylwester Szwarczyński</h1>
				<ul >
					<li>
						<Link to='/about'>O mnie</Link>
					</li>
					<li>
						<Link to='/skills'>Umiejętności</Link>
					</li>
					<li>
						<Link to='/projects'>Projekty</Link>
					</li>
					<li>
						<Link to='/contact'>Kontakt</Link>
					</li>
					<li>
						<a href='git-sheet.pdf' download>
							CV
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
