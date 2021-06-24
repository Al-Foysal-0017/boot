import React from 'react'
import DAIimage from "../../images/DAIimage.png"

const UnderlyingTokens = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div>
            <div style={{display:"flex", textAlign:"center"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", textAlign:"center"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", textAlign:"center"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", textAlign:"center", paddingBottom:"10px"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
        </div>
    )
}

export default UnderlyingTokens
