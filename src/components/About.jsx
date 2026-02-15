import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`about animate-section ${inView ? 'in-view' : ''}`}
      id="about"
    >
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        I'm a Full Stack Developer with experience building enterprise-level applications.
        I specialize in creating secure APIs, responsive UI, and optimized databases.
        I love turning complex problems into simple and efficient solutions.
      </p>
    </section>
  )
}
