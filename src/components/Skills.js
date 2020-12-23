import React from "react"
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

      <ul>
        <li>
          <img src={JavaScriptIcon} alt="" />
          JavaScript
        </li>
        <li>
          <img src={TypeScriptIcon} alt="" />
          TypeScript
        </li>
        <li>
          <img src={AngularIcon} alt="" />
          Angular
        </li>
        <li>
          <img src={ReactIcon} alt="" />
          React
        </li>
        <li>
          <img src={VueIcon} alt="" />
          Vue
        </li>
        <li>
          <img src={NgrxIcon} alt="" />
          Ngrx
        </li>
        <li>
          <img src={ReduxIcon} alt="" />
          Redux
        </li>
        <li>
          <img src={JestIcon} alt="" />
          Jest
        </li>

        <li>
          <img src={KarmaIcon} alt="" />
          Karma
        </li>
        <li>
          <img src={CSSIcon} alt="" />
          CSS
        </li>
        <li>
          <img src={SassIcon} alt="" />
          Sass
        </li>
        <li>
          <img src={FlexboxIcon} alt="" />
          Flex
        </li>
        <li>
          <img src={GridIcon} alt="" />
          Grid
        </li>
        <li>
          <img src={MaterialIcon} alt="" />
          Angular Material
        </li>
        <li>
          <img src={BootstrapIcon} alt="" />
          Bootstrap
        </li>
        <li>
          <img src={JavaIcon} alt="" />
          Java
        </li>
        <li>
          <img src={SpringIcon} alt="" />
          Spring
        </li>
        <li>
          <img src={PythonIcon} alt="" />
          Python
        </li>
        <li>
          <img src={DjangoIcon} alt="" />
          Django
        </li>
        <li>
          <img src={WebpackIcon} alt="" />
          Webpack
        </li>
        <li>
          <img src={GulpIcon} alt="" />
          Gulp
        </li>
        <li>
          <img src={JenkinsIcon} alt="" />
          Jenkins
        </li>
        <li>
          <img src={DockerIcon} alt="" />
          Docker
        </li>
        <li>
          <img src={WordpressIcon} alt="" />
          Wordpress
        </li>
        <li>
          <img src={GitIcon} alt="" />
          Git
        </li>
        <li>
          <img src={SketchIcon} alt="" />
          Sketch
        </li>
        <li>
          <img src={PhotoshopIcon} alt="" />
          Photoshop
        </li>
      </ul>
    </section>
  )
}

export default Skills
