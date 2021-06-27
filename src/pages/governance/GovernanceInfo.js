
import "./GovernanceInfo.css"

        

        import React from 'react'
        import Navbar from '../../components/Navbar'
        import { BiChevronRightCircle } from "react-icons/bi";
        import "./Governance.css"
        import { Link } from 'react-router-dom';
        import { Grid } from 'semantic-ui-react';
        import { Form, Select } from 'semantic-ui-react'
        import { Progress } from 'semantic-ui-react'
        import { AiOutlineLeft } from "react-icons/ai";
        
        const GovernanceInfo = () => {
            let darkMode = localStorage.getItem('theme')=== 'theme-dark';
            const Options = [
                { key: 'm', text: 'One', value: 'one' },
                { key: 'f', text: 'Two', value: 'two' },
                { key: 'o', text: 'Three', value: 'three' },
              ]
            return (
                <div>
                    <Navbar/>
                    <div className="containerGov" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                        <div className="containerLeftPools"></div>
                        
                        <div className="containerCenterGov">
                        <div className="containerCenterHeaderPoolsOptionBox">   
                        <div className="containerCenterHeaderPoolsOptionBoxLeft"> 
                            <div className="BackLinkSpan">
                                <Link to="/governance" className="BackLink">
                                <AiOutlineLeft style={{paddingTop:"4px", marginLeft:"15px"}}/>
                                 Back
                                </Link>
                            </div>
                        </div>                
                        <div className="containerCenterHeaderPoolsOptionCenter" style={{color: darkMode ? "#ffffff" : "#323742"}}>Governance</div>
                        <div className="containerCenterHeaderPoolsOptionBoxRight"></div>
                    </div>
                           {/* <div className="containerCenterHeaderGov" style={{color: darkMode ? "#ffffff" : "#323742"}}>Governance</div> */}
                           
                           <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                            
                           <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                            <div className="boxContainerLeftGovInfo" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                                <div className="boxContainerLeftGovInfoTop">
                                    <div className="boxContainerLeftGovInfoTopHeader">Description</div>
                                    <div className="boxContainerLeftGovInfoTopHeaderInfo" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    Pool proxy: Commit new parameters for 0x3292.F9f88d, A100, new fee
                                    :3000000 and new admin fee:50000000000
                                    </div>
                                    <div className="description" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    Lorem  Ipsumis  simply  dummy  text  of  the  printing  and  typesetting industry.  Lorem Ipsum  has  been  the  industry's  standard  dummy  text  ever  since  the  1500s,  when  an unknown printer took a galley of type and scrambled it to make a type specimen book. It has  survived  not  only  five  centuries,  but  also  the  leap  into  electronic typesetting, remaining  essentially  unchanged.  It  was  popularised  in  the  1960s  with  the  release  of Letraset  sheets  containing  Lorem  Ipsum  passages,  and  more  recently  with  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                    </div>
                                    <div className="description" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                    Itis a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less  normal  distribution  of  letters,  as  opposed  to  using  'Content  here,  content  here', making it look like readable English. 
                                    </div>

                                    <div className="LeftGontInfoFooterHeader">
                                        Voting with 1831.55 VEBOOT (0.31% of total voting power), you have 1831.55 VEBOOT at vote creation on snapshot block 11102205.
                                    </div>
                                    <div className="LeftGontInfoFooterYesNo">
                                        <button className="LeftGontInfoFooterYes">Yes</button>
                                        <button className="LeftGontInfoFooterNo">No</button>
                                    </div>
                                </div>
                                {/* <div className="boxContainerLeftGovInfoBottom"></div> */}
                            </div>


                            <div className="boxContainerRightGovInfo" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                                    <div className="boxContainerRightGovInfoTop">
                                    <div className="boxContainerRightGovInfoTopHeader">Information</div>    
                                    <div>
                                    <div className="boxContainerRightGovInfoTopDate">Date</div>    
                                    <div className="boxContainerRightGovInfoTopDate2" style={{color: darkMode ? "#ffffff" : "#323742"}}>05D:13H:33M:44S</div>    
                                    <div className="boxContainerRightGovInfoTopDate3" style={{color: darkMode ? "#ffffff" : "#323742"}}>21/10/2020 22:30:28 --- 28/10/2020</div>    
                                    <div className="boxContainerRightGovInfoTopDate3" style={{color: darkMode ? "#ffffff" : "#323742"}}>22:30:28</div>    
                                    
                                    <div className="boxContainerRightGovInfoTopProposed">Proposed</div>    
                                    <div className="boxContainerRightGovInfoTopProposedValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>0X6811...D85A3E</div>    
                                    
                                    <div className="boxContainerRightGovInfoTopSupport">Support</div>    
                                    <div className="boxContainerRightGovInfoTopSupportValue" style={{color: darkMode ? "#ffffff" : "#323742"}}><span style={{color: "rgb(7, 182, 7)"}}>100.00%</span> ({">"} 51% REQUIRED)</div>    
                                    
                                    <div className="boxContainerRightGovInfoTopMinimum">Minimum Approval</div>    
                                    <div className="boxContainerRightGovInfoTopMinimumValue" style={{color: darkMode ? "#ffffff" : "#323742"}}><span style={{color: "red"}}>2.36% </span>({">"} 30% REQUIRED)</div>    
                                    </div>
                                    </div>
                                {/* <div className="boxContainerRightGovCenter">
                                
                                </div> */}
                                <div className="boxContainerRightGovInfoBottom">
                                    <div>
                                        <div className="boxContRightGovInfoBottHeader">
                                            <span>Votes</span>
                                            <span><button className="RightGontInfoFooterButton">Show Voters</button></span>
                                        </div>
                                        <div className="boxContRightGovInfoBottProgYES">
                                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>Yes</span>
                                            <span>
                                            <Progress percent={80} success >
                                                <span style={{fontSize:"12px", color:"#A3B7A7"}}>14144.16</span>
                                            </Progress>
                                            </span>
                                        </div>
                                        <div className="boxContRightGovInfoBottProgNo">
                                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>No</span>
                                            <span>
                                            <Progress percent={40} error>
                                            <span style={{fontSize:"12px", color:"#A3B7A7"}}>14144.16</span>
                                            </Progress>
                                            </span>
                                        </div>

                                        <div className="boxContRightGovInfoBottFooter">
                                            <div className="boxContRightGovInfoBottFooterYes">
                                                <div>
                                                <div style={{color: darkMode ? "#ffffff" : "#323742"}} >0XOF26...7241AB</div>
                                                <div style={{color:"#A3B7A7"}}>14144.16</div>
                                                </div>
                                                <div style={{color: "rgb(7, 182, 7)"}}>Yes</div>
                                            </div>
                                       
                                            <div className="boxContRightGovInfoBottFooterNo">
                                                <div>
                                                <div style={{color: darkMode ? "#ffffff" : "#323742"}}>0XOF26...7241AB</div>
                                                <div style={{color: "#A3B7A7"}}>14144.16</div>
                                                </div>
                                                <div style={{color:"red"}}>No</div>
                                            </div>
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
            )
        }
        
        export default GovernanceInfo
        

