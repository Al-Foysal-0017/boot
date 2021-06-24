import "./Pools_Add_Liquidity.css"
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

const Pools_Add_Liquidity = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div>
            <Navbar/>
            <div>
            <div className="containerPoolsOption" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
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
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"8px", color:"#A3B7A7"}}>Max</span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"8px", color:"#A3B7A7"}}>DAI</span>
                                    </span>
                                    <span>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>Balance</div>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
                                    </span>
                                </div>
                                <div className="boxContainerRightPoolsOptionCenterListItem">
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"8px", color:"#A3B7A7"}}>Max</span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"8px", color:"#A3B7A7"}}>DAI</span>
                                    </span>
                                    <span>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>Balance</div>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
                                    </span>
                                </div>
                                <div className="boxContainerRightPoolsOptionCenterListItem">
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"8px", color:"#A3B7A7"}}>Max</span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"8px", color:"#A3B7A7"}}>DAI</span>
                                    </span>
                                    <span>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>Balance</div>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
                                    </span>
                                </div>
                                <div className="boxContainerRightPoolsOptionCenterListItem">
                                    <span style={{color: darkMode ? "#ffffff" : "#323742"}}>100.00</span>
                                    <span style={{ display:"flex" ,justifyContent:"center"}}>
                                        <span style={{paddingRight:"8px", color:"#A3B7A7"}}>Max</span>
                                        <span><img src={DAIimage} className="currencyImage" alt=""/></span>
                                        <span style={{paddingLeft:"8px", color:"#A3B7A7"}}>DAI</span>
                                    </span>
                                    <span>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>Balance</div>
                                        <div style={{color: darkMode ? "#ffffff" : "#323742"}}>52045.003</div>
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
        </div>
    )
}

export default Pools_Add_Liquidity
