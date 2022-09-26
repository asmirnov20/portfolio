import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { hoverDiv, linksAnimate } from '../../animations/animations';
import './Projects.scss';

const Work = () => {

    const [works, setWorks] = useState([]);
    const [filteredWork, setFilteredWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('Все')
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        const query = '*[_type == "works"]'

        client.fetch(query)
            .then(data => {
                setWorks(data);
                setFilteredWork(data)
            })
    }, [])

    const handleFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilteredWork(works);
            } else {
                setFilteredWork(
                    works.filter(
                        work => work.tags.includes(item)));
            }
        }, 500);

    }
    
    const filterCategories = ['React JS', 'Next JS', 'UI/UX', 'All']
    
    return (
        <>
            <h2 className="head-text">My<span> Projects</span></h2>

            <div className="app__work-filter">
                {filterCategories.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleFilter(item)}
                        className={`app__work-filter-item p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filteredWork.map((work, index) => (
                    <div className="app__work-item" key={index}>
                        <div className="app__work-img">
                            <img src={urlFor(work.imgUrl)} alt={work.name} />
                            <motion.div
                                whileHover={hoverDiv.whileHover}
                                transition={hoverDiv.transition}
                                className="app__work-hover"
                            >
                                <a href={work.projectLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={linksAnimate.whileInView}
                                        whileHover={linksAnimate.whileHover}
                                        transition={linksAnimate.transition}
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>

                                <a href={work.codeLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={linksAnimate.whileInView}
                                        whileHover={linksAnimate.whileHover}
                                        transition={linksAnimate.transition}
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="work__desc">{work.description}</p>

                            <div className="app__work-tag">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'Projects',
    'app__primarybg'
)