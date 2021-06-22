import React from 'react'
import { BiChevronRightCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./PoolsOptionContainer.css"
import DAIimage from "../../images/DAIimage.png"
import USDCimage from "../../images/USDCimage.jpeg" 
import {useLocation} from 'react-router-dom'

const PoolsOptionContainer = ({darkMode}) => {
    const {pathname} = useLocation();
    return (
        <div>
            <div className="containerPoolsOption" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                <div className="containerLeftPoolsOption"></div>
                
                <div className="containerCenterPoolsOption">
                   <div className="containerCenterHeaderPoolsOption" style={{color: darkMode ? "#ffffff" : "#323742"}}>Details</div>
                   
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
                        <div className="boxContainerLeftPoolsOptionBottom"></div>
                    </div>
                    <div className="boxContainerRightPoolsOption" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerRightPoolsOptionTop">
                            
                            
                            
                            

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
                        <div className="boxContainerRightPoolsOptionCenter"></div>
                        <div className="boxContainerRightPoolsOptionBottom">
                            {/* <div className="boxContainerRightPoolsOptionBottomBox"></div> */}
                        </div>

                        {/* <div className="footerPoolsOption">
                        <div style={{display:"flex", flex:"10.5"}}></div>
                        <div style={{display:"flex", flex:"1.5"}} className="footerRightPoolsOption">
                        <span className="footerRight1PoolsOption">1</span>
                        <span className="footerRight2PoolsOption">2</span>
                        <span style={{paddingRight:"20px", cursor: "pointer"}}>
                            <Link to="/governance-info">
                            <BiChevronRightCircle fontSize="25px"/>
                            </Link>
                        </span>
                        </div>
                        </div> */}
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
