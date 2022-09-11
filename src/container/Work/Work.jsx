import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {

    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('Все')

    useEffect(() => {
        const query = '*[_type == "works"]'

        client.fetch(query)
            .then(data => {
                setWorks(data);
                setFilterWork(data)
            })
    })

    const handleFilter = (item) => {
        console.log(item);
    }

    return (
        <>
            <h2 className="head-text">Мои<span> работы</span></h2>

            <div className="app__work-filter">
                {['React JS', 'TypeScript', 'Next JS', 'Все'].map((item, index) => (
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
            >
                {filterWork.map((work, index) => (
                    <div className="app__work-item" key={index}>
                        <div className="app__work-img">
                            <img src={urlFor(work.imgUrl)} alt={work.name} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default Work