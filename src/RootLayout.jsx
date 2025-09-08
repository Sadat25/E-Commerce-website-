import React from 'react'
import Top from './Component/Top'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from './Component/NavBar'

const RootLayout = () => {
    return (
        <>
            <Top />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout