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
                        <div className="boxContainerLeftGovTop"></div>
                        <div className="boxContainerLeftGovBottom"></div>
                    </div>
                    <div className="boxContainerRightGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerRightGovTop"></div>
                        <div className="boxContainerRightGovCenter"></div>
                        <div className="boxContainerRightGovBottom">
                            <div className="boxContainerRightGovBottomBox" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}></div>
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
