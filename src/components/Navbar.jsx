import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className='bg-gray-800 text-white p-4'>
			<div className='container mx-auto flex justify-between'>
				<h1 className='text-xl font-bold'>Sylwester Szwarczyński</h1>
				<ul className='flex space-x-4'>
					<li>
						<Link to='/about'>O mnie</Link>
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
