import React from "react"
import HorizontalRule from "./horizontalrule"
import quickLinkStyles from "./style-modules/quicklinks.module.css"

const QuickLinks = _props => {
  const hrConfig = {
    width: "100%",
    color: "var(--olive)",
  }

  return (
    <section className={quickLinkStyles.red}>
      <div className={quickLinkStyles.section__sub_container}></div>
      <svg xmlns="http://www.w3.org/2000/svg" opacity="0.7">
        <rect width="300px" height="300px" fill="var(--light-olive)" />
      </svg>
      <h3>Quick links</h3>
      <HorizontalRule hrConfig={hrConfig}></HorizontalRule>

      <h4>where to find me:</h4>
      <ul>
        <li>twitter</li>
        <li>linked in</li>
        <li>github</li>
        <li>codepen</li>
      </ul>

      <h4>interested in learning to code?</h4>

      <p>
        read about my journey and tips here <a href="#">here</a>. it's a few
        years old and perhaps a little cheesy, but my advice still stands.
      </p>

      <h5>UI resources</h5>
      <ul>
        <li>free code camp</li>
        <li>gwen faraday</li>
        <li>odin project</li>
        <li>academy pittsburgh</li>
      </ul>
    </section>
  )
}

export default QuickLinks
