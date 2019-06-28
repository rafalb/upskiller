import React from 'react';
import './AreasSkillsTree.css';
import Topic from './Topic';

const AreasSkillsTree = (props) => {
    return (
        <ul className="areas">
            {props.areas.map(a =>
                <li className="area">
                    {a.name}
                    <ul className="topics">
                        {a.topics.map(t =>
                            <Topic topic={t}/>
                        )}
                    </ul>
                </li>)
            }
        </ul>
    );
}

export default AreasSkillsTree;