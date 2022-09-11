import './NavigationDots.scss'

const NavigationDots = ({ active }) => {

    const navContent = ['home', 'about', 'work', 'skills', 'contact']

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