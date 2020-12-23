import React, { useState, useRef, useEffect } from "react"
import NameTag from "./NameTag"
import HorizontalRule from "./HorizontalRule"
import Navigation from "./Navigation"
import headerStyles from "./style-modules/header.module.css"
import MeAndReese from "../images/me-and-reese-icon.jpg"

const Header = (props) => {
  // Proposed breakpoint for header: 980px

  const [svgSize, setSvgSize] = useState(0)
  const [topOffset, setTopOffset] = useState(0)
  const [leftOffset, setLeftOffset] = useState(0)

  const imageRef = useRef()
  const imageContainer = useRef()

  const hrConfig = {
    width: "75%",
    color: "var(--olive)",
  }

  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {

        setSvgSize(`${imageRef.current.getBoundingClientRect().height}px`)
        setTopOffset(imageRef.current.offsetTop)
        setLeftOffset(imageRef.current.offsetLeft)

      }
    }

    setTimeout(() => {
      handleResize()
    }, 100)

    window.addEventListener("resize", () => {
      // console.log("window resized")
      handleResize()
    })
    // console.log("header rendered")
  }, [])

  return (
    <header>
      <Navigation></Navigation>
      <NameTag location={props.location}></NameTag>

      <div className={headerStyles.header__description_container}>
        <div className={headerStyles.header__description}>
          <div className={headerStyles.description__container}>
            <h2>Hi.</h2>
            <p>
              I’m Kalene, a frontend developer and lifelong-learner with a
              desire to help support others in, or looking to get into tech.
            </p>
          </div>
        </div>

        <div
          ref={imageContainer}
          className={headerStyles.header__image_container}
        >
          {/* TODO: refactor svgs into its own component */}
          <svg
            className={headerStyles.svg__one}
            width={svgSize}
            height={svgSize}
            style={{
              top: `${topOffset - 35}px`,
              left: `${leftOffset + 40}px`,
            }}
            opacity="0.1"
          >
            <rect
              width={svgSize}
              height={svgSize}
              fill="var(--light-olive)"
            />
          </svg>
          <svg
            className={headerStyles.svg__two}
            width={svgSize}
            height={svgSize}
            style={{
              top: `${topOffset + 40}px`,
              left: `${leftOffset + 85}px`,
            }}
            opacity="0.1"
          >
            <rect
              width={svgSize}
              height={svgSize}
              fill="var(--light-olive)"
            />
          </svg>
          <svg
            className={headerStyles.svg__three}
            width={svgSize}
            height={svgSize}
            style={{
              top: `${topOffset + 25}px`,
              left: `${leftOffset - 40}px`,
            }}
            opacity="0.1"
          >
            <rect
              width={svgSize}
              height={svgSize}
              fill="var(--light-olive)"
            />
          </svg>
          <img
            ref={imageRef}
            src={MeAndReese}
            alt="Kalene and her dog, Reese."
          />
        </div>
      </div>

      <HorizontalRule hrConfig={hrConfig}></HorizontalRule>
    </header>
  )
}

export default Header
