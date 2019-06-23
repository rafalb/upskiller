import React  from 'react';

const AreasSkillsTree = (props) => {
    return (
        <ul>
            {props.areas.map(a =>
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