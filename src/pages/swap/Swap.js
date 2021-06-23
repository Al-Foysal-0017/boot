import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import "./Swap.css"
var store = require('store')

const Swap = () => {
    // const  darkMode= false
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'

    // useEffect(()=>{},[darkMode])
    return (
        <div>
            <Navbar/>
            <div className="container" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                <div className="containerLeft"></div>
                
                <div className="containerCenter">
                   <div className="containerCenterHeader" style={{color: darkMode ? "#ffffff" : "#323742"}}>Swap Using Pools</div>
                   
                   <div className="boxContainer" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    <div className="boxContainerLeft" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        {/* LEFT */}
                    </div>
                    <div className="boxContainerRight" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    {/* RIGHT */}
                    </div>
                    
                   </div>

                   {/* <div className="footer"> */}
                       <div className="footerBox" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                           <div className="footerBoxLeft" style={{color: darkMode ? "#fff" : "#323742"}}>DAI/USDC &nbsp;</div>
                           <div className="footerBoxCenter" style={{color:"#A3B7A7"}}>Exchance rate &nbsp;</div>
                           <div className="footerBoxRight" style={{color: darkMode ? "#fff" : "#323742"}}>1.0433</div>
                       </div>
                       <div className="footerText">
                           Infinite approval - trust this contact forever
                       </div>
                        <button className="footerButton">Swap</button>
                   {/* </div> */}
                </div>
                <div className="containerRight"></div>
            </div>
        </div>
    )
}

export default Swap
