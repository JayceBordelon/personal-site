import React, { useState } from 'react';
import { workInfo } from '../types/workTypes';
import { openLinkInNewTab } from '../functions/helpers';
import { IoIosGitBranch } from "react-icons/io";

interface WorkCardProps {
    experience: workInfo;
}

export default function WorkCard({ experience }: WorkCardProps) {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpanded = () => setExpanded((prev) => !prev);

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
            <ul className="work-card-description">
                {experience.description && (
                    <>
                        {expanded
                            ? experience.description.map((desc, index) => (
                                <div className="desc-item" key={index}>
                                    <IoIosGitBranch size={30} className="work-icon" />
                                    <li>{desc}</li>
                                </div>
                            ))
                            : experience.description.slice(0, 1).map((desc, index) => (
                                <div className="desc-item" key={index}>
                                    <IoIosGitBranch size={30} className="work-icon" />
                                    <li>{desc}</li>
                                </div>
                            ))}
                        {experience.description.length > 1 && (
                            <button className="see-more-btn" onClick={toggleExpanded}>
                                {expanded ? 'See Less' : 'See More'}
                            </button>
                        )}
                    </>

                )}
            </ul>
            {experience.skills && experience.skills.length > 0 && (
                <div className="work-card-skills">
                    <p className="work-card-skills-title">Skills:</p>
                    <ul>
                        {experience.skills.map((skill, index) => (
                            <li
                                onClick={() =>
                                    openLinkInNewTab(`https://www.google.com/search?q=What+is+${skill}`)
                                }
                                key={index}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
