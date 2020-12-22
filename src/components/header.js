import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import NameTag from "./nametag"
import HorizontalRule from "./horizontalrule"
import Navigation from "./navigation"
import headerStyles from "./style-modules/header.module.css"
import MeAndReese from "../images/me-and-reese-icon.jpg"

function Header() {
  // Proposed breakpoint for header: 980px

  const [svgConfig, setSvgConfig] = useState({
    svgSize: null,
    svgPosition: {
      topOffset: null,
      leftOffset: null,
    },
  })
  const imageRef = useRef()
  const imageContainer = useRef()

  const hrConfig = {
    width: "75%",
    color: "var(--olive)",
  }

  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        const svgSize = `${imageRef.current.getBoundingClientRect().height}px`
        const topOffset = imageRef.current.offsetTop
        const leftOffset = imageRef.current.offsetLeft

        const newState = {
          svgSize,
          svgPosition: {
            topOffset,
            leftOffset,
          },
        }

        setSvgConfig(newState)
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
      <NameTag></NameTag>

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
            width={svgConfig.svgSize}
            height={svgConfig.svgSize}
            style={{
              top: `${svgConfig.svgPosition.topOffset - 35}px`,
              left: `${svgConfig.svgPosition.leftOffset + 40}px`,
            }}
            opacity="0.1"
          >
            <rect
              width={svgConfig.svgSize}
              height={svgConfig.svgSize}
              fill="var(--light-olive)"
            />
          </svg>
          <svg
            className={headerStyles.svg__two}
            width={svgConfig.svgSize}
            height={svgConfig.svgSize}
            style={{
              top: `${svgConfig.svgPosition.topOffset + 40}px`,
              left: `${svgConfig.svgPosition.leftOffset + 85}px`,
            }}
            opacity="0.1"
          >
            <rect
              width={svgConfig.svgSize}
              height={svgConfig.svgSize}
              fill="var(--light-olive)"
            />
          </svg>
          <svg
            className={headerStyles.svg__three}
            width={svgConfig.svgSize}
            height={svgConfig.svgSize}
            style={{
              top: `${svgConfig.svgPosition.topOffset + 25}px`,
              left: `${svgConfig.svgPosition.leftOffset - 40}px`,
            }}
            opacity="0.1"
          >
            <rect
              width={svgConfig.svgSize}
              height={svgConfig.svgSize}
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
