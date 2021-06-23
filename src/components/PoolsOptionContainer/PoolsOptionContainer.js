import React from 'react'
import { BiChevronRightCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./PoolsOptionContainer.css"
import DAIimage from "../../images/DAIimage.png"
import USDCimage from "../../images/USDCimage.jpeg" 
import {useLocation} from 'react-router-dom'
// import DAIimage from "../../images/DAIimage.png"
import { userData } from "../../dummyData";
import Chart from '../PoolsComponent/Chart';
import { AiOutlineLeft } from "react-icons/ai";
  

const PoolsOptionContainer = ({ title, data, dataKey, grid }) => {
    const {pathname} = useLocation();
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
                            <button className="boxContainerLeftPoolsOptionTopButton">DAI</button>
                            <button className="boxContainerLeftPoolsOptionTopButton">USDC</button>
                            <button className="boxContainerLeftPoolsOptionTopButton">USDT</button>
                            <button className="boxContainerLeftPoolsOptionTopButton">TUSD</button>

                            <div className="boxContainerLeftPoolsOptionTopValuesSet">
                                <button className="boxContainerLeftPoolsOptionTopValues">
                                    <div className="boxContainerLeftPoolsOptionTopValue">$4,534,375.88</div>
                                    <div className="boxContainerLeftPoolsOptionTopValueName">Value Locked</div>
                                </button>
                                <button className="boxContainerLeftPoolsOptionTopValues">
                                    <div className="boxContainerLeftPoolsOptionTopValue">$4,534,375.88</div>
                                    <div className="boxContainerLeftPoolsOptionTopValueName">Volume (24h)</div>
                                </button>
                                <button className="boxContainerLeftPoolsOptionTopValues">
                                    <div className="boxContainerLeftPoolsOptionTopValue">$4,534,375.88</div>
                                    <div className="boxContainerLeftPoolsOptionTopValueName">Fees (24h)</div>
                                </button>
                            </div>

                            <div style={{paddingTop:"20px", paddingBottom:"10px"}} className="boxContainerLeftPoolsOptionTopValueName">Underlying Tokens</div>
                            <div style={{display:"flex", textAlign:"center"}}>
                                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                                <span style={{paddingLeft:"8px", fontSize:"14px"}}>$4,534,375.88</span>
                            </div>
                            <div style={{display:"flex", textAlign:"center"}}>
                                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                                <span style={{paddingLeft:"8px", fontSize:"14px"}}>$4,534,375.88</span>
                            </div>
                            <div style={{display:"flex", textAlign:"center"}}>
                                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                                <span style={{paddingLeft:"8px", fontSize:"14px"}}>$4,534,375.88</span>
                            </div>
                            <div style={{display:"flex", textAlign:"center", paddingBottom:"10px"}}>
                                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                                <span style={{paddingLeft:"8px", fontSize:"14px"}}>$4,534,375.88</span>
                            </div>
                        </div>
                        <div className="boxContainerLeftPoolsOptionBottom">
                      
                        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
                        </div>
                    </div>
                    <div className="boxContainerRightPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerRightPoolsOptionTop">
                            <div className="boxContainerRightPoolsOptionTopLink">
                            {pathname==="/pools/add-liquidity" ?
                              <Link to="/pools/add-liquidity">
                                  <button style={{background:"#5A6AF0", color:"#fff"}} className="boxContainerRightPoolsOptionTopButton">Add Liquidity</button>
                              </Link>
                            :
                               <Link to="/pools/add-liquidity">
                                   <button className="boxContainerRightPoolsOptionTopButton">Add Liquidity</button>
                               </Link>
                            }
                            {pathname==="/pools/remove-liquidity" ?
                              <Link to="/pools/remove-liquidity">
                                  <button style={{background:"#5A6AF0", color:"#fff"}} className="boxContainerRightPoolsOptionTopButton">Remove Liquidity</button>
                              </Link>
                            :
                               <Link to="/pools/remove-liquidity">
                                   <button className="boxContainerRightPoolsOptionTopButton">Remove Liquidity</button>
                               </Link>
                            }
                            {pathname==="/pools/swap" ?
                              <Link to="/pools/swap">
                                  <button style={{background:"#5A6AF0", color:"#fff"}} className="boxContainerRightPoolsOptionTopButton">Swap</button>
                              </Link>
                            :
                               <Link to="/pools/swap">
                                   <button className="boxContainerRightPoolsOptionTopButton">Swap</button>
                               </Link>
                            }
                            {pathname==="/pools/locking" ?
                              <Link to="/pools/locking">
                                  <button style={{background:"#5A6AF0", color:"#fff"}} className="boxContainerRightPoolsOptionTopButton">Locking</button>
                              </Link>
                            :
                               <Link to="/pools/locking">
                                   <button className="boxContainerRightPoolsOptionTopButton">Locking</button>
                               </Link>
                            }
                            </div>
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

                           {/* <div className="footerPoolOption"> */}
                          
                           {/* <div className="footerPoolOptionButton">Add Liquidity</div> */}
                           {/* </div> */}
                            
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
