import React from "react"
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaDev,
} from "react-icons/fa"
import footerStyles from "./style-modules/footer.module.css"

const Footer = _props => {
  const today = new Date()
  const fullYear = today.getFullYear()

  return (
    <footer className={footerStyles.red}>
      <ul>
        <li>
          <a href="https://www.twitter.com/kalenenc">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kalenenc/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/kalenenc">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/kalenenc">
            <FaCodepen />
          </a>
        </li>
        <li>
          <a href="https://dev.to/kalenenc">
            <FaDev />
          </a>
        </li>
      </ul>
      <p>&copy; {fullYear}, all rights reserved</p>
    </footer>
  )
}

export default Footer
