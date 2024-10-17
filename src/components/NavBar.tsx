import { FaCloudDownloadAlt } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";
import "../styles/nav.css"
import { useState } from "react";



export default function NavBar() {
    const navIconSize = 40;
    const [expand, setExpand] = useState(false);

    const openResume = () => {
        window.open("JayceBordelonResume.pdf");
    }
    return (
        <header id="nav-container">
            <nav>
                <FaCloudDownloadAlt className="download-resume" size={navIconSize} onClick={openResume} />
                <SiCoffeescript className={expand ? "coffee-active" : "coffee"} size={navIconSize} onClick={() => setExpand(!expand)} />
                <div className={expand ? "nav-links-show" : "nav-links-hide"}>
                    <a className="nav-link" href="#intro">Intro</a>
                    <a className="nav-link" href="#education">Education</a>
                    <a className="nav-link" href="#work">Work</a>
                    <a className="nav-link" href="#skills">Skills</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#education">Contact</a>
                </div>
            </nav>
        </header>
    )
}
