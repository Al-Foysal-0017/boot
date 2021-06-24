import React from 'react'
import DAIimage from "../../images/DAIimage.png"
import "./SwapLeftValue.css"

const SwapLeftValue = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <>
            <div className="boxContainerLeftTop">
                            <div className="boxContainerLeftTopHeader">
                                <div className="boxContainerLeftTopHeaderLeft" style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}>
                                    From
                                </div>
                                <div className="boxContainerLeftTopHeaderRight">
                                    <div style={{color:"#A3B7A7"}}>Balance</div>
                                    <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
                                </div>
                            </div>
                        </div>
                        <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox">
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                    <span style={{fontSize:"10px", color:"#A3B7A7"}}>Max</span>
                                    <img src={DAIimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>DAI</span></div>
                                </div>
                        </div>
                        <div className="boxContainerLeftBottom" style={{border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                            <div className="boxContainerLeftBottomBox">
                                <div className="boxContainerLeftBottomBoxItems">
                                    <span style={{background:"#5A6AF0"}} className="boxContainerLeftBottomBoxItem">
                                        <img src={DAIimage} alt="" className="image"/>
                                        <span style={{color:"white"}} className="font">DAI</span>
                                    </span>
                                </div>
                                <div className="boxContainerLeftBottomBoxItems">
                                    <span className="boxContainerLeftBottomBoxItem">
                                        <img src={DAIimage} alt="" className="image"/>
                                        <span style={{color: darkMode ? "#ffffff" : "#323742"}} className="font">USDC</span>
                                    </span>
                                </div>
                                <div className="boxContainerLeftBottomBoxItems">
                                    <span className="boxContainerLeftBottomBoxItem">
                                        <img src={DAIimage} alt="" className="image"/>
                                        <span style={{color: darkMode ? "#ffffff" : "#323742"}} className="font">USDT</span>
                                    </span>
                                </div>
                                <div className="boxContainerLeftBottomBoxItems">
                                    <span className="boxContainerLeftBottomBoxItem">
                                        <img src={DAIimage} alt="" className="image"/>
                                        <span style={{color: darkMode ? "#ffffff" : "#323742"}} className="font">TUSD</span>
                                    </span>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default SwapLeftValue
