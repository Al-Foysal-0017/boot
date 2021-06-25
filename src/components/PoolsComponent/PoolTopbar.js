import React from 'react'
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'

const PoolTopbar = () => {
    const {pathname} = useLocation();
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div className="boxContainerRightPoolsOptionTopLink" style={{display:"flex", justifyContent:"center"}}>
                            {pathname==="/pools/add-liquidity" ?
                              <Link to="/pools/add-liquidity">
                                  <button style={{background:"#5A6AF0", color:"#fff", }} className="boxContainerRightPoolsOptionTopButton">
                                      Add Liquidity
                                    </button>
                              </Link>
                            :
                               <Link to="/pools/add-liquidity">
                                   <button className="boxContainerRightPoolsOptionTopButton"  style={{backgroundColor: darkMode ? "#22262A" : "#fff", color: darkMode ? "#ffffff" : "#323742"}}>Add Liquidity</button>
                               </Link>
                            }
                            {pathname==="/pools/remove-liquidity" ?
                              <Link to="/pools/remove-liquidity">
                                  <button style={{background:"#5A6AF0", color:"#fff"}} className="boxContainerRightPoolsOptionTopButton">Remove Liquidity</button>
                              </Link>
                            :
                               <Link to="/pools/remove-liquidity">
                                   <button className="boxContainerRightPoolsOptionTopButton" style={{backgroundColor: darkMode ? "#22262A" : "#fff", color: darkMode ? "#ffffff" : "#323742"}}>Remove Liquidity</button>
                               </Link>
                            }
                            {pathname==="/pools/swap" ?
                              <Link to="/pools/swap">
                                  <button style={{background:"#5A6AF0", color:"#fff",}} className="boxContainerRightPoolsOptionTopButton">Swap</button>
                              </Link>
                            :
                               <Link to="/pools/swap">
                                   <button className="boxContainerRightPoolsOptionTopButton" style={{backgroundColor: darkMode ? "#22262A" : "#fff", color: darkMode ? "#ffffff" : "#323742"}}>Swap</button>
                               </Link>
                            }
                            {pathname==="/pools/locking" ?
                              <Link to="/pools/locking">
                                  <button style={{background:"#5A6AF0", color:"#fff"}} className="boxContainerRightPoolsOptionTopButton">Locking</button>
                              </Link>
                            :
                               <Link to="/pools/locking">
                                   <button className="boxContainerRightPoolsOptionTopButton" style={{backgroundColor: darkMode ? "#22262A" : "#fff", color: darkMode ? "#ffffff" : "#323742"}}>Locking</button>
                               </Link>
                            }
        </div>
    )
}

export default PoolTopbar
