import React from 'react'
import Navbar from '../../components/Navbar'
import { BiChevronRightCircle } from "react-icons/bi";
import "./Governance.css"
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { Form, Select } from 'semantic-ui-react'

const Governance = () => {
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
                   <div className="containerCenterHeaderGov" style={{color: darkMode ? "#ffffff" : "#323742"}}>Governance</div>
                   
                   <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    
                   <div className="boxContainerGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                    <div className="boxContainerLeftGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                        <div className="boxContainerLeftGovTop">
                            <div className="HeaderOverview">Overview</div>
                            <div className="overViewItems">
                                <div className="overViewItem">
                                    <div className="overViewItemRow1" style={{color: darkMode ? "#ffffff" : "#323742"}}>1,690,458.81 $BOOT</div>
                                    <div className="overViewItemRow2">Total $BOOT vote-locked</div>
                                </div>
                                <div className="overViewItem">
                                    <div className="overViewItemRow1" style={{color: darkMode ? "#ffffff" : "#323742"}}>1,690,458.81 $BOOT</div>
                                    <div className="overViewItemRow2">Total $BOOT vote-locked</div>
                                </div>
                                <div className="overViewItem">
                                    <div className="overViewItemRow1" style={{color: darkMode ? "#ffffff" : "#323742"}}>1,690,458.81 $BOOT</div>
                                    <div className="overViewItemRow2">Total $BOOT vote-locked</div>
                                </div>
                                <div className="overViewItem">
                                    <div className="overViewItemRow1" style={{color: darkMode ? "#ffffff" : "#323742"}}>1,690,458.81 $BOOT</div>
                                    <div className="overViewItemRow2">Total $BOOT vote-locked</div>
                                </div>
                            </div>
                        </div>
                        <div className="boxContainerLeftGovBottom">
                            <div className="HeaderManageLocking">Manage Locking</div>
                            <div className="ManageItems">
                                <div className="ManageItem">
                                    <div className="label">Add Lock</div>
                                    <div className="setTwoBox">
                                        <div className="setBox1">
                                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>91.05</span>
                                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>Max $BOOT</span>
                                        </div>
                                        <div className="setBox2" style={{paddingTop: "8px"}}>$BOOT Balance: <span>525.97</span></div>
                                    </div>
                                    <button className="GovButton">Add</button>
                                </div>
                                <div className="ManageItem">
                                    <div className="label">Add Lock</div>
                                    <div className="setTwoBox">
                                        <div className="setBox1">
                                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>91.05</span>
                                            <span style={{color: darkMode ? "#ffffff" : "#323742"}}>Max $BOOT</span>
                                        </div>
                                        <div className="setBox2" style={{paddingTop: "8px"}}>$BOOT Balance: <span>525.97</span></div>
                                    </div>
                                    <button className="GovButton">Lock</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="boxContainerRightGov" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                            <div className="boxContainerRightGovTop">
                            <Grid columns='equal'>
                                <Grid.Row>
                                <Grid.Column></Grid.Column>
                                <Grid.Column></Grid.Column>
                                <Grid.Column></Grid.Column>
                                {/* <Grid.Column></Grid.Column> */}
                                <Grid.Column>
                                    <button className="boxContainerRightGovTopButton">
                                        <Link to="/governance-info" style={{color:"#fff"}}>
                                        New Proposal
                                        </Link>
                                    </button>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                <Grid.Column>
                                    <div className="boxContainerRightGovTopHeader" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                        Proposal 24
                                    </div>
                                </Grid.Column>
                                <Grid.Column></Grid.Column>
                                <Grid.Column></Grid.Column>
                                </Grid.Row>
                            </Grid>
                            </div>
                        <div className="boxContainerRightGovCenter">
                        <Form className="boxContainerRightGovCenterForm">
                            <Form.Group widths='equal'>
                            <Form.Field
                                control={Select}
                                options={Options}
                                label={{ children: 'Status', htmlFor: 'form-select-control' }}
                                placeholder='All'
                                search
                                searchInput={{ id: 'form-select-control' }}
                            />
                            <Form.Field
                                control={Select}
                                options={Options}
                                label={{ children: 'Outcome', htmlFor: 'form-select-control' }}
                                placeholder='All'
                                search
                                searchInput={{ id: 'form-select-control' }}
                            />
                            <Form.Field
                                control={Select}
                                options={Options}
                                label={{ children: 'App', htmlFor: 'form-select-control' }}
                                placeholder='All'
                                search
                                searchInput={{ id: 'form-select-control' }}
                            />
                            </Form.Group>
                        </Form>
                        </div>
                        <div className="boxContainerRightGovBottom">
                            <div className="boxContainerRightGovBottomBox" style={{backgroundColor: darkMode ? "#323742" : "#ffffff"}}>
                                <button className="boxContainerRightGovBottomButton">Active</button>
                                <div className="boxContainerRightGovBottomHeader" style={{color: darkMode ? "#ffffff" : "#323742"}}>Pool proxy: Commit new parameters for 0x3292.F9f88d, A100, new ...</div>
                                <div className="boxContainerRightGovBottomBody" style={{color: darkMode ? "#ffffff" : "#323742"}}>
                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text.
                                </div>
                                <div className="boxContainerRightGovBottomFooter" style={{color: darkMode ? "#ffffff" : "#323742"}}>05D:13H-33M:44S</div>
                            </div>
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
