import React from "react"
import Layout from "../components/layout"
import pagesStyles from "../components/style-modules/pages.module.css"

const About = props => {
  return (
    <Layout location={props.location}>
      <section className={pagesStyles.section}>
        <h2>About me</h2>
        <p>
          I am a self-taught software developer with a focus on the frontend.
        </p>

        <p>
          This website is a mixture of my personal blog posts, some technical
          tutorials, and resources I think other developers/code newbies would
          find useful, that I personally have found informative myself.{" "}
        </p>

        <p>Thanks for stopping by!</p>
      </section>
    </Layout>
  )
}

export default About
