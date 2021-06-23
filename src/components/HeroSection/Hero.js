import React from 'react'
import "./Hero.css"

const Hero = ({Content}) => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div className="HeroContainer" id="home" >
            <div className="HeroBg" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
            </div>

            <div className="HeroContent" style={{backgroundColor: darkMode ? "#323842" : "#F7F8FD"}}>
            <div className="HeroH1" style={{color: darkMode ? "#fff" : "#5A6AF0"}}>{Content}</div>
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

