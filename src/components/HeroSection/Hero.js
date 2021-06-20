import React from 'react'
import "./Hero.css"

const Hero = ({Content}) => {
    return (
        <div className="HeroContainer" id="home">
            <div className="HeroBg">
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
            </div>

            <div className="HeroContent">
            <div className="HeroH1">{Content}</div>
            {/* <div className="HeroP">Sign up for a new account today receive $250 in next payment.</div> */}
            
            {/* <div className="HeroBtnWrapper">
                <div className="Button">
                    Get started 
                </div>
            </div> */}
            </div>
        </div>
    )
}

export default Hero

