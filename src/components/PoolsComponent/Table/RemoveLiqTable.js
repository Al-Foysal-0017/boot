import React from 'react'
import { Segment } from 'semantic-ui-react'
import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";
import DAIimage from "../../../images/DAIimage.png"

const RemoveLiqTable = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div style={{padding:"30px", borderRadius:"25px"}}>
            <Segment padded='very' textAlign='center' style={{padding:"15px", borderRadius:"25px"}}>
            <div className="boxContainerRightPoolsRemoveLiq" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        {/* <div className="boxContainerRightPoolsOptionTop">
                        <PoolTopbar/>
                        </div> */}

                        <div className="boxContainerRightPoolsOptionCenter">
                          <div className="PoolsRemLiqHeader" style={{marginTop:"40px"}}>Share of Liquidity (%)</div>
                          <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff"}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                </div>
                                </div>
                            </div>

                            <div className="PoolsRemLiqHeader" style={{marginTop:"100px"}}>Currencies</div>
                            <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{borderColor:"#E5E5E5"}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742",}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                    <span style={{fontSize:"10px", color:"#A3B7A7"}}>Max</span>
                                    <img src={DAIimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>DAI</span>
                                </div>
                                </div>
                            </div>
                            <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{borderColor:"#E5E5E5"}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                    <span style={{fontSize:"10px", color:"#A3B7A7"}}>Max</span>
                                    <img src={DAIimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>DAI</span>
                                </div>
                                </div>
                            </div>
                            <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{borderColor:"#E5E5E5"}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                    <span style={{fontSize:"10px", color:"#A3B7A7"}}>Max</span>
                                    <img src={DAIimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>DAI</span>
                                </div>
                                </div>
                            </div>
                            <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{borderColor:"#E5E5E5"}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                    <span style={{fontSize:"10px", color:"#A3B7A7"}}>Max</span>
                                    <img src={DAIimage} className="imageSmall" alt="" />
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>DAI</span>
                                </div>
                                </div>
                            </div>   
                        </div>


                        <div className="boxContainerRightPoolsOptionBottom">
                        <div className="PoolsRemLiqHeader">Withdraw (%) in</div>

                        <div className="withdrawBox">
                            <div className="withdrawBoxRow1">
                                <div className="withdrawBoxCol1">
                                    <img src={DAIimage} alt="" className="image"/>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>DAI</span>
                                </div>
                                <div className="withdrawBoxCol2">
                                    <img src={DAIimage} alt="" className="image"/>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>USDC</span>
                                </div>
                            </div>
                            <div className="withdrawBoxRow2">
                                <div className="withdrawBoxCol1">
                                    <img src={DAIimage} alt="" className="image"/>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>USDT</span>
                                </div>
                                <div className="withdrawBoxCol2">
                                    <img src={DAIimage} alt="" className="image"/>
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>TUSD</span>
                                </div>
                            </div>
                            <div className="withdrawBoxRow3" >
                                <span style={{display:"flex", justifyContent:"center",}}>
                                <img src={DAIimage} alt="" className="imagePools"/>
                                <img src={DAIimage} alt="" className="imagePools"/>
                                <img src={DAIimage} alt="" className="imagePools"/>
                                <img src={DAIimage} alt="" className="imagePools"/>
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>Combination of All Coins</span>
                                </span>
                            </div>
                        </div>


                        <div style={{marginTop:"30px"}} className="footerPoolOptionText">
                           <span className="footerInfoIcon">
                               <BiCheckboxChecked size="25px" style={{color:"#A3B7A7"}}/>
                               Infinite approval - trust this contact forever
                               <VscQuestion size="18px" style={{marginLeft:"5px", color:"gray"}}/>
                            </span>
                           </div>
                           <button className="footerPoolOptionButton">Remove Liquidity</button>
                        </div>
                    </div>

            </Segment>
        </div>
    )
}

export default RemoveLiqTable
