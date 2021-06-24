import React from 'react'

const CurrencyName = () => {
    let darkMode = localStorage.getItem('theme')=== 'theme-dark'
    return (
        <div>
            <button className="boxContainerLeftPoolsOptionTopButton" style={{color: darkMode ? "#fff" : "#5A6AF0", backgroundColor: darkMode ? "#5A6AF0" : "#fff"}}>
                DAI
            </button>
            <button className="boxContainerLeftPoolsOptionTopButton" style={{color: darkMode ? "#fff" : "#5A6AF0", backgroundColor: darkMode ? "#5A6AF0" : "#fff"}}>
                USDC
            </button>
            <button className="boxContainerLeftPoolsOptionTopButton" style={{color: darkMode ? "#fff" : "#5A6AF0", backgroundColor: darkMode ? "#5A6AF0" : "#fff"}}>
                USDT
            </button>
            <button className="boxContainerLeftPoolsOptionTopButton" style={{color: darkMode ? "#fff" : "#5A6AF0", backgroundColor: darkMode ? "#5A6AF0" : "#fff"}}>
                TUSD
            </button>
        </div>
    )
}

export default CurrencyName
