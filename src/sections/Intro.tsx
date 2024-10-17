import { SECTION_HEADER_ICON_SIZE, getIntroIcon } from "../constants/sectionIcons";

export default function() {
    return (
        <section id="intro">
            <header>
                <h2>{getIntroIcon(SECTION_HEADER_ICON_SIZE)}Hello</h2>
            </header>
        </section>
    )
}
