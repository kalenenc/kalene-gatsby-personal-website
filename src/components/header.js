import React, { useState, useRef, useEffect} from "react"
import NameTag from './nametag'
import Navigation from './navigation'
import headerStyles from './style-modules/header.module.css'
import MeAndReese from '../images/me-and-reese-icon.jpg'

function Header() {
    // Proposed breakpoint for header: 980px

    const [svgSize, setSvgSize] = useState(null)
    const imageRef = useRef();
    const imageContainer = useRef()

    // @TODO: clean up to removoe effect when componentWillUnmount()
    useEffect(() => {
        function handleResize() {
            const imageContainerWidth = imageContainer.current.getBoundingClientRect().height;
            setSvgSize(imageContainerWidth)
            console.log('handleResize called; svgSize: ', svgSize)
        }

        window.addEventListener('resize', handleResize)

        handleResize()
    })

            
    return (
        
        <header>
            <Navigation></Navigation>
            <NameTag></NameTag>

            <div className={headerStyles.header__description_container}>
                <div className={headerStyles.header__description}>
                    <h2>Hi.</h2>
                    <p>I’m Kalene, a frontend developer and lifelong-learner with a desire to help support others in, or looking to get into tech.</p>
                    <p>Read more about my journey <a href="#">here</a>.</p>
                </div>

                <div ref={imageContainer} className={headerStyles.header__image_container}> 
 
                    <div className={headerStyles.svg__container} >

                        <svg className={headerStyles.svg__one} width={svgSize} height={svgSize} xmlns="http://www.w3.org/2000/svg" opacity="0.1">
                            <rect width={svgSize} height={svgSize} fill="var(--light-olive)" />
                        </svg>
                        <svg className={headerStyles.svg__two}  width={svgSize} height={svgSize} xmlns="http://www.w3.org/2000/svg" opacity="0.1">
                            <rect width={svgSize} height={svgSize} fill="var(--light-olive)" />
                        </svg>
                        <svg className={headerStyles.svg__three}  width={svgSize} height={svgSize} xmlns="http://www.w3.org/2000/svg" opacity="0.1">
                            <rect width={svgSize} height={svgSize} fill="var(--light-olive)" />
                        </svg>
                    </div>
                    <img style={{width: `${svgSize * 0.85}px`}} ref={imageRef} src={MeAndReese} alt="Kalene and her dog, Reese."/>

                </div>
            </div>

            <hr/>

        </header>
    )

}

export default Header;