import { BsFileEarmarkPersonFill, BsBriefcaseFill } from "react-icons/bs"; // intro & work
import { GiAbstract089, GiStakeHammer } from "react-icons/gi"; // Skills & Projects
import { FaGraduationCap } from "react-icons/fa6"; // Education
import { IoMail } from "react-icons/io5"; // Contact


export const SECTION_HEADER_ICON_SIZE : string = '40';

export const getIntroIcon = (size: string) => {
    return <BsFileEarmarkPersonFill size={size} />;
}

export const getWorkIcon = (size: string) => {
    return <BsBriefcaseFill size={size} />;
}

export const getSkillIcon = (size: string) => {
    return <GiAbstract089 size={size} />;
}

export const getEducationIcon = (size: string) => {
    return <FaGraduationCap size={size} />;
}

export const getContactIcon = (size: string) => {
    return <IoMail size={size} />;
}

export const getProjectIcon = (size: string) => {
    return <GiStakeHammer size={size} />;
}



