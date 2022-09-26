import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "skills"]';

        client.fetch(query).then(data => setSkills(data));
    }, []);

    return (
        <>
            <h2 className="head-text">Skills</h2>

            {skills && (
                <div className="app__skills-container">
                    <motion.div className="app__skills-list">
                        {skills.map(skill => (
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                className="app__skills-item"
                                key={skill.name}
                            >
                                <div style={{ backgroundColor: skill.bgColor }}>
                                    <img src={urlFor(skill.icon)} alt={skill.name} />
                                </div>
                                <p className="p-text">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}

        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'Skills',
    'app__whitebg'
);