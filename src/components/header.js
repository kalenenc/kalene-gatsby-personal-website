import React, { useState, useRef, useEffect} from "react"
import NameTag from './nametag'
import Navigation from './navigation'
import headerStyles from './style-modules/header.module.css'
import MeAndReese from '../images/me-and-reese-icon.jpg'

function Header() {
    // Proposed breakpoint for header: 980px

    const [svgConfig, setSvgConfig] = useState(
        {   
            svgSize: null, 
            svgPosition: { 
                topOffset: null,
                leftOffset: null,
            }
        }
    )
    const imageRef = useRef();
    const imageContainer = useRef();

    // const handleResize = () => {
    //     const svgSize = imageRef.current.getBoundingClientRect().height;
    //     const topOffset = `${imageRef.current.offsetTop}px`
    //     const leftOffset = `${imageRef.current.offsetLeft}px`

    //     const newState = {
    //         ...svgConfig,
    //         svgSize,
    //         svgPosition: {
    //             ...svgConfig.svgPosition,
    //             topOffset,
    //             leftOffset
    //         }
    //     }

    //     setSvgConfig(newState);

    //     console.log('handleResize called')
    //     console.log('svgConfig', svgConfig)
    // }

    // --- Effects ---
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize)

    //     return _ => {
    //         window.removeEventListener('resize', handleResize)
    //     } 
    // })

    // Send in empty array to only run on mount and unmount of component
    useEffect(() => {

        let newState;
        const handleResize = () => {
            const svgSize = `${imageRef.current.getBoundingClientRect().height}`;
            const topOffset = `${imageRef.current.offsetTop}px`
            const leftOffset = `${imageRef.current.offsetLeft}px`
    
            newState = {
                svgSize,
                svgPosition: {
                    topOffset,
                    leftOffset
                }
            }
    
            setSvgConfig(newState);
            console.log('handleResize called')
        }


        handleResize()

        window.addEventListener('resize', handleResize)

    }, [])


            
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
                    {/* <div className={headerStyles.svg__container} > */}

                        <svg 
                            className={headerStyles.svg__one} 
                            width={svgConfig.svgSize} 
                            height={svgConfig.svgSize} 
                            style={ {top: svgConfig.svgPosition.topOffset, left: svgConfig.svgPosition.leftOffset } }
                            xmlns="http://www.w3.org/2000/svg" 
                            opacity="0.1"
                        >
                            <rect width={svgConfig.svgSize} height={svgConfig.svgSize} fill="var(--light-olive)" />
                        </svg>
                        <svg 
                            className={headerStyles.svg__two}  
                            width={svgConfig.svgSize} 
                            height={svgConfig.svgSize} 
                            style={ {top: svgConfig.svgPosition.topOffset, left: svgConfig.svgPosition.leftOffset } }
                            xmlns="http://www.w3.org/2000/svg" 
                            opacity="0.1"
                        >
                            <rect width={svgConfig.svgSize} height={svgConfig.svgSize} fill="var(--light-olive)" />
                        </svg>
                        <svg 
                            className={headerStyles.svg__three}  
                            width={svgConfig.svgSize} 
                            height={svgConfig.svgSize} 
                            style={ {top: svgConfig.svgPosition.topOffset, left: svgConfig.svgPosition.leftOffset } }
                            xmlns="http://www.w3.org/2000/svg" 
                            opacity="0.1"
                        >
                            <rect width={svgConfig.svgSize} height={svgConfig.svgSize} fill="var(--light-olive)" />
                        </svg>
                    {/* </div> */}
                    <img ref={imageRef} src={MeAndReese} alt="Kalene and her dog, Reese."/>

                </div>
            </div>

            <hr/>

        </header>
    )

}

export default Header;