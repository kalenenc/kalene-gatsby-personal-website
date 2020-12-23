import React from "react"
import horizontalruleStyles from "./style-modules/horizontalrule.module.css"

const HorizontalRule = props => (
  <hr
    className={horizontalruleStyles.hr}
    style={{
      border: "transparent",
      borderTop: `${props.hrConfig.size} dotted ${props.hrConfig.color}`,
      width: props.hrConfig.width,
      paddingBottom: `${props.hrConfig.paddingBottom}` || "0px",
    }}
  />
)

export default HorizontalRule
