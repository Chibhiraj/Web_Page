import { useInView } from '../hooks/useInView'
import { education } from '../data/education'

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`education animate-section ${inView ? 'in-view' : ''}`}
      id="education"
    >
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
      {education.map((edu) => (
        <div key={edu.degree + edu.institution} className="education-card">
          <div className="education-header">
            <h3>{edu.degree}</h3>
            <span className="education-period">{edu.period}</span>
          </div>
          <p className="education-institution">{edu.institution}</p>
          <p className="education-desc">{edu.description}</p>
        </div>
      ))}
      </div>
    </section>
  )
}
