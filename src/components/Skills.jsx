import { useState, useEffect } from 'react'
//import { SiRedux, SiNextdotjs, SiVercel, SiWebpack, SiJira, SiTrello, SiStyledcomponents, SiSass, SiBootstrap } from "react-icons/si";
import skillsCss from '../styles/Skills.module.css'
import { skillsData } from './SkillsData'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function SkillsSection() {
	const [activeTab, setActiveTab] = useState('react')
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<section className={skillsCss.skillsSection} id='skills'>
			<h1 className={skillsCss.sectionTitle} data-aos='zoom-in'>
				Umiejętności
			</h1>

			<div className={skillsCss.tabs}>
				{skillsData.map(tab => (
					<button
						key={tab.id}
						data-aos='zoom-in'
						onClick={() => setActiveTab(tab.id)}
						className={`${skillsCss.tabButton} ${activeTab === tab.id ? skillsCss.active : ''}`}>
						{tab.label}
					</button>
				))}
			</div>

			{skillsData
				.filter(tab => tab.id === activeTab)
				.map(tab => (
					<div key={tab.id} className={skillsCss.skillsList} data-aos='zoom-in' data-aos-duration='800'>
						<div className={skillsCss.skillsHeader}>
							<tab.icon className={skillsCss.icon} style={{ color: tab.color }} />
							<h3>{tab.label}</h3>
						</div>

						<ul>
							{tab.items.map(item => (
								<li key={item.listItem}>
									<item.icon className={skillsCss.itemIcon} style={{ color: item.color }} />
									{item.listItem}
								</li>
							))}
						</ul>
					</div>
				))}
		</section>
	)
}
