import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { menuAnimate } from '../../animations/animations';
import './Navbar.scss'

const Navbar = () => {

    const navContent = ['Главная', 'Обо мне', 'Контакты', 'Работа', 'Навыки']
    const [toggle, setToggle] = useState(false)

    const open = () => setToggle(true)
    const close = () => setToggle(false)

    return (
        <nav className='app__navbar'>

            <div className='app__navbar-logo'>
                <img src={images.logo} alt="logo" />
            </div>

            <ul className='app__navbar-links'>
                {navContent.map((item, index) => (
                    <li key={index}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={open} />

                {toggle && (
                    <motion.div
                        variants={menuAnimate}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        <HiX onClick={() => setToggle(false)} />

                        <ul>
                            {navContent.map(item => (
                                <li key={item}>
                                    <a href={`#${item}`}
                                        onClick={close}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>


        </nav>
    )
}

export default Navbar