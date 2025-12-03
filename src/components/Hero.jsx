import HeroCss from '../styles/Hero.module.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroBackground from '../assets/HeroBackgroundLarge.jpg'

function Hero() {
	useEffect(() => {
		AOS.init({ duration: 600, offset: 60 })
	}, [])

	return (
		<section className={HeroCss.hero}>
			<img
				src={HeroBackground}
				alt='Hero background'
				className='Hero_background'
				fetchPriority='high'
				loading='eager'
			/>
			<div className={HeroCss.heroShadow}></div>
			<div className={HeroCss.heroContent} data-aos='zoom-in'>
				<h1 className={HeroCss.heroName}>Cześć, jestem Sylwester</h1>
				<h3 className={HeroCss.heroRole}>Junior React Developer</h3>
				<p className={HeroCss.heroDescription}>
					Tworzę nowoczesne aplikacje webowe w React. Szukam pierwszej pracy w IT.
				</p>
				<div className={HeroCss.heroButtons}>
					<a href='#projects'>
						<button className={`${HeroCss.btn} ${HeroCss.btnPrimary}`}>Zobacz projekty</button>
					</a>

					<a href='#contact'>
						<button className={`${HeroCss.btn} ${HeroCss.btnSecondary}`}>Kontakt</button>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
