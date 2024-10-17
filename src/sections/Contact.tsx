import React from 'react'
import { SECTION_HEADER_ICON_SIZE, getContactIcon } from '../constants/sectionIcons'

export default function Contact() {
  return (
    <section id="contact">
      <header>
          <h2>{getContactIcon(SECTION_HEADER_ICON_SIZE)} Contact</h2>
      </header>
    </section>
  )
}
