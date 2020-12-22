import React, { useEffect, useRef, useState } from "react"
import HorizontalRule from "./horizontalrule"
import quickLinkStyles from "./style-modules/quicklinks.module.css"

// @TODO: make this a reusuable component
const QuickLinks = props => {

  const [svgWidth, setSvgWidth] = useState(0)
  const [topOffset, setTopOffset] = useState(0)
  const [leftOffset, setLeftOffset] = useState(0)

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
      if(sectionRef.current) {
        const sectionWidth = sectionRef.current.getBoundingClientRect().width
        setSvgWidth(sectionWidth - sectionWidth * 0.25)
        setTopOffset(props.padding || 35)
        setLeftOffset(props.padding || 35)
      }
    }

    setTimeout(() => {
      handleResize()
    }, 100)

    window.addEventListener("resize", handleResize)

  }, [])

  return (
    <section ref={sectionRef} className={quickLinkStyles.quickLinks__section }>
      <svg
        width={`${svgWidth}px`}
        height="200px"
        opacity="0.1"
        style={{
          bottom: `${topOffset}px`,
        }}
      >
        <rect
          width={`${svgWidth}px`}
          height="200px"
          fill="var(--olive)"
        />
      </svg>

      <svg
        width={`${svgWidth}px`}
        height="200px"
        opacity="0.1"
        style={{
          bottom: `${topOffset * 2}px`,
          right: `${leftOffset}px`,
        }}
      >
        <rect
          width={`${svgWidth}px`}
          height="200px"
          fill="var(--olive)"
        />
      </svg>
      <svg
        width={`${svgWidth}px`}
        height="200px"
        opacity="0.1"
        style={{
          bottom: `${topOffset * 3}px`,
          left: `${leftOffset * 3}px`,
        }}
      >
        <rect
          width={`${svgWidth}px`}
          height="200px"
          fill="var(--olive)"
        />
      </svg>
      <h3>Quick Links</h3>
      <HorizontalRule hrConfig={hrConfig}></HorizontalRule>

      <div className={quickLinkStyles.container}>
        <h4>Where to Find Me:</h4>
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
      </div>
      

      <div className={quickLinkStyles.container}>
        <h4>Interested in Learning to Code?</h4>

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
      </div>
      
    </section>
  )
}

export default QuickLinks;