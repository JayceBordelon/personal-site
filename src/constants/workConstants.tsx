import { workInfo } from "../types/workTypes"
export const myWorkExperiences: workInfo[] = [
    {
        company: "Mastercard",
        companyImageSrc: "mastercard.jpg",
        startDate: "January 2024",
        endDate: "August 2024",
        position: "Software Engineering Intern",
        description: [
            "Created a health check common library to monitor and support the health of eight universal services used throughout Mastercard",
            "Lead architecture and rebuilt our test repository to support PIN validation in transactions",
            "Established a 10X faster run time for test processes in PIN validation",
            "Constructed custom schedulers to enable constant time access for cached health across 10 different services"
        ],
        skills: [
            "Pivotal Cloud Foundry",
            "Reactive Java",
            "Jenkins",
            "Java",
            "Spring Boot"
        ]
    },
    {
        company: "Synopsys",
        companyImageSrc: "synopsys.jpg",
        startDate: "May 2023",
        endDate: "August 2023",
        position: "Software Engineering Intern",
        description: [
            "Architected, created, containerized, and deployed a visualization application for Kubernetes",
            "Automated the synchronization of over 20,000 LDAP (Lightweight Directory Access Protocol) instances",
            "Contributed 2K+ lines of code to an established codebase via Git",
            "Built rake tasks (test suites) to assure the validity of my bug fixes for Ruby on Rails API"
        ],
        skills: [
            "Kubernetes",
            "Ruby on Rails",
            "LDAP",
            "React",
            "Docker"
        ]
    },
    {
        company: "Command Alkon",
        companyImageSrc: "command-alkon.png",
        startDate: "May 2022",
        endDate: "August 2022",
        position: "Full Stack Software Engineering Intern",
        description: [
            "Automated accounting processes through generation of 37 dynamic CSV exports",
            "Reworked frontend pages (in JavaScript) to add new functionality in settings console",
            "Implemented novel features to allow for data synchronization on over 4,000 user accounts"
        ],
        skills: [
            "JavaScript",
            "CSV",
            "Front-end Development",
            "API Integration"
        ]
    },
    {
        company: "Command Alkon",
        companyImageSrc: "command-alkon.png",
        startDate: "May 2021",
        endDate: "August 2021",
        position: "Backend Software Engineering Intern",
        description: [
            "Developed API integration with an Optical Character Recognition (OCR) technology",
            "Automated accounting process for 26 company-specific ticket types with Ruby scripts",
            "Outlined 47 company-specific rules for data entry processes"
        ],
        skills: [
            "Ruby",
            "OCR Technology",
            "API Development",
            "Automation",
            "Data Processing"
        ]
    }
];
