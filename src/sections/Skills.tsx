import { mySkills } from '../constants/skillConstants'
import SkillCard from '../components/SkillCard'
import TypeWriter from '../components/TypeWriter'

export default function Skills() {
  return (
    <section id="skills">
      <header>
        <h2><TypeWriter>Top Skills</TypeWriter></h2>
      </header>
      <div id="skills-container">
        {mySkills.map((skill, index) => (<SkillCard skillInfo={skill} key={index}/>))}
      </div>
    </section>
  )
}
