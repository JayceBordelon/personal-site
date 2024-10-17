import { SECTION_HEADER_ICON_SIZE, getEducationIcon } from '../constants/sectionIcons'

export default function Education() {
  return (
    <section id="education">
      <header>
        <h2>{getEducationIcon(SECTION_HEADER_ICON_SIZE)} Education</h2>
      </header>
    </section>
  )
}
