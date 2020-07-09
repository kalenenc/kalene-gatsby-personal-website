import React from "react"
import { Link } from 'gatsby'
import nameTagStyles from "./style-modules/nametag.module.css"


const NameTag = _props => (
    <div className={nameTagStyles.nameTag}>
        <h1> 
            <Link to="/">Kalene</Link>
        </h1>
    </div>
)

export default NameTag;