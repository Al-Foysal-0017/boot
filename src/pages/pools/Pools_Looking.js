    import "../../components/PoolsOptionContainer/PoolsOptionContainer.css"
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
    import "./Pools_Looking.css"
    
    const Pools_Looking = () => {
        let darkMode = localStorage.getItem('theme')=== 'theme-dark'
        return (
            <div>
                <Navbar/>
                <div>
                <div className="containerPoolsLocking" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
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
                       
                       <div className="boxContainerPoolsOptionLocking" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                       <div className="boxContainerPoolsOptionZZZ" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerLeftPoolsLocking" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
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
    
    
                        <div className="boxContainerRightPoolsLocking" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                            <div className="boxContainerRightPoolsOptionTop">
                            <PoolTopbar/>
                            </div>
    
                            <div className="boxContainerRightPoolsOptionCenter">


                            <div className="LockingHeader">Lock to Earn Rewards</div>
                            <div className="LockingRightCenter">
                                <div className="RightLockingTop">
                                    <div className="TwoRowBorderSet">
                                    <div className="RightLockingShowBox">
                                        <span>0.00</span>
                                        <span>Max <span>SWUSD</span></span>
                                    </div>
                                    <div className="RightLockingShowBoxDown">
                                        <span>BOOTUSD Balance:</span>
                                        <span>525.03</span>
                                    </div>
                                    </div>
                                    <button>Deposit</button>
                                </div>
                                <div className="RightLockingCenter">
                                <div className="TwoRowBorderSet">
                                <div className="RightLockingShowBox">
                                        <span>0.00</span>
                                        <span>Max <span>SWUSD</span></span>
                                    </div>
                                    <div className="RightLockingShowBoxDown">
                                        <span>BOOTUSD Balance:</span>
                                        <span>525.03</span>
                                    </div>
                                </div>
                                    <button>Withdraw</button>
                                </div>
                                <div className="RightLockingBottom">
                                <div className="TwoRowBorderSet">
                                <div className="RightLockingShowBox">   
                                        <span>0.00</span>
                                        <span>Max <span>SWUSD</span></span>
                                    </div>
                                    <div className="RightLockingShowBoxDown">
                                        <span>BOOTUSD Balance:</span>
                                        <span>525.03</span>
                                    </div>
                                </div>
                                    <button >Claim</button>
                                </div>
                            </div>
                            </div>
    
    
                        <div className="boxContainerRightPoolsOptionBottom" style={{borderTop:"1px solid #D8D8D8"}}>
                        <div className="LockingHeader">Lock $BOOT to increase APY</div>
                        <div className="LockingForm2">
                            <div className="LockingForm2Top">
                            <div className="TwoRowBorderSet mb-15">
                                <div className="RightLockingShowBox">
                                        <span>0.00</span>
                                        <span>Max <span>SWUSD</span></span>
                                </div>
                                </div>
                                <div className="TwoRowBorderSet mb-15">
                                <div className="RightLockingShowBox">
                                        <span>0.00</span>
                                        <span>Max <span>SWUSD</span></span>
                                </div>
                                </div>
                            {/* <div className="RightLockingCenter"> */}
                                <div className="TwoRowBorderSet">
                                <div className="RightLockingShowBox">
                                        <span>0.00</span>
                                        <span>Max <span>SWUSD</span></span>
                                    </div>
                                    <div className="RightLockingShowBoxDown">
                                        <span>BOOTUSD Balance:</span>
                                        <span>525.03</span>
                                    </div>
                                </div>
                                    <button className="alignSelfCenter">Add</button>
                            {/* </div> */}
                            </div>
                            <div className="LockingForm2Bottom">
                            <div className="RightLockingShowBox">
                                        <span>0.00</span>
                                        <span>Max <span>SWUSD</span></span>
                            </div>
                            <button className="alignSelfCenter">Lock</button>
                            </div>
                        </div>
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
    
    export default Pools_Looking
    
