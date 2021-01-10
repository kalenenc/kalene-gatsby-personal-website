import React from "react"
import quickLinkStyles from "./style-modules/skills.module.css"

// ----- Icons -----
import HorizontalRule from "./HorizontalRule"
import AngularIcon from "../images/angular.png"
import BootstrapIcon from "../images/bootstrap.png"
import CSSIcon from "../images/css.png"
import DjangoIcon from "../images/django.png"
import DockerIcon from "../images/docker.png"
import FlexboxIcon from "../images/docker.png"
import GitIcon from "../images/git.png"
import GridIcon from "../images/grid.png"
import GulpIcon from "../images/gulp.png"
import JavaIcon from "../images/java.png"
import JavaScriptIcon from "../images/javascript.png"
import JenkinsIcon from "../images/jenkins.png"
import JestIcon from "../images/jest.png"
import KarmaIcon from "../images/karma.png"
import MaterialIcon from "../images/material.png"
import NgrxIcon from "../images/ngrx.png"
import PhotoshopIcon from "../images/photoshop.png"
import PythonIcon from "../images/python.png"
import ReactIcon from "../images/react.png"
import ReduxIcon from "../images/redux.png"
import SassIcon from "../images/sass.png"
import SketchIcon from "../images/sketch.png"
import SpringIcon from "../images/spring.png"
import TypeScriptIcon from "../images/typescript.png"
import VueIcon from "../images/vue.png"
import WebpackIcon from "../images/webpack.png"
import WordpressIcon from "../images/wordpress.png"

const Skills = _props => {
  const hrConfig = {
    width: "70%",
    color: "var(--green)",
    size: "0.4rem",
    paddingBottom: "var(--base-spacing)",
  }

  return (
    <section>
      <div className="heading_container">
        <h3>Skills</h3>
      </div>

      <HorizontalRule hrConfig={hrConfig} />

      <ul className={quickLinkStyles.skillList}>
        <li>
          <img src={JavaScriptIcon} alt="" />
          <span>JavaScript</span>
        </li>
        <li>
          <img src={TypeScriptIcon} alt="" />
          <span>TypeScript</span>
        </li>
        <li>
          <img src={AngularIcon} alt="" />
          <span>Angular</span>
        </li>
        <li>
          <img src={ReactIcon} alt="" />
          <span>React</span>
        </li>
        <li>
          <img src={VueIcon} alt="" />
          <span>Vue</span>
        </li>
        <li>
          <img src={NgrxIcon} alt="" />
          <span>Ngrx</span>
        </li>
        <li>
          <img src={ReduxIcon} alt="" />
          <span>Redux</span>
        </li>
        <li>
          <img src={JestIcon} alt="" />
          <span>Jest</span>
        </li>

        <li>
          <img src={KarmaIcon} alt="" />
          <span>Karma</span>
        </li>
        <li>
          <img src={CSSIcon} alt="" />
          <span>CSS</span>
        </li>
        <li>
          <img src={SassIcon} alt="" />
          <span>Sass</span>
        </li>
        <li>
          <img src={FlexboxIcon} alt="" />
          <span>Flex</span>
        </li>
        <li>
          <img src={GridIcon} alt="" />
          <span>Grid</span>
        </li>
        <li>
          <img src={MaterialIcon} alt="" />
          <span>Angular Material</span>
        </li>
        <li>
          <img src={BootstrapIcon} alt="" />
          <span>Bootstrap</span>
        </li>
        <li>
          <img src={JavaIcon} alt="" />
          <span>Java</span>
        </li>
        <li>
          <img src={SpringIcon} alt="" />
          <span>Spring</span>
        </li>
        <li>
          <img src={PythonIcon} alt="" />
          <span>Python</span>
        </li>
        <li>
          <img src={DjangoIcon} alt="" />
          <span>Django</span>
        </li>
        <li>
          <img src={WebpackIcon} alt="" />
          <span>Webpack</span>
        </li>
        <li>
          <img src={GulpIcon} alt="" />
          <span>Gulp</span>
        </li>
        <li>
          <img src={JenkinsIcon} alt="" />
          <span>Jenkins</span>
        </li>
        <li>
          <img src={DockerIcon} alt="" />
          <span>Docker</span>
        </li>
        <li>
          <img src={WordpressIcon} alt="" />
          <span>Wordpress</span>
        </li>
        <li>
          <img src={GitIcon} alt="" />
          <span>Git</span>
        </li>
        <li>
          <img src={SketchIcon} alt="" />
          <span>Sketch</span>
        </li>
        <li>
          <img src={PhotoshopIcon} alt="" />
          <span>Photoshop</span>
        </li>
      </ul>
    </section>
  )
}

export default Skills
