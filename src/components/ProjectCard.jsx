import ProjectsCss from '../styles/Projects.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export default function ProjectCard({ screenshot, title, tech = [], description }) {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<article className={ProjectsCss.projectCard} data-aos='flip-left' data-aos-delay="200">
			<div className={ProjectsCss.projectCardMedia}>
				<img src={screenshot} alt={`${title} — zrzut ekranu`} className={ProjectsCss.projectCardScreenshot} />
			</div>

			<div className={ProjectsCss.projectCardbody}>
				<h3 id={`title-${title}`} className={ProjectsCss.projectCardTitle}>
					{title}
				</h3>

				<p className={ProjectsCss.projectCardTech}>
					{tech.map((t, i) => (
						<span key={t} className={ProjectsCss.projectCardTechItem}>
							{t}
							{/* {i < tech.length - 1 ? ' • ' : ''} */}
						</span>
					))}
				</p>

				<p className={ProjectsCss.projectCardDesc}>{description}</p>
			</div>

			<div className={ProjectsCss.projectCardActions}>
				<a className={ProjectsCss.projectCardBtn} href='www.google.com' onClick={e => e.preventDefault()}>
					Zobacz projekt
				</a>
			</div>
		</article>
	)
}
