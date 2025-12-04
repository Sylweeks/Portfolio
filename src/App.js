import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero'
import { lazy } from 'react'
// import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

const Skills = lazy(() => import('./components/Skills'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
	return (
		<div className='App'>
			<Navbar />

			<Hero id='hero' />
			<About id='about' />
			<Skills id='skills' />
			<Projects id='projects' />
			<Contact id='contact' />
			{/* <Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} /> */}

			<Footer />
		</div>
	)
}

export default App
