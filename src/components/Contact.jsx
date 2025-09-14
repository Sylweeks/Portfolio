import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY')
      .then(() => alert('Wiadomość wysłana!'))
      .catch(() => alert('Błąd wysyłania!'));
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl text-center">Kontakt</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-6">
        <input
          {...register('name', { required: true })}
          placeholder="Imię"
          className="w-full p-2 mb-4 border"
        />
        {errors.name && <p className="text-red-500">Imię jest wymagane</p>}
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="E-mail"
          className="w-full p-2 mb-4 border"
        />
        <textarea
          {...register('message', { required: true })}
          placeholder="Wiadomość"
          className="w-full p-2 mb-4 border"
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2">
          Wyślij
        </button>
      </form>
      <div className="text-center mt-4">
        <p>E-mail: jan@kowalski.pl</p>
        <a href="https://linkedin.com" className="text-blue-500">LinkedIn</a> | 
        <a href="https://github.com" className="text-blue-500">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;