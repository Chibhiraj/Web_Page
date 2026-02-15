import { useInView } from '../hooks/useInView'
import { experience } from '../data/experience'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`experience animate-section ${inView ? 'in-view' : ''}`}
      id="experience"
    >
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-grid">
      {experience.map((job) => (
        <div key={job.role + job.company} className="experience-card">
          <div className="experience-header">
            <h3>{job.role}</h3>
            <span className="experience-period">{job.period}</span>
          </div>
          <p className="experience-company">{job.company}</p>
          <p className="experience-desc">{job.description}</p>
        </div>
      ))}
      </div>
    </section>
  )
}
