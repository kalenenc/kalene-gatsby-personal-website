import React from "react"
import footerStyles from './style-modules/footer.module.css'

const Footer = _props => {
    const today = new Date();
    const fullYear = today.getFullYear();


    return (
        <footer className={footerStyles.red}>
            <p>&copy; {fullYear} Kalene Csefalvay </p>
        </footer>
    )
}
    


export default Footer;