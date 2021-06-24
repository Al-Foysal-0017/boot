import React from 'react'
import Navbar from '../../components/Navbar'
import "./Swap.css"
import SwapLeftValue from '../../components/SwapComponent/SwapLeftValue'
import SwapRightValue from '../../components/SwapComponent/SwapRightValue'
import { BsArrowLeftRight, BsArrowUpDown } from "react-icons/bs";
import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";

const Swap = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div>
            <Navbar/>
            <div className="container" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                <div className="containerLeft"></div>
                
                <div className="containerCenter">
                   <div className="containerCenterHeader" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                       Swap Using Pools
                    </div>
                   
                   <BsArrowLeftRight size="55px" style={{color: darkMode ? "#ffffff" : "#5A6AF0" , backgroundColor: darkMode ? "#22262A" : "#fff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}} className="ArrowIcon"/>
                   <BsArrowUpDown size="55px" style={{color: darkMode ? "#ffffff" : "#5A6AF0" , backgroundColor: darkMode ? "#22262A" : "#fff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}} className="ArrowIconMobile"/>

                   <div className="boxContainer" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                    <div className="boxContainerLeft" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                    <SwapLeftValue/>
                    </div>
                    <div className="boxContainerRight" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    <SwapRightValue/>
                    </div>



                    <div className="responsiveMobile">
                       <div className="footerBoxMobile" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                           <div className="footerBoxLeft" style={{color: darkMode ? "#fff" : "#323742"}}>DAI/USDC &nbsp;</div>
                           <div className="footerBoxCenter" style={{color:"#A3B7A7"}}>Exchance rate &nbsp;</div>
                           <div className="footerBoxRight" style={{color: darkMode ? "#fff" : "#323742"}}>1.0433</div>
                       </div>
                       <div className="footerInfoMobile">
                            <span className="footerInfoIcon">
                               <BiCheckboxChecked size="18px" style={{marginRight:"2px", color:"#A3B7A7"}}/>
                               Infinite approval - trust this contact forever
                               <VscQuestion size="18px" style={{marginLeft:"5px", color:"gray"}}/>
                            </span>
                           <button className="footerButton" style={{marginTop:"15px"}}>Swap</button> 
                       </div>
                    </div>
                   </div>


                   <div className="responsiveDesktop">
                       <div className="footerBox" style={{backgroundColor: darkMode ? "#323742" : "#ffffff", border:darkMode?  "0.5px solid #22262A" : "0.5px solid #D8D8D8"}}>
                           <div className="footerBoxLeft" style={{color: darkMode ? "#fff" : "#323742"}}>DAI/USDC &nbsp;</div>
                           <div className="footerBoxCenter" style={{color:"#A3B7A7"}}>Exchance rate &nbsp;</div>
                           <div className="footerBoxRight" style={{color: darkMode ? "#fff" : "#323742"}}>1.0433</div>
                       </div>
                       <div className="footerInfo">
                            <span className="footerInfoIcon">
                               <BiCheckboxChecked size="25px" style={{color:"#A3B7A7"}}/>
                               Infinite approval - trust this contact forever
                               <VscQuestion size="18px" style={{marginLeft:"5px", color:"gray"}}/>
                            </span>
                           <button className="footerButton">Swap</button>
                       </div>
                   </div>
                </div>
                <div className="containerRight"></div>
            </div>
        </div>
    )
}

export default Swap
