import { FaCloudDownloadAlt } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi"; //Blog
import "../styles/nav.css"
import { useEffect, useState } from "react";
import { getContactIcon, getEducationIcon, getIntroIcon, getProjectIcon, getSkillIcon, getWorkIcon } from "../constants/sectionIcons";



export default function NavBar() {
    const navIconSize = 40;
    const expandedIconSize = '35';
    const [hasAnimated, setHasAnimated] = useState(false);
    const [expand, setExpand] = useState(false);

    const openResume = () => {
        window.open("JayceBordelonResume.pdf");
    }

    const openBlog = () => {
        window.open("https://jayceblog.netlify.app");
    }
    useEffect(()=> {
        setTimeout(() => {
            setHasAnimated(true);
          }, 2000);
    }, []);

    const getCoffeeClass = () => {
        let current = expand ? "coffee-active" : "coffee";
        if (!hasAnimated){
            console.log(current + " animate-nav-icon");
            return current + " animate-nav-icon"
        }
        return current;
    }

    return (
        <header id="nav-container">
            <nav>
                <FaCloudDownloadAlt className="download-resume animate-nav-icon" size={navIconSize} onClick={openResume} />
                <TfiWrite size={navIconSize} className="to-blog animate-nav-icon"  onClick={openBlog}/>
                <SiCoffeescript className={getCoffeeClass()} size={navIconSize} onClick={() => setExpand(!expand)} />
                <div className={expand ? "nav-links-show" : "nav-links-hide"}>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#intro">{getIntroIcon(expandedIconSize)}&nbsp;Intro</a>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#education">{getEducationIcon(expandedIconSize)}&nbsp;Education</a>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#work">{getWorkIcon(expandedIconSize)}&nbsp;Work</a>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#skills">{getSkillIcon(expandedIconSize)}&nbsp;Skills</a>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#projects">{getProjectIcon(expandedIconSize)}&nbsp;Projects</a>
                    <a onClick={() => setExpand(!expand)} className="nav-link" href="#contact">{getContactIcon(expandedIconSize)}&nbsp;Contact</a>
                </div>
            </nav>
        </header>
    )
}