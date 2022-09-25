import { images } from '../../constants'
import { motion } from 'framer-motion'
import { headerAnimate, scaleVariants } from '../../animations/animations'
import AppWrap from '../../wrapper/AppWrap'
import './Header.scss'

const Header = () => {

  const { react, javascript, sass } = images

  return (
    <div className='app__header'>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-img'
      >
        <motion.img src={images.profile} alt='profile_bg' />
      </motion.div>

      <motion.div
        variants={headerAnimate}
        whileInView={headerAnimate.whileInView}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <motion.div className="badge__top">
            <span>👋</span>
            <div>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Andrey Smirnov</h1>
            </div>
          </motion.div>

          <motion.div className="badge__bottom">
            <p className='p-text'>Frontend Developer</p>
          </motion.div>
        </div>
      </motion.div>



      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[react, javascript, sass].map((circle, index) => (
          <div key={index}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'Home')