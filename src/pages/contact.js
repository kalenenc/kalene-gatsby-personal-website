import React from "react"
import Layout from "../components/layout"
import pagesStyles from '../components/style-modules/pages.module.css'

const Contact = props => {
  return (
    <Layout location={props.location}>
      <section className={pagesStyles.section}>
        <h2>Contact works</h2>
      </section>
    </Layout>
  )
}

export default Contact
