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

    useEffect(() => {

        let newState;
        const handleResize = () => {
            const svgSize = `${imageRef.current.getBoundingClientRect().height}px`;
            const topOffset = imageRef.current.offsetTop;
            const leftOffset = imageRef.current.offsetLeft;
    
            newState = {
                svgSize,
                svgPosition: {
                    topOffset,
                    leftOffset
                }
            }
    
            setSvgConfig(newState);
            //console.log('handleResize called')
        }

        setTimeout(()=> {
            handleResize()
        }, 100)

        window.addEventListener('resize', handleResize)

    }, [])

            
    return (
        
        <header>
            <Navigation></Navigation>
            <NameTag></NameTag>

            <div className={headerStyles.header__description_container}>
                <div className={headerStyles.header__description}>
                    <div className={headerStyles.description__container}>
                        <h2>Hi.</h2>
                        <p>I’m Kalene, a frontend developer and lifelong-learner with a desire to help support others in, or looking to get into tech.</p>
                        <p>Read more about my journey <a href="#">here</a>.</p>
                    </div>
                </div>

                <div ref={imageContainer} className={headerStyles.header__image_container}> 
                        <svg 
                            className={headerStyles.svg__one} 
                            width={svgConfig.svgSize} 
                            height={svgConfig.svgSize} 
                            style={ 
                                {
                                    top: `${svgConfig.svgPosition.topOffset - 35}px` , 
                                    left: `${svgConfig.svgPosition.leftOffset + 40}px` 
                                }
                            }
                            xmlns="http://www.w3.org/2000/svg" 
                            opacity="0.1"
                        >
                            <rect width={svgConfig.svgSize} height={svgConfig.svgSize} fill="var(--light-olive)" />
                        </svg>
                        <svg 
                            className={headerStyles.svg__two}  
                            width={svgConfig.svgSize} 
                            height={svgConfig.svgSize} 
                            style={ 
                                {
                                    top: `${svgConfig.svgPosition.topOffset + 40}px`, 
                                    left: `${svgConfig.svgPosition.leftOffset + 85}px` 
                                } 
                            }
                            xmlns="http://www.w3.org/2000/svg" 
                            opacity="0.1"
                        >
                            <rect width={svgConfig.svgSize} height={svgConfig.svgSize} fill="var(--light-olive)" />
                        </svg>
                        <svg 
                            className={headerStyles.svg__three}  
                            width={svgConfig.svgSize} 
                            height={svgConfig.svgSize} 
                            style={ 
                                {
                                    top: `${svgConfig.svgPosition.topOffset + 25}px` , 
                                    left: `${svgConfig.svgPosition.leftOffset - 40}px` 
                                }
                            }
                            xmlns="http://www.w3.org/2000/svg" 
                            opacity="0.1"
                        >
                            <rect width={svgConfig.svgSize} height={svgConfig.svgSize} fill="var(--light-olive)" />
                        </svg>
                    <img ref={imageRef} src={MeAndReese} alt="Kalene and her dog, Reese."/>

                </div>
            </div>

            <hr/>

        </header>
    )

}

export default Header;