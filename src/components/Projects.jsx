import ProjectCard from './ProjectCard'
import ss1 from '../assets/ss1.webp'
import ss2 from '../assets/ss2.webp'
import ss3 from '../assets/ss3.webp'
import ss4 from '../assets/ss4.webp'
import ProjectsCss from '../styles/Projects.module.css'

function Projects() {
	return (
		<section className={ProjectsCss.projects} id='projects'>
			<div className='container'>
				<h1>Projekty</h1>
				<div className={ProjectsCss.projectCards}>
					<ProjectCard
						title='Biuro podróży'
						tech={['HTML', 'CSS', 'JS']}
						description='Strona wizytówka firmy oferującej wycieczki po świecie'
						screenshot={ss1}></ProjectCard>

					<ProjectCard
						title='Biuro podróży'
						tech={['HTML', 'CSS', 'JS']}
						description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
						screenshot={ss2}></ProjectCard>

					<ProjectCard
						title='Biuro podróży'
						tech={['HTML', 'CSS', 'JS']}
						description='Strona wizytówka firmy oferującej wycieczki po świecie'
						screenshot={ss3}></ProjectCard>

					<ProjectCard
						title='Biuro podróży'
						tech={['HTML', 'CSS', 'JS']}
						description='Strona wizytówka firmy oferującej wycieczki po świecie'
						screenshot={ss4}></ProjectCard>

					<ProjectCard
						title='Biuro podróży'
						tech={['HTML', 'CSS', 'JS']}
						description='Strona wizytówka firmy oferującej wycieczki po świecie'
						screenshot={ss1}></ProjectCard>
				</div>
			</div>
		</section>
	)
}
export default Projects
