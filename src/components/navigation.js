import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import navigationStyles from "./style-modules/navigation.module.css"


const Navigation = _props => {

    const [heightClass,  setHeightClass] = useState('')

    const ulRef = useRef();

    const toggleNav = () => {
        const newHeightClass = heightClass ? '' : 'fullHeight';
        setHeightClass(newHeightClass);
    }


    return (
        <nav>
            <div className={navigationStyles.nav_button__container }>
                <button onClick={toggleNav} aria-label="navigation menu" aria-expanded={!!heightClass}>☰</button>
            </div>
            <ul ref={ulRef} className={`${navigationStyles.nav__list} ${navigationStyles[heightClass]}`}>
                <li>
                    <Link to="/about" className={navigationStyles.nav__link}>about</Link>
                </li>
                <li>
                    <Link to="/blog" className={navigationStyles.nav__link}>blog</Link>
                </li>
                <li>
                    <Link to="/projects" className={navigationStyles.nav__link}>projects</Link>
                </li>
                <li>
                    <Link to="/contact" className={navigationStyles.nav__link}>contact</Link>
                </li>
            </ul>
        </nav>
    )
    
}
    


export default Navigation;
