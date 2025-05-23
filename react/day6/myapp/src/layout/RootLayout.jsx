import React from 'react'
import NewsHeader from '../components/NewsHeader'
import { Outlet } from 'react-router'
import Footer from './../components/Footer'

const RootLayout = () => {
    return (
        <>
            <NewsHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout