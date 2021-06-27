import React from 'react'
import { Segment } from 'semantic-ui-react'
import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";
import DAIimage from "../../../images/DAIimage.png"

const LockingTable = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div style={{padding:"30px", borderRadius:"25px"}}>
            <Segment padded='very' textAlign='center' style={{padding:"15px", borderRadius:"25px"}}>
            <div className="boxContainerRightPoolsLocking" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                            {/* <div className="boxContainerRightPoolsOptionTop">
                            <PoolTopbar/>
                            </div> */}
    
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
            </Segment>
        </div>
    )
}

export default LockingTable
