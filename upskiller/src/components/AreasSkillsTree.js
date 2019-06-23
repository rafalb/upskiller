import React  from 'react';
import './AreasSkillsTree.css';

const AreasSkillsTree = (props) => {
    return (
        <ul className="areas">
            {props.areas.map(a =>
            <li className="area">
                {a.name}
                <ul className="topics">
                    {a.topics.map(t =>
                    <li className="topic">
                        <div className="topicTitle">{t}</div>
                        <div className="topicSkill">{Array.from({length: Math.random() * 6}).map(x => "★")}</div>
                    </li>
                    )}
                </ul>
            </li>)}
        </ul>
    );
}

export default AreasSkillsTree;