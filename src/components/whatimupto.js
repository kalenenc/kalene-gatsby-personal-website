import React from "react"
import whatImUpToStyles from "./style-modules/whatimupto.module.css"

const WhatImUpTo = _props => (
  <section>
    <div className={`x-lg--spacing ${whatImUpToStyles.container}`}>
      <h3>Currently I'm...</h3>
      <ul>
        <li>Deep diving into advanced React and GraphQL topics</li>
        <li>Digging deeper into API development</li>
        <li>Learning Python</li>
        <li>Revisiting computer science fundamentals and algorithm design</li>
      </ul>
    </div>

    <div className={`${whatImUpToStyles.skill__container} x-lg--spacing`}>
      <h3>Skills</h3>

      <div>
        <ul className={whatImUpToStyles.grid}>
          <div className={whatImUpToStyles.half}>
            <li>JavaScript</li>
            <ul>
              <li>TypeScript </li>
              <li>Angular</li>
              <li>React</li>
              <li>Vue</li>
              <li>Ngrx</li>
              <li>Redux</li>
              <li>Jest/Karma</li>
            </ul>

            <li>CSS</li>
            <ul>
              <li>SCSS/SASS</li>
              <li>Flex</li>
              <li>Grid</li>
              <li>Angular Material</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className={whatImUpToStyles.half}>
            <li>Java</li>
            <ul>
              <li>Spring</li>
              <li>Servlets</li>
              <li>Groovy</li>
            </ul>
            <li>Python</li>
            <ul>
              <li>Django</li>
            </ul>

            <li>Build tools/task runners/etc</li>
            <ul>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>Jenkins</li>
              <li>Docker</li>
              <li>Git</li>
            </ul>

            <li>Design tools</li>
            <ul>
              <li>Sketch</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </section>
)

export default WhatImUpTo
