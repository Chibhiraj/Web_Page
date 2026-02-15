import { useInView } from '../hooks/useInView'
import { skillGroups } from '../data/skills'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`skills animate-section ${inView ? 'in-view' : ''}`}
      id="skills"
    >
      <h2 className="section-title">Tech Arsenal</h2>
      <div className="skills-grid">
      {skillGroups.map((group) => (
        <div key={group.title} className="skill-group">
          <h3>{group.title}</h3>
          <div className="badges">
            {group.items.map((item) => (
              <span key={item.name} className="badge">
                <img src={item.icon} alt="" width={24} height={24} />
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}
