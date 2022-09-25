import './NavigationDots.scss'

const NavigationDots = ({ active }) => {

    const navContent = ['Home', 'About', 'Projects', 'Skills', 'Contact']

    return (
        <div className='app__navigation'>
            {navContent.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots