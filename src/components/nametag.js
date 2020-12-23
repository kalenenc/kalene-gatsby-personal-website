import React, {useState, useEffect} from "react"
import { Link } from 'gatsby'
import nameTagStyles from "./style-modules/nametag.module.css"


const NameTag = (props) => {

    return (
        <div 
            className={   nameTagStyles.nameTag  }
        >
            <h1> 
                <Link style={ 
                {
                    color: !props.location || props.location === '/' 
                    ? 'var(--chocolate)'
                    : 'var(--green)'
                }
            } to="/">Kalene</Link>
            </h1>
        </div>
    )
}

export default NameTag;