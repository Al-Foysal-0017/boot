import React, { useCallback, useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {useLocation} from 'react-router-dom'
import LogoImg from "../../../images/logo1.png"
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';

const Navbar = ({toggle}) => {
    const {pathname} = useLocation();
    
    const darkMode = false

    const handleDarkMode = () => {}
    return (
        <>
         <div className="Nav" style={{backgroundColor: darkMode ? "#323742" : "#fff"}}>
             <div className="NavbarContainer">
                 <div className="NavLogo">
                 <div><img src={LogoImg} className="logoImg" alt="" /></div>
                 <div to='/' style={{color: darkMode ? "#ffffff" : "#323742"}}>Boot</div>
                 </div>
                 <div className="MobileIcon" onClick={toggle} > 
                     <FaBars />
                 </div>
                 
                 <div className="NavMenu">
                    {pathname === "/" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/" style={{color: darkMode ? "#ffffff" : "#323742"}}>Swap</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/" style={{color: darkMode ? "#ffffff" : "#323742"}}>Swap</Link>
                    </div>
                    }

                    {pathname === "/pools" || pathname === "/pools/swap" || pathname === "/pools/locking" || pathname === "/pools/add-liquidity" || pathname === "/pools/remove-liquidity" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/pools" style={{color: darkMode ? "#ffffff" : "#323742"}}>Pools</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/pools" style={{color: darkMode ? "#ffffff" : "#323742"}}>Pools</Link>
                    </div>
                    }

                    {pathname === "/governance" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/governance" style={{color: darkMode ? "#ffffff" : "#323742"}}>Governance</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/governance" style={{color: darkMode ? "#ffffff" : "#323742"}}>Governance</Link>
                    </div>
                    }


                    {pathname === "/more" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/more" style={{color: darkMode ? "#ffffff" : "#323742"}}>More</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/more" style={{color: darkMode ? "#ffffff" : "#323742"}}>More</Link>
                    </div>
                    }   
                 </div>
                 
                 <div className="NavBtn">
                 <ReactLanguageSelect
                    className="LanguageSet"
                    defaultLanguage="en" 
                    languages={["en", "fr", "de"]}
                    showSelectedLabel={true}
                    showOptionLabel={true}
                    selectedSize={12}
                    optionsSize={12}
                 />
                 {/* <div className="ModeSet"><ImSun/></div> */}
                 {/* <DarkMode/> */}
                    <div 
                    className="ModeSet"
                    onClick={handleDarkMode}
                    >
                    {darkMode? <ImSun/>: <FaRegMoon/>}    
                    </div>

                 <div >
                       <Link to="/connect-wallet" className="NavBtnLink">Connect Wallet</Link>                     
                 </div>
                 </div>
                 
               </div>
       
         </div>
       </>
    )
}

export default Navbar
