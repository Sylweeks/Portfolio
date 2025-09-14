function Projects() {
	const projects = [
		{ title: 'Projekt 1', img: '/assets/images/project1.png', demo: 'link', github: 'link' },
		// Dodaj kolejne
	]

	return (
		<section className='py-10'>
			<h2 className='text-3xl text-center'>Projekty</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
				{projects.map((project, index) => (
					<div key={index} className='border p-4'>
						<img src={project.img} alt={project.title} className='w-full h-48 object-cover' />
						<h3 className='text-xl mt-2'>{project.title}</h3>
						<a href={project.demo} className='text-blue-500'>
							Demo
						</a>{' '}
						|
						<a href={project.github} className='text-blue-500'>
							GitHub
						</a>
					</div>
				))}
			</div>
		</section>
	)
}
export default Projects
