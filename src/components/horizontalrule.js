import React from "react"
import horizontalruleStyles from "./style-modules/horizontalrule.module.css"


const HorizontalRule = props => (
    <hr 
        className={horizontalruleStyles.hr}
        style={
            {
                border: 'transparent',
                borderTop: `0.7rem dotted ${props.hrConfig.color}`,
                width: props.hrConfig.width
            }
        }
    />
)

export default HorizontalRule;