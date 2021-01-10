import React from "react"
//import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Navigation from "./Navigation"
import NameTag from "./NameTag"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className="padding">
        <div className="container">
          {location.pathname === rootPath ? (
            <Header location={location.pathname}></Header>
          ) : (
            <>
              <Navigation></Navigation>
              <NameTag location={location.pathname}></NameTag>
            </>
          )}

          <main>{children}</main>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default Layout

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
