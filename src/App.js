import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
