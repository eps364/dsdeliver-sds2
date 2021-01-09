import './styles.css'
import {ReactComponent as YouTubeIcon} from './youtube.svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a segunda edição do evento Semana DevSuperior <a href="https://github.com/eps364/dsdeliver-sds2" target="_new">  by Emerson P da Silva </a>
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_new">
                    <InstagramIcon />
                </a>
                
                
            </div>
        </footer>
    )
}

export default Footer