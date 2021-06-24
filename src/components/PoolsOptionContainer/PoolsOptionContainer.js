import React from 'react'
import { Link } from 'react-router-dom';
import "./PoolsOptionContainer.css"
import DAIimage from "../../images/DAIimage.png"
import { userData } from "../../dummyData";
import Chart from '../PoolsComponent/Chart';
import { AiOutlineLeft } from "react-icons/ai";
import CurrencyName from '../PoolsComponent/CurrencyName';
import UnderlyingTokens from '../PoolsComponent/UnderlyingTokens';
import TotalValueLocked from '../PoolsComponent/TotalValueLocked';
import PoolTopbar from '../PoolsComponent/PoolTopbar';
  

const PoolsOptionContainer = ({ title, data, dataKey, grid }) => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div>
            <div className="containerPoolsOption" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                <div className="containerLeftPoolsOption"></div>
                
                <div className="containerCenterPoolsOption">
                    <div className="containerCenterHeaderPoolsOptionBox">   
                        <div className="containerCenterHeaderPoolsOptionBoxLeft"> 
                            <div className="BackLinkSpan">
                                <Link to="/pools" className="BackLink">
                                <AiOutlineLeft style={{paddingTop:"4px"}}/>
                                 Back
                                </Link>
                            </div>
                        </div>                
                        <div className="containerCenterHeaderPoolsOptionCenter" style={{color: darkMode ? "#ffffff" : "#323742"}}>Details</div>
                        <div className="containerCenterHeaderPoolsOptionBoxRight"></div>
                    </div>
                   
                   <div className="boxContainerPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                   <div className="boxContainerPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    <div className="boxContainerLeftPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerLeftPoolsOptionTop">
                            <CurrencyName/>
                            <div className="boxContainerLeftPoolsOptionTopValuesSet">
                                <TotalValueLocked/>
                            </div>
                            <div style={{paddingTop:"20px", paddingBottom:"10px"}} className="boxContainerLeftPoolsOptionTopValueName">Underlying Tokens</div>
                            <UnderlyingTokens/>
                        </div>
                        <div className="boxContainerLeftPoolsOptionBottom">
                        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
                        </div>
                    </div>
                    <div className="boxContainerRightPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerRightPoolsOptionTop">
                            <PoolTopbar/>
                            
                        </div>
                        <div className="boxContainerRightPoolsOptionCenter">
                            <div className="boxContainerRightPoolsOptionCenterHeader">Currencies</div>
                            
                            <div className="boxContainerRightPoolsOptionCenterList">
                                <div className="boxContainerRightPoolsOptionCenterListItem">
                                    <span>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"7px"}}>Max</span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"4px"}}>DAI</span>
                                    </span>
                                    <span>
                                        <div>Balance</div>
                                        <div>52045.003</div>
                                    </span>
                                </div>
                                <div className="boxContainerRightPoolsOptionCenterListItem">
                                    <span>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"7px"}}>Max</span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"4px"}}>DAI</span>
                                    </span>
                                    <span>
                                        <div>Balance</div>
                                        <div>52045.003</div>
                                    </span>
                                </div>
                                <div className="boxContainerRightPoolsOptionCenterListItem">
                                    <span>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"7px"}}>Max</span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"4px"}}>DAI</span>
                                    </span>
                                    <span>
                                        <div>Balance</div>
                                        <div>52045.003</div>
                                    </span>
                                </div>
                                <div className="boxContainerRightPoolsOptionCenterListItem">
                                    <span>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"7px"}}>Max</span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"4px"}}>DAI</span>
                                    </span>
                                    <span>
                                        <div>Balance</div>
                                        <div>52045.003</div>
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="boxContainerRightPoolsOptionBottom">
                        <div className="footerPoolOptionText">
                           Infinite approval - trust this contact forever
                           </div>
                           <button className="footerPoolOptionButton">Add Liquidity</button>
                        </div>
                    </div>
                    
                   </div>
                    
                   </div>
                </div>
                <div className="containerRightPools"></div>
            </div>
        </div>
    )
}

export default PoolsOptionContainer
