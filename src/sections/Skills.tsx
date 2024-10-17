import React from 'react'
import { SECTION_HEADER_ICON_SIZE, getSkillIcon } from '../constants/sectionIcons'

export default function Skills() {
  return (
    <section id="skills">
        <header>
        <h2>{getSkillIcon(SECTION_HEADER_ICON_SIZE)} Skills</h2>
      </header>
    </section>
  )
}
