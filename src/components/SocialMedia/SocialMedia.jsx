import { FaTelegram } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import './SocialMedia.scss'

const SocilaMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href='https://github.com/asmirnov20' target='_blank' rel='noreferrer'>
                    <VscGithub />
                </a>

            </div>
            <div>
                <FaTelegram url='https://t.me/+421949664243' target='_blank' />
            </div>
        </div >
    )
}

export default SocilaMedia