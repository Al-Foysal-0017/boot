import React from 'react'
import { Link } from 'react-router-dom'
import "./ToggleBar.css"
import { FaTimes } from "react-icons/fa";
import DarkMode from "../../DarkMode/DarkMode"

const ToggleBar = ({isOpen, toggle}) => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (<>
        {isOpen && 
        <div className="SidebarContainer1" onClick={toggle} style={{backgroundColor: darkMode ? "#323742" : "#fff"}}>
        <div className="Icon" onClick={toggle}>
        <FaTimes style={{color:"#5A6AF0"}}/>
        </div>
        <div className="SidebarWrapper" style={{backgroundColor: darkMode ? "#323742" : "#fff"}}>
            <div className="SidebarMenu" style={{backgroundColor: darkMode ? "#323742" : "#fff"}}>
            <DarkMode/>
            <Link className="SidebarLink" to="/" onClick={toggle} style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}> Swap </Link>
            <Link className="SidebarLink" to="/pools" onClick={toggle} style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}> Pools </Link>
            <Link className="SidebarLink" to="/governance" onClick={toggle} style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}> Governance </Link>
            <Link className="SidebarLink" to="/more" onClick={toggle} style={{color: darkMode ? "#ffffff" : "#5A6AF0"}}> More </Link>
            </div>

            <div className="SideBtnWrap">
                <Link to="/connect-wallet" 
                className="SidebarRoute"
                style={{backgroundColor: darkMode ? "#fff" : "#5A6AF0", color: darkMode ? "#323742" : "#fff"}}
            >
                    Connect Wallet
                </Link>
            </div>
        </div>
        </div>
        }

        {/* {!isOpen && 
        <div className="SidebarContainer2" onClick={toggle} >
        <div className="Icon" onClick={toggle}>
        <FaTimes style={{color:"white"}}/>
        </div>
        <div className="SidebarWrapper" >
            <div className="SidebarMenu" >
            <Link className="SidebarLink" to="/swap" onClick={toggle}> Swap </Link>
            <Link className="SidebarLink" to="/pools" onClick={toggle}> Pools </Link>
            <Link className="SidebarLink" to="/governance" onClick={toggle}> Governance </Link>
            <Link className="SidebarLink" to="/more" onClick={toggle}> More </Link>
            </div>

            <div className="SideBtnWrap">
                <Link className="SidebarRoute" to="/signin">Sign In</Link>
            </div>
        </div>
        </div>
        } */}
        </>
    )
}

export default ToggleBar



