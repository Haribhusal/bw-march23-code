import React from 'react'
import NewsHeader from '../components/NewsHeader'
import { Outlet } from 'react-router'
import Footer from './../components/Footer'
import { Toaster } from 'sonner';

const RootLayout = () => {
    return (
        <>
            <NewsHeader />
            <main>
                <Toaster />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout