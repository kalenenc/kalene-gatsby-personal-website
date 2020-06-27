import React from "react"
import navigationStyles from "./style-modules/navigation.module.css"


const Navigation = _props => (
    <nav>
        <ul className={navigationStyles.nav__list}>
            <li>about</li>
            <li>blog</li>
            <li>projects</li>
            <li>contact</li>
        </ul>
    </nav>
)

export default Navigation;
