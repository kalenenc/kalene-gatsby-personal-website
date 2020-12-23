import React from "react"
import { FaTwitter, FaLinkedin, FaGithub, FaCodepen, FaDev } from 'react-icons/fa';
import footerStyles from './style-modules/footer.module.css'

const Footer = _props => {
    const today = new Date();
    const fullYear = today.getFullYear();


    return (
        <footer className={footerStyles.red}>
            <ul>
                <li><FaTwitter /></li>
                <li><FaLinkedin /></li>
                <li><FaGithub /></li>
                <li><FaCodepen /></li>
                <li><FaDev /></li>
            </ul>
            <p>&copy; {fullYear} Kalene Csefalvay </p>
        </footer>
    )
}


export default Footer;