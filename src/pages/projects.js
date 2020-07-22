import React from "react"
import Layout from "../components/layout"
import pagesStyles from '../components/style-modules/pages.module.css'

const Projects = props => {
  return (
    <Layout location={props.location}>
      <section className={pagesStyles.section}>
        <h2>Projects</h2>
      </section>
    </Layout>
  )
}

export default Projects
