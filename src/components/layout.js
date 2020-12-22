import React from "react"
//import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Navigation from "./Navigation"
import NameTag from "./NameTag"

class Layout extends React.Component {
  render() {
    const {
      location,
      // title,
      children,
    } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`
    // let header

    //if (location.pathname === rootPath)

    return (
      <div className="padding">
        <div>
          {location.pathname === rootPath ? (
            <Header></Header>
          ) : (
            <>
              <Navigation></Navigation>
              <NameTag></NameTag> 
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
