import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`projects animate-section ${inView ? 'in-view' : ''}`}
      id="projects"
    >
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
      </div>
    </section>
  )
}
