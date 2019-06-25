import React  from 'react';
import './AreasSkillsTree.css';

const generateStars = (skill) => {
    let count = (skill + 0.1) * 5;
    let array = Array.from({length: count});
    return array.map(x => "★");
}

const AreasSkillsTree = (props) => {
    return (
        <ul className="areas">
            {props.areas.map(a =>
            <li className="area">
                {a.name}
                <ul className="topics">
                    {a.topics.map(t =>
                    <li className="topic">
                        <div className="topicTitle">{t.name}</div>
                        <div className="topicSkill">{generateStars(t.skill)}</div>
                    </li>
                    )}
                </ul>
            </li>)}
        </ul>
    );
}

export default AreasSkillsTree;