import React from 'react'
import RandomizedTitle from '../components/RandomizedTitle'
import { mySkills } from '../constants/skillConstants'
import SkillCard from '../components/SkillCard'

export default function Skills() {
  return (
    <section id="skills">
      <header>
        <h2><RandomizedTitle>Top Skills</RandomizedTitle></h2>
      </header>
      <div id="skills-container">
        {mySkills.map((skill, index) => (<SkillCard skillInfo={skill} key={index}/>))}
      </div>
    </section>
  )
}
