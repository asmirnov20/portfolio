import { images } from '../../constants'
import { motion } from 'framer-motion'
import { headerAnimate, imageContainer, imgScale, scaleVariants } from '../../animations/animations'
import AppWrap from '../../wrapper/AppWrap'
import './Header.scss'

const Header = () => {

  const { react, javascript, sass } = images

  return (
    <div className='app__header'>
      <motion.div
        variants={headerAnimate}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge__top">
            <span>👋</span>
            <div>
              <p className='p-text'>Привет, я</p>
              <h1 className='head-text'>Андрей</h1>
            </div>
          </div>

          <div className="badge__bottom">
            <p className='p-text'>Фронтенд разработчик</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={imageContainer}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile_bg' />
        <motion.img
          variants={imgScale}
          src={images.circle}
          alt='profile_circle'
          className='overlay__circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[javascript, sass, react].map((circle, index) => (
          <div key={index}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')