import React from 'react';
import { workInfo } from '../types/workTypes';
import { openLinkInNewTab } from '../functions/helpers';
import { IoIosGitBranch } from "react-icons/io";


interface WorkCardProps {
    experience: workInfo;
}

export default function WorkCard({ experience }: WorkCardProps) {
    return (
        <div className="work-card">
            <div className="work-card-header">
                {experience.companyImageSrc && (
                    <img
                        src={experience.companyImageSrc}
                        alt={`${experience.company} logo`}
                        className="work-card-image"
                    />
                )}
                <div className="work-card-header-text">
                    <h3 className="work-card-company">{experience.company}</h3>
                    <p className="work-card-position">{experience.position}</p>
                    <p className="work-card-dates">
                        {experience.startDate} - {experience.endDate || 'Present'}
                    </p>
                </div>
            </div>
            {experience.description && (
                <ul className="work-card-description">
                    {experience.description.map((desc, index) => (
                        <div className='desc-item'><IoIosGitBranch size={30} className="work-icon" /><li key={index}>{desc}</li></div>
                    ))}
                </ul>
            )}
            {experience.skills && experience.skills.length > 0 && (
                <div  className="work-card-skills">
                    <p className="work-card-skills-title">Skills:</p>
                    <ul>
                        {experience.skills.map((skill, index) => (
                            <li onClick={() => openLinkInNewTab(`https://www.google.com/search?q=What+is+${skill}`)} key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
