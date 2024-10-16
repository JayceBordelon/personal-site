import { FaCloudDownloadAlt } from "react-icons/fa";
import "../styles/nav.css"



export default function NavBar() {
    const navIconSize = 40;
    return (
        <header>
            <nav>
                <ul>
                    <li><FaCloudDownloadAlt size={navIconSize} /></li>
                    <div className="nav-links">
                        <li className="nav-link"> <a href="#intro">Intro</a></li>
                        <li className="nav-link"> <a href="#education">Education</a></li>
                        <li className="nav-link"> <a href="#work">Work</a></li>
                        <li className="nav-link"> <a href="#skills">Skills</a></li>
                        <li className="nav-link"> <a href="#projects">Projects</a></li>
                        <li className="nav-link"> <a href="#education">Contact</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}
