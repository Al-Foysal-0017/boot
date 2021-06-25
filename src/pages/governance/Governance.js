import React from 'react'
import Navbar from '../../components/Navbar'
import { BiChevronRightCircle } from "react-icons/bi";
import "./Governance.css"
import { Link } from 'react-router-dom';

const Governance = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div>
            <Navbar/>
            <div className="containerGov" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                <div className="containerLeftPools"></div>
                
                <div className="containerCenterGov">
                   <div className="containerCenterHeaderGov" style={{color: darkMode ? "#ffffff" : "#323742"}}>Governance</div>
                   
                   <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    
                   <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    <div className="boxContainerLeftGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerLeftGovTop">
                            <div className="HeaderOverview">Overview</div>
                            <div className="overViewItems">
                                <div className="overViewItem">
                                    <div className="overViewItemRow1">1,690,458.81 $BOOT</div>
                                    <div className="overViewItemRow2">Total $BOOT vote-locked</div>
                                </div>
                                <div className="overViewItem">
                                    <div className="overViewItemRow1">1,690,458.81 $BOOT</div>
                                    <div className="overViewItemRow2">Total $BOOT vote-locked</div>
                                </div>
                                <div className="overViewItem">
                                    <div className="overViewItemRow1">1,690,458.81 $BOOT</div>
                                    <div className="overViewItemRow2">Total $BOOT vote-locked</div>
                                </div>
                                <div className="overViewItem">
                                    <div className="overViewItemRow1">1,690,458.81 $BOOT</div>
                                    <div className="overViewItemRow2">Total $BOOT vote-locked</div>
                                </div>
                            </div>
                        </div>
                        <div className="boxContainerLeftGovBottom">
                            <div className="HeaderManageLocking">Manage Locking</div>
                            <div className="ManageItems">
                                <div className="ManageItem">
                                    <div className="label">Add Lock</div>
                                    <div className="setTwoBox">
                                        <div className="setBox1">
                                            <span>91.05</span>
                                            <span>Max $BOOT</span>
                                        </div>
                                        <div className="setBox2">$BOOT Balance: <span>525.97</span></div>
                                    </div>
                                    <button className="GovButton">Add</button>
                                </div>
                                <div className="ManageItem">
                                    <div className="label">Add Lock</div>
                                    <div className="setTwoBox">
                                        <div className="setBox1">
                                            <span>91.05</span>
                                            <span>Max $BOOT</span>
                                        </div>
                                        <div className="setBox2">$BOOT Balance: <span>525.97</span></div>
                                    </div>
                                    <button className="GovButton">Lock</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="boxContainerRightGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerRightGovTop">
                            Proposal 24
                        </div>
                        <div className="boxContainerRightGovCenter"></div>
                        <div className="boxContainerRightGovBottom">
                            <div className="boxContainerRightGovBottomBox" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                                <button>Active</button>
                                <div>Pool proxy: Commit new parameters for 0x3292.F9f88d, A100, new ...</div>
                                <div>
                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                                </div>
                                <div>05D:13H-33M:44S</div>
                            </div>
                        </div>

                        <div className="footerGov">
                        <div style={{display:"flex", flex:"10.5"}}></div>
                        <div style={{display:"flex", flex:"1.5"}} className="footerRightGov">
                        <span className="footerRight1Gov" style={{color: darkMode ? "#fff" : "#5A6AF0"}}>1</span>
                        <span className="footerRight2Gov" style={{color: darkMode ? "#fff" : "#5A6AF0"}}>2</span>
                        <span style={{paddingRight:"20px", cursor: "pointer"}}>
                            <Link to="/governance-info">
                            <BiChevronRightCircle style={{color: darkMode ? "#fff" : "#5A6AF0"}} fontSize="25px"/>
                            </Link>
                        </span>
                    </div>
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

export default Governance
