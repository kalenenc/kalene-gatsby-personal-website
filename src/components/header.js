import React from "react"
import NameTag from './nametag'
import Navigation from './navigation'
import headerStyles from './style-modules/header.module.css'

const Header = _props => (
    <header>
        <Navigation></Navigation>
        <NameTag></NameTag>

        <div className={headerStyles.header__description}>
            <h2>Hi.</h2>
            <p>I’m Kalene, a frontend developer and lifelong-learner with a desire to help support others in, or looking to get into tech.</p>
            <p>Read more about my journey <a href="#">here</a>.</p>
        </div>

        <hr/>

        
    </header>

)

export default Header;