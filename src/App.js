import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
// import Hero from './components/Hero';
// import About from './components/About';
import Skills from './components/Skills'
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					{/* <Route path='/' element={<Hero />} />
					<Route path='/about' element={<About />} /> */}
					<Route path='/skills' element={<Skills />} />
					{/* <Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} /> */}
				</Routes>

				<Footer />
			</div>
		</Router>
	)
}

export default App
