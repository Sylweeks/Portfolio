import { Link } from 'react-router-dom'

function Hero() {
	return (
		<section className='bg-blue-500 text-white text-center py-20'>
			<h1 className='text-4xl font-bold'>Cześć, jestem Jan Kowalski</h1>
			<h2 className='text-2xl mt-2'>Junior Frontend Developer</h2>
			<p className='mt-4'>Tworzę responsywne strony z HTML, CSS i JS</p>
			<Link to='/projects'>
				<button className='mt-6 bg-white text-blue-500 px-6 py-2 rounded'>Zobacz projekty</button>
			</Link>
			<img src='/assets/images/coding-icon.png' alt='Ikona kodowania' className='mt-6 mx-auto w-32' />
		</section>
	)
}

export default Hero
