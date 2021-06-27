import React from 'react'
import { Segment } from 'semantic-ui-react'
import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";
import DAIimage from "../../../images/DAIimage.png"

const AddLiqTable = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div style={{padding:"25px" ,backgroundColor: darkMode ? "#323742" : "#ffffff"}} >
            <Segment padded='very' textAlign='center' style={{borderRadius:"25px", backgroundColor: darkMode ? "#464B58" : "#ffffff"}}>
            <div className="boxContainerRightPoolsOption" style={{backgroundColor: darkMode ? "#464B58" : "#ffffff"}}>
                        <div className="boxContainerRightPoolsOptionCenter">
                            <div className="boxContainerRightPoolsOptionCenterHeader" style={{marginTop:"30px"}}>Currencies</div>
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
                           {/* Infinite approval - trust this contact forever */}
                           <span className="footerInfoIcon">
                               <BiCheckboxChecked size="25px" style={{color:"#A3B7A7"}}/>
                               Infinite approval - trust this contact forever
                               <VscQuestion size="18px" style={{marginLeft:"5px", color:"gray"}}/>
                            </span>

                            {/* <TablePoolsOptionLeft />
                            <Segment>Naiem</Segment> */}

                           </div>
                           <button className="footerPoolOptionButton">Add Liquidity</button>
                        </div>
                    </div>

            </Segment>
        </div>
    )
}

export default AddLiqTable
