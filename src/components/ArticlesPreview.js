import React from "react"
import { Link } from "gatsby"
import HorizontalRule from "./HorizontalRule"
import articlesPreviewStyles from "./style-modules/articlespreview.module.css"

// @TODO: see if potentially this could be re-used in blog.js?
const ArticlesPreview = props => {
  const posts = props.posts
  const firstFourPosts = posts.slice(0, 4)

  const hrConfig = {
    width: "70%",
    color: "var(--green)",
    size: "0.4rem",
    paddingBottom: "var(--base-spacing)",
  }

  return (
    <section>
      <div className="heading_container">
        <h3>Recent Articles</h3>
        <Link className={articlesPreviewStyles.view_all} to="/blog">
          View all
        </Link>
      </div>

      <HorizontalRule hrConfig={hrConfig} />

      {firstFourPosts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link to={`blog${node.fields.slug}`}> {title}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
    </section>
  )
}

export default ArticlesPreview
