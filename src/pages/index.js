import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlesPreview from "../components/ArticlesPreview"
import Skills from "../components/Skills"

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `Kalene Csefalvay`,
            `Kalene`,
            `Csefalvay`,
            `frontend developer`,
          ]}
        />

        <ArticlesPreview posts={posts} />

        <Skills />
      </Layout>
    )
  }
}

export default IndexPage

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
