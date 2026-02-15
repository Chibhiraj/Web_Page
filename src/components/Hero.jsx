import { Link } from 'react-router-dom'
import heroImage from '../../pics/heroo.jpeg'

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-bg">
        <span className="hero-orb hero-orb-1" />
        <span className="hero-orb hero-orb-2" />
        <span className="hero-orb hero-orb-3" />
      </div>
      <div className="hero-content">
        <img src={heroImage} alt="Chibhiraj K" className="hero-image hero-anim" />
        <h1 className="hero-anim">
          Hello, I'm <span className="highlight">Chibhiraj K</span>
        </h1>
        <h2 className="typing-block">
          <span className="typing typing-first">Full Stack </span><span className="typing typing-second">Tech enthusiast</span>
        </h2>
        <p className="hero-anim hero-p">
          I build scalable backend systems using .NET and create seamless user experiences with React.
          Passionate about designing complete end-to-end web applications.
        </p>
        <Link to="/#projects" className="btn hero-anim btn-cta">
          View Projects
        </Link>
      </div>
    </section>
  )
}
