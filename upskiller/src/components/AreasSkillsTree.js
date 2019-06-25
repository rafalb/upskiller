import React, {useState}  from 'react';
import './AreasSkillsTree.css';

const AreasSkillsTree = (props) => {
    const [areas, setAreas] = useState(props.areas);

    return (
        <ul className="areas">
            {areas.map(a =>
            <li className="area">
                {a.name}
                <ul className="topics">
                    {a.topics.map(t =>
                        <li className="topic">
                            <div className="topicTitle">{t.name}</div>
                            <div className="topicSkill">
                                {generateStars(t.skill)}
                            </div>
                            <div className="topicUpdate">
                                <button onClick={() => updateTopic(setAreas, a, t, true)}>+</button>
                                <button onClick={() => updateTopic(setAreas, a, t, false)}>-</button>
                            </div>
                        </li>
                    )}
                </ul>
            </li>)}
        </ul>
    );
}

const generateStars = (skill) => {
    const count = Math.round(10 * (skill + 0.1)) * 0.5;
    const array = Array.from({length: count});
    return array.map(x => "★");
}

const updateTopic = (setAreas, area, topic, increase) => {
    setAreas(areas => {
        const newAreas = Array.from(areas);
        const newTopic = newAreas.find(a => a.name === area.name).topics.find(t => t.name === topic.name);

        if (increase)
        {
            newTopic.skill = Math.min(1.0, newTopic.skill + 0.2);
        }
        else
        {
            newTopic.skill = Math.max(0.0, newTopic.skill - 0.2);
        }

        return newAreas;
    } );
}

export default AreasSkillsTree;