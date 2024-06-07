import React from 'react'
import { Header } from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { routes } from '../routes/routes'
const MainLayout = ({ children }) => {
    const location = useLocation()
    const routePaths = [...routes.map(route => route.path.split("/")[1])]
    let is404Page = !routePaths.includes(location.pathname.split("/")[1]);
    if (!is404Page) {
        return (
            <>

                <Header />
                {children}
                <Footer />

            </>
        )
    } else {
        return (
            <>
                {children}

            </>
        )
    }

}

export default MainLayout