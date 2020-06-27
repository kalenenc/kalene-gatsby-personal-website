import React from "react"
import NameTag from './nametag'
import Navigation from './navigation'

const Header = _props => (
    <header>
        <Navigation></Navigation>
        <NameTag></NameTag>

        <h2>Hi</h2>
        <p>I’m Kalene, a frontend developer and lifelong-learner with a desire to help support others in, or looking to get into tech.</p>
        <p>Read more about my journey <a href="#">here</a></p>
    </header>
)

export default Header;