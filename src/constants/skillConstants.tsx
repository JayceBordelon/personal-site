import { skillInfo } from "../types/skillInfo";
import { DiCss3, DiNodejs, DiPython, DiReact, DiHtml5, DiJava, DiJavascript1  } from 'react-icons/di' 
import {TbBrandCpp, TbApi, TbBrandDjango} from 'react-icons/tb'
import {SiAwslambda, SiMongodb, SiPostgresql, SiSvelte, SiMysql, SiRubyonrails, SiPhp} from 'react-icons/si'
import {FaLinux, FaGit, FaJenkins} from 'react-icons/fa'
import {GiArtificialHive} from 'react-icons/gi'
import {BiLogoFlask, BiLogoSpringBoot} from 'react-icons/bi'

import { getCssRootVar } from "../functions/helpers";

export const SKILL_ICON_SIZE = 80 as const;

export const mySkills: skillInfo[] = [
  { title: "JavaScript", proficiency: 90, icon: <DiJavascript1 size={SKILL_ICON_SIZE} /> },
  { title: "HTML", proficiency: 86, icon: <DiHtml5 size={SKILL_ICON_SIZE} /> },
  { title: "CSS", proficiency: 85, icon: <DiCss3 size={SKILL_ICON_SIZE} /> },
  { title: "PHP", proficiency: 75, icon: <SiPhp size={SKILL_ICON_SIZE} /> },
  { title: "Flask", proficiency: 70, icon: <BiLogoFlask size={SKILL_ICON_SIZE} /> },
  { title: "Node.js", proficiency: 88, icon: <DiNodejs size={SKILL_ICON_SIZE} /> },
  { title: "Python", proficiency: 89, icon: <DiPython size={SKILL_ICON_SIZE} /> },
  { title: "React.js", proficiency: 92, icon: <DiReact size={SKILL_ICON_SIZE} /> },
  { title: "Java", proficiency: 99, icon: <DiJava size={SKILL_ICON_SIZE} /> },
  { title: "C++", proficiency: 72, icon: <TbBrandCpp size={SKILL_ICON_SIZE} /> },
  { title: "Svelte", proficiency: 65, icon: <SiSvelte size={SKILL_ICON_SIZE} /> },
  { title: "Ruby on Rails", proficiency: 91, icon: <SiRubyonrails size={SKILL_ICON_SIZE} /> },
  { title: "MongoDB", proficiency: 90, icon: <SiMongodb size={SKILL_ICON_SIZE} /> },
  { title: "Django", proficiency: 73, icon: <TbBrandDjango size={SKILL_ICON_SIZE} /> },
  { title: "Git", proficiency: 88, icon: <FaGit size={SKILL_ICON_SIZE} /> },
  { title: "OCR", proficiency: 76, icon: <GiArtificialHive size={SKILL_ICON_SIZE} /> },
  { title: "Linux", proficiency: 73, icon: <FaLinux size={SKILL_ICON_SIZE} /> },
  { title: "PostgreSQL", proficiency: 80, icon: <SiPostgresql size={SKILL_ICON_SIZE} /> },
  { title: "AWS Lambda", proficiency: 60, icon: <SiAwslambda size={SKILL_ICON_SIZE} /> },
  { title: "SQL", proficiency: 82, icon: <SiMysql size={SKILL_ICON_SIZE} /> },
  { title: "Spring Boot", proficiency: 90, icon: <BiLogoSpringBoot size={SKILL_ICON_SIZE} /> },
  { title: "Jenkins", proficiency: 78, icon: <FaJenkins size={SKILL_ICON_SIZE} /> },
];


mySkills.sort((a, b) => b.proficiency - a.proficiency);