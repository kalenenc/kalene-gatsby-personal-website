import React from "react"
import NameTag from './nametag'
import Navigation from './navigation'
import headerStyles from './style-modules/header.module.css'
import MeAndReese from '../images/me-and-reese-icon.jpg'

const Header = _props => (
    <header>
        <Navigation></Navigation>
        <NameTag></NameTag>

        <div className={headerStyles.header__description_container}>
            <div className={headerStyles.header__description}>
                <h2>Hi.</h2>
                <p>I’m Kalene, a frontend developer and lifelong-learner with a desire to help support others in, or looking to get into tech.</p>
                <p>Read more about my journey <a href="#">here</a>.</p>
            </div>

            <div className={headerStyles.header__image_container}>
                <img src={MeAndReese} alt="Kalene and her dog, Reese."/>
                <div class={headerStyles.svg__container}>
                    <svg className={headerStyles.svg__one} width="100" height="100" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                        <rect width="100" height="100" />
                    </svg>
                    <svg className={headerStyles.svg__two}  width="100" height="100" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                        <rect width="100" height="100" />
                    </svg>
                    <svg className={headerStyles.svg__three}  width="100" height="100" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                        <rect width="100" height="100" />
                    </svg>
                </div>
            </div>
            
        </div>

        

        <hr/>

        
    </header>

)

export default Header;