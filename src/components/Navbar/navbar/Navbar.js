import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {useLocation} from 'react-router-dom'
import LogoImg from "../../../images/logo1.png"
// import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';

const Navbar = ({toggle}) => {
    const {pathname} = useLocation();
    return (
        <>
         <div className="Nav">
             <div className="NavbarContainer">
                 <div className="NavLogo">
                 <div><img src={LogoImg} className="logoImg" alt="" /></div>
                 <div to='/'>Boot</div>
                 </div>
                 <div className="MobileIcon" onClick={toggle} > 
                     <FaBars />
                 </div>
                 
                 <div className="NavMenu">
                    {pathname === "/" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/" >Swap</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/" >Swap</Link>
                    </div>
                    }

                    {pathname === "/pools" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/pools" >Pools</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/pools" >Pools</Link>
                    </div>
                    }

                    {pathname === "/governance" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/governance" >Governance</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/governance" >Governance</Link>
                    </div>
                    }


                    {pathname === "/more" ?
                    <div className="NavItem">
                    <Link className="NavLinks NavLinksActive" to="/more" >More</Link>
                    </div>
                    :
                    <div className="NavItem">
                        <Link className="NavLinks" to="/more" >More</Link>
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
                 <div className="ModeSet"><ImSun/></div>
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
