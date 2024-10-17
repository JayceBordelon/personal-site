import React from 'react'
import { SECTION_HEADER_ICON_SIZE, getContactIcon } from '../constants/sectionIcons'
import RandomizedTitle from '../components/RandomizedTitle'

export default function Contact() {
  return (
    <section id="contact">
      <header>
          <h2><RandomizedTitle title="Contact" /></h2>
      </header>
    </section>
  )
}
