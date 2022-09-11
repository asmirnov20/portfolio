import { SocialIcon } from "react-social-icons";
import './SocialMedia.scss'

const SocilaMedia = () => {
    return (
        <div className="app__social">
            <div>
                <SocialIcon url='https://github.com/asmirnov20' target='_blank' />
            </div>
            <div>
                <SocialIcon url='https://t.me/+421949664243' target='_blank' />
            </div>
            <div>
                <SocialIcon url='https://www.facebook.com/andrej.smirnov.73345' target='_blank' />
            </div>
        </div >
    )
}

export default SocilaMedia