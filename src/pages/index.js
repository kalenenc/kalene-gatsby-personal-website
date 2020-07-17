import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuickLinks from "../components/quicklinks"
import WhatImUpTo from '../components/whatimupto'

class IndexPage extends React.Component {
  render() {
    // console.log('this.props - index.js', this.props)
    const siteTitle = this.props.data.site.siteMetadata.title
    

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`Kalene Csefalvay`, `Kalene`, `Csefalvay`, `frontend developer`]}
        />

        <WhatImUpTo></WhatImUpTo>

        <QuickLinks></QuickLinks>

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
  }
`
