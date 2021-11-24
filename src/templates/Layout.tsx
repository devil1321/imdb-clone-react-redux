import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/theme/theme.scss'
const Layout:React.FC<any> = ({children}) => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
