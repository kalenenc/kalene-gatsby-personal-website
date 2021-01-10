import React from "react"
import { Link } from "gatsby"
import HorizontalRule from "./HorizontalRule"
import resourcesPreviewStyles from "./style-modules/resources-preview.module.css"

const ResourcesPreview = _props => {
  const hrConfig = {
    width: "70%",
    color: "var(--green)",
    size: "0.4rem",
    paddingBottom: "var(--base-spacing)",
  }

  return (
    <section className={resourcesPreviewStyles.section}>
      <div className="heading_container">
        <h3>Resources</h3>
      </div>
      <HorizontalRule hrConfig={hrConfig} />

      <p>Interested in resources to help you learn now to code?</p>

      <p>
        I've compiled a list of resources that have been the most helpful for me
        at all different levels of my coding journey.
      </p>

      <Link to="/resources" className={resourcesPreviewStyles.link}>
        resources →
      </Link>
    </section>
  )
}

export default ResourcesPreview
