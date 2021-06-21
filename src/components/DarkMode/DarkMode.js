import React, { useState } from 'react'
import Swap from '../../pages/swap/Swap'
import Navbar from '../Navbar/navbar/Navbar'

const DarkMode = () => {
    // const [darkMode, setDarkMode] = useState(true)
    const darkMode = true
    return (
        <div>
            <Swap darkMode={darkMode}/>
            <Navbar darkMode={darkMode} />
        </div>
    )
}

export default DarkMode
