import RandomizedTitle from '../components/RandomizedTitle'
import WorkCard from '../components/workCard'
import { myWorkExperiences } from '../constants/workConstants'

export default function Work() {
  return (
    <section id="work">
      <header>
      <h2><RandomizedTitle>Software Expereince</RandomizedTitle></h2>
      </header>
      <div id="work-cards-container">
        {myWorkExperiences.map((experience, index) => (
          <WorkCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  )
}
