import React from 'react'
import { Segment } from 'semantic-ui-react'
import CurrencyName from '../CurrencyName'
import TotalValueLocked from '../TotalValueLocked'
import DAIimage from "../../../images/DAIimage.png"
import { Link } from 'react-router-dom'
import PoolTopbar from '../PoolTopbar'
import { AiOutlineLeft } from "react-icons/ai";
import Chart from "../Chart"
import { userData } from "../../../dummyData.js";
import { BiCheckboxChecked } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";

const TablePoolsOptionLeft = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <> 
            <div className="containerCenterHeaderPoolsOptionBox" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>   
                        <div className="containerCenterHeaderPoolsOptionBoxLeft"> 
                            <div className="BackLinkSpan">
                                <Link to="/pools" className="BackLink">
                                <AiOutlineLeft style={{paddingTop:"4px", marginLeft:"15px"}}/>
                                 Back
                                </Link>
                            </div>
                        </div>                
                        <div className="containerCenterHeaderPoolsOptionCenter" style={{color: darkMode ? "#ffffff" : "#323742"}}>Details</div>
                        <div className="containerCenterHeaderPoolsOptionBoxRight"></div>
            </div>
            <div style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
            <PoolTopbar/>
            </div>
            
            <div style={{padding:"25px" ,backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
            <Segment padded='very' textAlign='center' style={{borderRadius:"25px", backgroundColor: darkMode ? "#464B58" : "#ffffff"}}>
            <div className="" style={{paddingTop:"20px", paddingBottom:"20px"}}>
                            <CurrencyName/>
                            <div className="boxContainerLeftPoolsOptionTopValuesSet">
                                <TotalValueLocked/>
                            </div>
                            <div style={{paddingTop:"20px", marginLeft:"10px"}} className="boxContainerLeftPoolsOptionTopValueName">
                                Underlying Tokens
                            </div>

            <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{ display:"flex", justifyContent:"center" }}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            </div>
            </div>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            </Segment>


            </div>
            {/* <Segment>
                <button floated='right'>floated</button>
            </Segment> */}
        </>
    )
}

export default TablePoolsOptionLeft
