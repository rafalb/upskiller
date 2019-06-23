import React  from 'react';

const areas = [
    { name: "Front End", topics: ["HTML", "CSS", "JavaScript", "ES6", "ES2017", "React", "Redux", "WebPack", "Cypress", "Jest" ] },
    { name: "Architecture", topics: ["DDD", "Microservices", "Serverless", "Actor model"] },
    { name: "Cloud", topics: ["Amazon Web Services", "Microsoft Azure", "Google Cloud Platform"] },
    { name: "Leadership", topics: ["Management 3.0", "Charisma", "Courage", "Motivation"] },
    { name: "Process", topics: ["Objectives & Key Results", "Event Storming", "Lean Software Development", "Liberating Structures"] },
    { name: "Product", topics: ["Lean Startup", "Hypothesis-Driven Development", "Product Discovery", "Story Mapping", "Lean Canvas"] }
];

const AreasSkillsTree = () => {
    return (
        <ul>
            {areas.map(a =>
            <li>
                {a.name}
                <ul>
                    {a.topics.map(t => <li>{t}</li>)}
                </ul>
            </li>)}
        </ul>
    );
}

export default AreasSkillsTree;