import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/HeroSection/Hero'
import "./Pools.css"
import { Link } from 'react-router-dom'
import { BiChevronRightCircle } from "react-icons/bi";



const Pools = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
        // const darkMode = localStorage.getItem('darkMode') 
        // console.log(localStorage.getItem('darkMode'))
    return (
        <div>
            <Navbar/>
            <div className="containerPools" style={{backgroundColor: darkMode ? "#23252A" : "#F7F8FD"}}>
                <div className="containerLeftPools"></div>
                
                <div className="containerCenterPools">
                   <div className="containerCenterHeaderPools" style={{color: darkMode ? "#ffffff" : "#323742"}}>All Boot Pools</div>
                   
                   <div className="boxContainerPools" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    
                    <div className="boxContainerTopHeaderPools">
                        <div className="boxContainerTopHeaderPools1" style={{color: darkMode ? "#fff" : "#323742"}}>Pool</div>
                        <div className="boxContainerTopHeaderPools2" style={{color: darkMode ? "#fff" : "#323742"}}>Underlying Tokens</div>
                        <div className="boxContainerTopHeaderPools3" style={{color: darkMode ? "#fff" : "#323742"}}>Value Locked</div>
                        <div className="boxContainerTopHeaderPools4" style={{color: darkMode ? "#fff" : "#323742"}}>Daily Value</div>
                        <div className="boxContainerTopHeaderPools5" style={{color: darkMode ? "#fff" : "#323742"}}>Pool APY</div>
                        <div className="boxContainerTopHeaderPools6" style={{color: darkMode ? "#fff" : "#323742"}}>BOOT APY</div>
                        <div className="boxContainerTopHeaderPools7" style={{color: darkMode ? "#fff" : "#323742"}}></div>
                    </div>
                    
                    <div className="boxContainerTopPools" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerPoolsColumn1"></div>
                        <div className="boxContainerPoolsColumn2"></div>
                        <div className="boxContainerPoolsColumn3"></div>
                        <div className="boxContainerPoolsColumn4"></div>
                        <div className="boxContainerPoolsColumn5"></div>
                        <div className="boxContainerPoolsColumn6"></div>
                        <div className="boxContainerPoolsColumn7"></div>
                    </div>
                    <div className="boxContainerBottomPools" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerPoolsColumn1"></div>
                        <div className="boxContainerPoolsColumn2"></div>
                        <div className="boxContainerPoolsColumn3"></div>
                        <div className="boxContainerPoolsColumn4"></div>
                        <div className="boxContainerPoolsColumn5"></div>
                        <div className="boxContainerPoolsColumn6"></div>
                        <div className="boxContainerPoolsColumn7"></div>
                    </div>

                    <div className="footer">
                    <div style={{display:"flex", flex:"10.5"}}></div>
                    <div style={{display:"flex", flex:"1.5"}} className="footerRight">
                        <span className="footerRight1" style={{color: darkMode ? "#fff" : "#5A6AF0"}}>1</span>
                        <span className="footerRight2" style={{color: darkMode ? "#fff" : "#5A6AF0"}}>2</span>
                        <span style={{paddingRight:"20px", cursor: "pointer"}}>
                            <Link to="/pools/add-liquidity">
                            <BiChevronRightCircle style={{color: darkMode ? "#fff" : "#5A6AF0"}} fontSize="25px"/>
                            </Link>
                        </span>
                    </div>
                    </div>
                    
                   </div>
                </div>
                <div className="containerRightPools"></div>
            </div>
        </div>
    )
}

export default Pools
