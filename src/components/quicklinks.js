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
      const topOffset = (props.padding || 35);
      const leftOffset = props.padding || 35;

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

    window.addEventListener('resize', handleResize)

    
    
    // subtract 50 pixels

    // Not necessary to do in an effect, but for each individual SVG,
    // set a different, bottom, left, etc offset
  }, [])

  return (
    <section ref={sectionRef} className={quickLinkStyles.red}>
      <svg
        className="svg__one"
        width={`${svgConfig.svgWidth}px`}
        height="200px"
        opacity="0.1"
        style={
          {
            bottom: `${svgConfig.svgPosition.topOffset }px`,

          }
        }
      >
        <rect
          width={`${svgConfig.svgWidth}px`}
          height="200px"
          fill="var(--olive)"
        />
      </svg>



      <svg
        className="svg__two"
        width={`${svgConfig.svgWidth}px`}
        height="200px"
        opacity="0.1"
        style={
          {
            bottom: `${svgConfig.svgPosition.topOffset * 2}px`,
            right: `${svgConfig.svgPosition.leftOffset}px`,
          
          }
        }
      >
        <rect
          width={`${svgConfig.svgWidth}px`}
          height="200px"
          fill="var(--olive)"
        />
      </svg>
      <svg
        className="svg__three"
        width={`${svgConfig.svgWidth}px`}
        height="200px"
        opacity="0.1"
        style={
          {
            bottom: `${svgConfig.svgPosition.topOffset * 3}px`,
            left: `${svgConfig.svgPosition.leftOffset * 3}px`,
          }
        }
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
        <li>twitter</li>
        <li>linked in</li>
        <li>github</li>
        <li>codepen</li>
      </ul>

      <h4>interested in learning to code?</h4>

      <p>
        read about my journey and tips here <a href="#">here</a>. it's a few
        years old and perhaps a little cheesy, but my advice still stands.
      </p>

      <h5>UI resources</h5>
      <ul>
        <li>free code camp</li>
        <li>gwen faraday</li>
        <li>odin project</li>
        <li>academy pittsburgh</li>
      </ul>
    </section>
  )
}

export default QuickLinks
