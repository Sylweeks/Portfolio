import ProfilePhoto from '../assets/ProfilePhoto.webp'
import AboutCss from '../styles/About.module.css'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function About() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<>
			<section className={AboutCss.aboutMe} id='about'>
				<div className={AboutCss.container} data-aos='fade-up' data-aos-duration='30000'>
					<h1>O mnie</h1>
					<div className={AboutCss.aboutMeContent}>
						<div className={AboutCss.aboutMeImg}>
							<img src={ProfilePhoto} alt='Moje zdjęcie profilowe' />
							<div className={AboutCss.aboutMeIcons}>
								<a
									href='https://www.linkedin.com/in/sylwester-szwarczy%C5%84ski-4387091a6/'
									target='_blank'
									rel='noopener noreferrer'>
									<FaLinkedin />
								</a>

								<a href='mailto:sylwester.szwarczynski@gmail.com' target='_blank' rel='noopener noreferrer'>
									<MdEmail />
								</a>
							</div>
						</div>
						<div className={AboutCss.aboutMeText}>
							<p>
								Cześć! Jestem Sylwester i aktualnie szkole swoje umiejętności aby pracować jako Junior Frontend
								Developer i nabyć pierwszego doświadczenia komercyjnego. Moja ścieżka do programowania rozpoczęła się w
								technikum na kierunku informatycznym. Na studiach ukończylem kierunek Elektronika ze specjalizacją
								"Zastosowanie Inżynierii Komputerowej w Technice".
							</p>
							<h3>Moje Technologiczne Fundamenty</h3>
							<p>
								Szybko przekształcam tę wiedzę w praktykę, koncentrując się na ekosystemie Frontend. W pracy opieram się
								na nowoczesnym stosie technologicznym i efektywnych narzędziach:
							</p>
							<ul>
								<li>Języki i Biblioteki: React, JavaScript (ES6+), HTML5/CSS3</li>
								<li>Stylizacja i Struktura: Sass, Bootstrap</li>
								<li>Narzędzia: Git, VS Code (do pisania kodu), Postman (do testowania API), SQL</li>
							</ul>
							<p>
								Nieustannie poszerzam swoje kompetencje korzystając głównie z kursów na platformie Udemy (Maximilian
								Schwarzmüller - React), co zapewnia mi solidną i aktualną wiedzę. Poszukuję swojej pierwszej pracy w
								roli Junior Frontend Developera, aby móc przełożyć teorię i własne projekty na realne wyzwania
								komercyjne. Cechuje mnie szybka i chętna nauka – to cecha, którą pielęgnuję zarówno w kodowaniu, jak i w
								życiu.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
