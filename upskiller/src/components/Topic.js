import React, {useState}  from 'react';
import './AreasSkillsTree.css';

const Topic = (props) => {
    const [topic, setTopic] = useState(props.topic);

    return (
        <li className="topic">
            <div className="topicTitle">{topic.name}</div>
            <div className="topicSkill">
                {generateStars(topic.skill)}
            </div>
            <div className="topicUpdate">
                <button onClick={() => updateTopic(setTopic, topic, true)}>+</button>
                <button onClick={() => updateTopic(setTopic, topic, false)}>-</button>
            </div>
        </li>
    );
}

const generateStars = (skill) => {
    const count = Math.round(10 * (skill + 0.1)) * 0.5;
    const array = Array.from({length: count});
    return array.map(x => "★");
}

const updateTopic = (setTopic, topic, increase) => {
    setTopic({
        ...topic,
        skill: increase ? Math.min(1.0, topic.skill + 0.2) : Math.max(0.0, topic.skill - 0.2)
    });
}

export default Topic;