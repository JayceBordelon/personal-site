import { project } from "../types/project";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineStock } from "react-icons/ai";
import { FaGear } from "react-icons/fa6";


const ICON_SIZE = 60;

export const myProjects: project[] = [
    {
        title: "Blog",
        desc: "I built a blog site with React and a markdown interpreter.",
        link: "https://jayceblog.netlify.app/",
        icon: <TfiWrite size={ICON_SIZE} />
    },
    {
        title: "Bears & Bulls",
        desc: "A simple web scraping api that consolidates volatile stock data.",
        link: "https://bearsandbulls.netlify.app/",
        icon: <AiOutlineStock size={ICON_SIZE} />
    },
    {
        title: "FLOME Website",
        desc: `I built this site for an organization @ WashU.`,
        link: "https://flome-washu.netlify.app/",
        icon: <FaGear size={ICON_SIZE} />
    }
]