import FloatingInView from '../components/FloatingInView'
import TypeWriter from '../components/TypeWriter'
import WorkCard from '../components/WorkCard'
import { myWorkExperiences } from '../constants/workConstants'

export default function Work() {
  return (
    <section id="work">
      <header>
      <h2><TypeWriter>Software Expereince</TypeWriter></h2>
      </header>
      <div id="work-cards-container">
        {myWorkExperiences.map((experience, index) => (
          <FloatingInView key={index} className="work-card-wrapper" threshold={0.2}>
            <WorkCard experience={experience} />
          </FloatingInView>
        ))}
      </div>
    </section>
  )
}
