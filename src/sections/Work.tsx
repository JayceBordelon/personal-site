import { SECTION_HEADER_ICON_SIZE, getWorkIcon } from '../constants/sectionIcons'

export default function Work() {
  return (
    <section id="work">
      <header>
        <h2>{getWorkIcon(SECTION_HEADER_ICON_SIZE)} Work</h2>
      </header>
    </section>
  )
}
