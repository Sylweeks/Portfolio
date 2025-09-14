import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
function Skills() {
	return (
		<section className='py-10'>
			<h2 className='text-3xl text-center'>Umiejętności</h2>
			<div className='flex justify-center space-x-6 mt-6'>
				<FaHtml5 className='text-5xl text-orange-600' />
				<FaCss3Alt className='text-5xl text-blue-600' />
				<FaReact className='text-5xl text-cyan-500' />
			</div>
		</section>
	)
}

export default Skills
