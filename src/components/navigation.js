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
            <ul ref={ulRef} className={`${navigationStyles.nav__list} ${navigationStyles[heightClass]}`}>
                <li>
                    <Link to="/blog" className={navigationStyles.nav__link}>articles</Link>
                </li>
                <li>
                    <Link to="/resources" className={navigationStyles.nav__link}>resources</Link>
                </li>
                <li>
                    <Link to="/about" className={navigationStyles.nav__link}>about</Link>
                </li>
            </ul>
        </nav>
    )
    
}
    


export default Navigation;
