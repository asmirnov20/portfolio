import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper/';
import { aboutContainer, aboutItem } from '../../animations/animations';
import './About.scss'

const About = () => {

    return (
        <motion.div variants={aboutContainer} whileInView={aboutContainer.whileInView}>
            <motion.h2 variants={aboutItem} className="head-text">About <span>me</span></motion.h2>

            <motion.p variants={aboutItem} className='about__text'>
                About half a year ago, a close friend introduced me to programming. And after writing a few lines of code, I realized that this is what I want to do in the future. I set a goal for myself to become a front-end developer and I consistently moved towards this goal, every day devoting many hours to it and learning everything on my own. I’ve never needed any additional "motivation". On the contrary, I really love to constantly learn and improve my skills.
                <br />
                <p>Down below you will find projects that showcase my skills and general experience in software development.</p>
            </motion.p>
        </motion.div>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'About',
    'app__whitebg'
)