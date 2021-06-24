import React from 'react'

const TotalValueLocked = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div>
            <button className="boxContainerLeftPoolsOptionTopValues"  style={{backgroundColor: darkMode ? "#323842" : "#fff"}}>
                <div className="boxContainerLeftPoolsOptionTopValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>$4,534,375.88</div>
                <div className="boxContainerLeftPoolsOptionTopValueName">Value Locked</div>
            </button>
            <button className="boxContainerLeftPoolsOptionTopValues" style={{backgroundColor: darkMode ? "#323842" : "#fff"}}>
                <div className="boxContainerLeftPoolsOptionTopValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>$4,534,375.88</div>
                <div className="boxContainerLeftPoolsOptionTopValueName">Volume (24h)</div>
            </button>
            <button className="boxContainerLeftPoolsOptionTopValues" style={{backgroundColor: darkMode ? "#323842" : "#fff"}}>
                <div className="boxContainerLeftPoolsOptionTopValue" style={{color: darkMode ? "#ffffff" : "#323742"}}>$4,534,375.88</div>
                <div className="boxContainerLeftPoolsOptionTopValueName">Fees (24h)</div>
            </button>
        </div>
    )
}

export default TotalValueLocked
