import React, { useEffect, useRef, useState } from "react"
import HorizontalRule from "./horizontalrule"
import quickLinkStyles from "./style-modules/quicklinks.module.css"

// @TODO: make this a reusuable component
const QuickLinks = props => {
  const [svgConfig, setSvgConfig] = useState({
    svgWidth: 0,
    svgPosition: {
      topOffset: null,
      leftOffset: null,
    },
  })
  const sectionRef = useRef()

  const hrConfig = {
    width: "100%",
    color: "var(--olive)",
  }

  useEffect(() => {
    // After the page is loaded, get the actual pixel value of the width
    // of the section, minus a few pixels
    // Apply that width to all of the SVGs

    const handleResize = () => {
      const sectionWidth = sectionRef.current.getBoundingClientRect().width
      const svgWidth = sectionWidth - sectionWidth * 0.25
      // @TODO: pass in padding to each section as a prop
      const topOffset = props.padding || 35
      const leftOffset = props.padding || 35

      const newState = {
        svgWidth,
        svgPosition: {
          topOffset,
          leftOffset,
        },
      }

      setSvgConfig(newState)
    }

    setTimeout(() => {
      handleResize()
    }, 100)

    window.addEventListener("resize", handleResize)

  }, [])

  return (
    <section ref={sectionRef} className={quickLinkStyles.quickLinks__section }>
      <svg
        width={`${svgConfig.svgWidth}px`}
        height="200px"
        opacity="0.1"
        style={{
          bottom: `${svgConfig.svgPosition.topOffset}px`,
        }}
      >
        <rect
          width={`${svgConfig.svgWidth}px`}
          height="200px"
          fill="var(--olive)"
        />
      </svg>

      <svg
        width={`${svgConfig.svgWidth}px`}
        height="200px"
        opacity="0.1"
        style={{
          bottom: `${svgConfig.svgPosition.topOffset * 2}px`,
          right: `${svgConfig.svgPosition.leftOffset}px`,
        }}
      >
        <rect
          width={`${svgConfig.svgWidth}px`}
          height="200px"
          fill="var(--olive)"
        />
      </svg>
      <svg
        width={`${svgConfig.svgWidth}px`}
        height="200px"
        opacity="0.1"
        style={{
          bottom: `${svgConfig.svgPosition.topOffset * 3}px`,
          left: `${svgConfig.svgPosition.leftOffset * 3}px`,
        }}
      >
        <rect
          width={`${svgConfig.svgWidth}px`}
          height="200px"
          fill="var(--olive)"
        />
      </svg>
      <h3>Quick links</h3>
      <HorizontalRule hrConfig={hrConfig}></HorizontalRule>

      <h4>where to find me:</h4>
      <ul>
        <li>
          <a href="https://twitter.com/kalenenc" className={quickLinkStyles.link}>Twitter</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kalenenc/" className={quickLinkStyles.link}>LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/kalenenc" className={quickLinkStyles.link}>Github</a>
        </li>
        <li>
          <a href="https://codepen.io/kalenenc" className={quickLinkStyles.link}>CodePen</a>
        </li>
        <li>
          <a href="https://dev.to/kalenenc" className={quickLinkStyles.link}>dev.to</a>
        </li>
      </ul>

      <h4>Interested in learning to code?</h4>

      <p>
        Read about my journey and tips here <a href="#" className={quickLinkStyles.link}>here</a>. It's a few
        years old and perhaps a little cheesy, but my advice still stands.
      </p>

      <p>
        For a full list of resources on my personal recommendations on learning
        to code, please check out the following <a href="#" className={quickLinkStyles.link}>page</a>.
      </p>
      <p>
        Please note I do not, and never have, recieved any money for
        recommending any of these resources; they are simply what I found to be
        helpful on my journey.
      </p>
    </section>
  )
}

export default QuickLinks;