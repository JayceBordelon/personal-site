import { FaCloudDownloadAlt } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi"; //Blog
import "../styles/nav.css"
import { useEffect, useState } from "react";
import { getContactIcon, getIntroIcon, getProjectIcon, getSkillIcon, getWorkIcon } from "../constants/sectionIcons";
import { openLinkInNewTab } from "../functions/helpers";



export default function NavBar() {
    const navIconSize = 40;
    const expandedIconSize = '35';
    const [hasAnimated, setHasAnimated] = useState(false);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHasAnimated(true);
        }, 2000);
    }, []);

    const getCoffeeClass = () => {
        const current = expand ? "coffee-active" : "coffee";
        if (!hasAnimated) {
            console.log(current + " animate-nav-icon");
            return current + " animate-nav-icon"
        }
        return current;
    }

    return (
        <header id="nav-container">
            <nav>
                <FaCloudDownloadAlt className="download-resume animate-nav-icon" size={navIconSize} onClick={() => openLinkInNewTab("JayceBordelonResume.pdf")} />
                <TfiWrite size={navIconSize} className="to-blog animate-nav-icon" onClick={() => openLinkInNewTab("https://jayceblog.netlify.app")} />
                {!expand ? <CiMenuBurger className={getCoffeeClass()} size={navIconSize} onClick={() => setExpand(!expand)} />
                    : <AiOutlineClose className={getCoffeeClass()} size={navIconSize} onClick={() => setExpand(!expand)} />}
                <div className={expand ? "nav-links-show" : "nav-links-hide"}>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#intro">{getIntroIcon(expandedIconSize)}&nbsp;Intro</a>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#work">{getWorkIcon(expandedIconSize)}&nbsp;Work</a>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#skills">{getSkillIcon(expandedIconSize)}&nbsp;Skills</a>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#projects">{getProjectIcon(expandedIconSize)}&nbsp;Projects</a>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#contact">{getContactIcon(expandedIconSize)}&nbsp;Contact</a>
                </div>
            </nav>
        </header>
    )
}
