import React from 'react'
import "./SwapRightValue.css"
import DAIimage from "../../images/DAIimage.png"

const SwapRightValue = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <>
            <div className="boxContainerRightTop">
                            <div className="boxContainerRightTopHeader">
                                <div className="boxContainerRightTopHeaderLeft" style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}>
                                    To
                                </div>
                                <div className="boxContainerRightTopHeaderRight"></div>
                            </div>
                        </div>
                        <div className="boxContainerRightCenter">
                            <div className="boxContainerRightCenterShowBox">
                                <div className="boxContainerRightCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.06</span>
                                </div>
                                <div className="boxContainerRightCenterShowBoxRight">
                                    <img src={DAIimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>USDC</span></div>
                                </div>
                        </div>
                        <div className="boxContainerRightBottom" style={{border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                            <div className="boxContainerRightBottomBox">
                                <div className="boxContainerRightBottomBoxItems">
                                    <span className="boxContainerRightBottomBoxItem">
                                        <img src={DAIimage} alt="" className="image"/>
                                        <span className="font" style={{color: darkMode ? "#ffffff" : "#323742"}}>DAI</span>
                                    </span>
                                </div>
                                <div className="boxContainerRightBottomBoxItems">
                                    <span style={{background:"#5A6AF0"}} className="boxContainerRightBottomBoxItem">
                                        <img src={DAIimage} alt="" className="image"/>
                                        <span style={{color:"white"}} className="font">USDC</span>
                                    </span>
                                </div>
                                <div className="boxContainerRightBottomBoxItems">
                                    <span className="boxContainerRightBottomBoxItem">
                                        <img src={DAIimage} alt="" className="image"/>
                                        <span style={{color: darkMode ? "#ffffff" : "#323742"}} className="font">USDT</span>
                                    </span>
                                </div>
                                <div className="boxContainerRightBottomBoxItems">
                                    <span className="boxContainerRightBottomBoxItem">
                                        <img src={DAIimage} alt="" className="image"/>
                                        <span style={{color: darkMode ? "#ffffff" : "#323742"}} className="font">TUSD</span>
                                    </span>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default SwapRightValue
