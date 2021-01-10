import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import pagesStyles from "../components/style-modules/pages.module.css"
import blogStyles from "../components/style-modules/blog.module.css"
import HorizontalRule from "../components/HorizontalRule"

const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  const hrConfig = {
    width: "100%",
    color: "var(--green)",
    size: "0.4rem",
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <section className={pagesStyles.section}>
        <h2>Blog</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className={blogStyles.post}>
              <h3>
                <Link to={`blog${node.fields.slug}`}> {title}</Link>
              </h3>
              <small className={blogStyles.date}>{node.frontmatter.date}</small>
              <p
                className={blogStyles.description}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />

              <HorizontalRule hrConfig={hrConfig}></HorizontalRule>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
