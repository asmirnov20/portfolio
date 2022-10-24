import { images } from '../../constants'
import AppWrap from '../../wrapper/AppWrap'
import './Header.scss'

const Header = () => {

  const { react, javascript, sass } = images

  return (
    <div className='app__header'>

      <div className='app__header-img'>
        <img src={images.profile} alt='profile_bg' />
      </div>

      <div className='app__header-info'>
        <div className="app__header-badge">
          <div className="badge__top">
            <span>👋</span>
            <div>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Andrii Smirnov</h1>
            </div>
          </div>

          <div className="badge__bottom">
            <p className='p-text'>Frontend Developer</p>
          </div>
        </div>
      </div>



      <div className='app__header-circles'>
        {[react, javascript, sass].map((circle, index) => (
          <div key={index}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(Header, 'Home')