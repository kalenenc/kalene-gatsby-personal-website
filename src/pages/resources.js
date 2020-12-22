import React from "react"
import Layout from "../components/layout"
import pagesStyles from '../components/style-modules/pages.module.css'
//import resourceStyles from "../components/style-modules/resources.module.css"


const Resources = (props) => {
  return (
    <Layout location={props.location}>
      <section className={pagesStyles.section}>
        <h2>Resources</h2>
      </section>
    </Layout>
  )
}

export default Resources;
