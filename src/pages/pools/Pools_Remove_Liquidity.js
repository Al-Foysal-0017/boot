import "./Pools_Remove_Liquidity.css"
import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';
import DAIimage from "../../images/DAIimage.png"
import { userData } from "../../dummyData";
import Chart from '../../components/PoolsComponent/Chart';
import { AiOutlineLeft } from "react-icons/ai";
import CurrencyName from '../../components/PoolsComponent/CurrencyName';
import UnderlyingTokens from '../../components/PoolsComponent/UnderlyingTokens';
import TotalValueLocked from '../../components/PoolsComponent/TotalValueLocked';
import PoolTopbar from '../../components/PoolsComponent/PoolTopbar';
import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";

const Pools_Remove_Liquidity = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div>
            <Navbar/>
            <div>
            <div className="containerPoolsRemoveLiq" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                <div className="containerLeftPoolsOption"></div>
                
                <div className="containerCenterPoolsOption">
                    <div className="containerCenterHeaderPoolsOptionBox">   
                        <div className="containerCenterHeaderPoolsOptionBoxLeft"> 
                            <div className="BackLinkSpan">
                            <Link to="/pools" className="BackLink">
                            <AiOutlineLeft style={{paddingTop:"4px", marginLeft:"15px"}}/>
                            Back
                            </Link>
                            </div>
                        </div>                
                        <div className="containerCenterHeaderPoolsOptionCenter" style={{color: darkMode ? "#ffffff" : "#323742"}}>Details</div>
                        <div className="containerCenterHeaderPoolsOptionBoxRight"></div>
                    </div>
                   
                   <div className="boxContainerPoolsOptionX" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                   <div className="boxContainerPoolsOptionSSS" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    <div className="boxContainerLeftPoolsRemoveLiq" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}} className="boxContainerLeftPoolsOptionTop">
                            <CurrencyName/>
                            <div className="boxContainerLeftPoolsOptionTopValuesSet">
                                <TotalValueLocked/>
                            </div>
                            <div style={{paddingLeft:"20px" ,paddingTop:"20px", paddingBottom:"10px"}} className="boxContainerLeftPoolsOptionTopValueName">Underlying Tokens</div>
                            <span style={{paddingLeft:"20px"}}><UnderlyingTokens/></span>
                        </div>
                        <div className="boxContainerLeftPoolsOptionBottom">
                        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
                        </div>
                    </div>


                    <div className="boxContainerRightPoolsRemoveLiq" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerRightPoolsOptionTop">
                        <PoolTopbar/>
                        </div>

                        <div className="boxContainerRightPoolsOptionCenter">
                          <div className="PoolsRemLiqHeader">Share of Liquidity (%)</div>
                          <div className="boxContainerLeftCenter">
                            <div className="boxContainerLeftCenterShowBox" style={{backgroundColor: darkMode ? "#22262A" : "#ffffff"}}>
                                <div className="boxContainerLeftCenterShowBoxLeft">
                                <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                </div>
                                <div className="boxContainerLeftCenterShowBoxRight">
                                </div>
                                </div>
                            </div>

                            <div className="PoolsRemLiqHeader" style={{paddingTop:"30px"}}>Currencies</div>
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
                    
                   </div>
                    
                   </div>
                </div>
                <div className="containerRightPools"></div>
            </div>
        </div>
        </div>
    )
}

export default Pools_Remove_Liquidity
