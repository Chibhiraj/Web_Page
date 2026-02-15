import { Link } from 'react-router-dom'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const mail = form.mail.value
    const message = form.message.value
    const mailto = `mailto:chibhiraj@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}\n\n---\nFrom: ${encodeURIComponent(mail)}`
    window.location.href = mailto
  }

  return (
    <div className="contact-page">
      <h1>Get in touch</h1>
      <p>Have a project in mind or want to connect? Reach out below.</p>

      <div className="contact-info">
        <p>
          <strong>Mobile:</strong>{' '}
          <a href="tel:+919345767172">+91-9345767172</a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:chibhiraj@gmail.com">chibhiraj@gmail.com</a>
        </p>
        <p>
          <strong>Location:</strong> Erode, Tamil Nadu
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="mail" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <button type="submit">Send message</button>
      </form>

      <Link to="/" className="back-link">
        ← Back to portfolio
      </Link>
    </div>
  )
}
