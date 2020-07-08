import React, { useRef, useState } from "react"
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
                    <a href="#">about</a>
                </li>
                <li>
                    <a href="#">blog</a>
                </li>
                <li>
                    <a href="#">projects</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </ul>
        </nav>
    )
    
}
    


export default Navigation;
