import "./Pools_Add_Liquidity.css"
import React from 'react'
import Navbar from '../../components/Navbar'
import PoolsOptionContainer from "../../components/PoolsOptionContainer/PoolsOptionContainer"
import Hero from '../../components/HeroSection/Hero'

const Pools_Add_Liquidity = () => {
    return (
        <div>
            <Navbar/>
            {/* <Hero Content={"Pools Add Liquidity"}/> */}
            <PoolsOptionContainer/>
        </div>
    )
}

export default Pools_Add_Liquidity
