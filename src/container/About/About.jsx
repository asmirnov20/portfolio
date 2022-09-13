import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper/';
import './About.scss'

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then(data => setAbouts(data));
    }, []);

    return (
        <>
            <h2 className="head-text">Я знаю, что <span>Хороший код</span> <br />означает  <span>Хороший Бизнес</span></h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.4, type: 'tween' }}
                        className="app__profile-item"
                        key={index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text">
                            {about.title}
                        </h2>
                        <p className="p-text">
                            {about.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
)