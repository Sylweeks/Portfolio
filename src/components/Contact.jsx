import ContactCss from '../styles/Contact.module.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [isSending, setIsSending] = useState(false)
	const [captchaValue, setCaptchaValue] = useState(null)

	useEffect(() => {
		AOS.init()
	}, [])

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (isSending) return
		if (!captchaValue) {
			alert('Potwierdź, że nie jesteś robotem!')
			return
		}
		setIsSending(true)

		emailjs
			.send(
				'service_7gow31v',
				'template_07la89r',
				formData,
				'Oy9m653i0Lki_hC2V' // public key
			)
			.then(
				() => {
					alert('Wiadomość wysłana!')
					setFormData({ name: '', email: '', message: '' })
					setTimeout(() => setIsSending(false), 30000)
				},
				error => {
					console.error('Error:', error)
					alert('Coś poszło nie tak...')
					setIsSending(false)
				}
			)
	}

	return (
		<section className={ContactCss.contactSection} id='contact'>
			<h1 data-aos='zoom-in'>Kontakt</h1>
			<div className={ContactCss.contactContainer} data-aos='zoom-in'>
				{/* LEFT SIDE */}
				<div className={ContactCss.contactLeft}>
					<form className={ContactCss.contactForm} onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Imię'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							minLength={2}
						/>
						<input
							type='email'
							placeholder='Email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<textarea
							placeholder='Wiadomość'
							rows='5'
							name='message'
							value={formData.message}
							onChange={handleChange}
							required
							minLength={5}></textarea>

						<ReCAPTCHA
							sitekey='6LduFhUsAAAAAFc-iR1rMZIwpLu2b5jabT9zIz9d' // Site Key
							onChange={value => setCaptchaValue(value)}
						/>

						<button type='submit' disabled={isSending}>
							{isSending ? 'Wysyłanie...' : 'Wyślij'}
						</button>
					</form>

					<p className={ContactCss.altContact}>
						Preferujesz kontakt bez formularza?
						<br />
						Napisz na: <strong>sylwester.szwarczynski@gmail.com</strong>
					</p>
				</div>

				{/* RIGHT SIDE */}
				<div className={ContactCss.contactRight}>
					<div className={ContactCss.infoGrid}>
						<a
							href='https://github.com/Sylweeks'
							target='_blank'
							rel='noopener noreferrer'
							className={ContactCss.infoCard}>
							<FaGithub size={32} />
							<span>GitHub</span>
						</a>

						<a
							href='https://www.linkedin.com/in/sylwester-szwarczy%C5%84ski-4387091a6/'
							className={ContactCss.infoCard}
							target='_blank'
							rel='noopener noreferrer'>
							<FaLinkedin size={32} />
							<span>LinkedIn</span>
						</a>

						<a href='mailto:sylwester.szwarczynski@gmail.com' className={ContactCss.infoCard}>
							<FaEnvelope size={32} />
							<span>Email</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
