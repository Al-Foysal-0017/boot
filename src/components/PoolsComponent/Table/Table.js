import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'
import CurrencyName from '../CurrencyName'
import UnderlyingTokens from "../UnderlyingTokens"
import DAIimage from "../../../images/DAIimage.png"
import { Link } from 'react-router-dom'

let darkMode = localStorage.getItem('theme')=== 'theme-dark'

const TableExamplePadded = () => (
  <>
  <Table celled padded style={{border:"1px solid #d8d9dd", borderRadius:"15px", backgroundColor: darkMode ? "#464B58" : "#fff"}}>
    <Table.Body>  
      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          Pool
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <CurrencyName/> <br />
        </Table.Cell>
      </Table.Row>
      {/* style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}} */}
      <Table.Row >
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          UnderlyingTokens
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
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
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          Total Value Locked
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
        4,534,375.88 <br />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          Daily Value
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
        $4,534,375.88<br />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          Pool APY
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
        1.98% <br />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          BOOT APY
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
        1.98% <br />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center'>
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Link to="/pools/add-liquidity">
                <button className="boxContainerPoolsColumn7Button">Details</button>
          </Link>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  
  
  
  
  
  <Table celled padded style={{border:"1px solid #d8d9dd", borderRadius:"15px", marginTop:"50px", backgroundColor: darkMode ? "#464B58" : "#fff"}}>
    <Table.Body>  
      <Table.Row >
        <Table.Cell >
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          Pool
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
                       <div className="">
                            <button className="boxContainerLeftPoolsOptionTopButton" style={{color: darkMode ? "#fff" : "#5A6AF0", backgroundColor: darkMode ? "#323742" : "#fff"}}>WETH</button>
                            <button className="boxContainerLeftPoolsOptionTopButton" style={{color: darkMode ? "#fff" : "#5A6AF0", backgroundColor: darkMode ? "#323742" : "#fff"}}>SETH</button>
                        </div> <br />
        </Table.Cell>
      </Table.Row>
      {/* style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}} */}
      <Table.Row >
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          UnderlyingTokens
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <span><img src={DAIimage} className="currencyImage" alt="DAI"/></span>
                <span className="boxContainerPoolsColumn2Value" style={{color: darkMode ? "#fff" : "#323742"}}>$4,534,375.88</span>
            </div>
        </div>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          Total Value Locked
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
        4,534,375.88 <br />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          Daily Value
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
        $4,534,375.88<br />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          Pool APY
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
        1.98% <br />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center' style={{color: darkMode ? "#A3B7A7" : "#323742"}}>
          BOOT APY
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' style={{color: darkMode ? "#fff" : "#323742"}}>
        1.98% <br />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center'>
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
        <Link to="/pools/add-liquidity">
                <button className="boxContainerPoolsColumn7Button">Details</button>
          </Link>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </>
)

export default TableExamplePadded
