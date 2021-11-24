import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitter,FaYoutube } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoTwitch } from 'react-icons/io'
import { SiAmazon, SiGoogleplay } from 'react-icons/si'

const Footer = () => {
    return (
        <div className="footer"> 
            <div className="footer__icons">
                <FaFacebookSquare />
                <BsInstagram />
                <IoLogoTwitch />
                <FaTwitter />
                <FaYoutube />
            </div>
            <div className="footer__links">
                <Link to="#">Get the IMDb App <SiGoogleplay /> </Link>
                <Link to="#">Help</Link>
                <Link to="#">Site Index</Link>
                <Link to="#">IMDb Pro</Link>
                <Link to="#">Box Office Mojo</Link>
                <Link to="#">IMDb developer</Link>
                <Link to="#">Press Room</Link>
                <Link to="#">Advertising</Link>
                <Link to="#">Jobs</Link>
                <Link to="#">Conditions of Use</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Interest Based Ads</Link>
            </div>
            <Link to="#">an amazon <SiAmazon /> company</Link>
            <p>&copy; 1990-2021 by IMDb.com, Inc.</p>
        </div>
    )
}

export default Footer
