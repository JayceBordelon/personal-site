import { SECTION_HEADER_ICON_SIZE, getProjectIcon } from '../constants/sectionIcons'

export default function Projects() {
  return (
    <section id="projects">
      <header>
        <h2>{getProjectIcon(SECTION_HEADER_ICON_SIZE)} Projects</h2>
      </header>
    </section>
  )
}
