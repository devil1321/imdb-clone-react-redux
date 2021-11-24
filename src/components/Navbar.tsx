import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaChevronRight } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { MdLocalMovies, MdMovieCreation } from 'react-icons/md'
import { BsPeopleFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { FaCity } from 'react-icons/fa'
import { MdBookmarkAdd } from 'react-icons/md'
const Navbar:React.FC = () => {

    const [category,setCategory] = useState<string>('All')

    return (
        <div className="navbar">
            <Link to="#" className="navbar__logo">IMDb</Link>
            <button className="navbar__menu">Menu <GiHamburgerMenu /></button>
            <div className="navbar__search">
                <div className="navbar__category">{category}<IoMdArrowDropdown /></div>
                <div className="navbar__h-line"></div>
                <div className="navbar__category-menu">
                    <p onClick={(e:any)=>{setCategory(e.target.dataset.category)}} data-category="All"><FiSearch />All</p>
                    <p onClick={(e:any)=>{setCategory(e.target.dataset.category)}} data-category="Titles"><MdLocalMovies />Titles</p>
                    <p onClick={(e:any)=>{setCategory(e.target.dataset.category)}} data-category="TV Episodes"><MdMovieCreation />TV Episodes</p>
                    <p onClick={(e:any)=>{setCategory(e.target.dataset.category)}} data-category="Celebs"><BsPeopleFill />Celebs</p>
                    <p onClick={(e:any)=>{setCategory(e.target.dataset.category)}} data-category="Companies"><FaCity />Companies</p>
                    <p onClick={(e:any)=>{setCategory(e.target.dataset.category)}} data-category="Keywords"><BsArrowRightSquareFill />Keywords</p>
                    <div className="navbar__v-line"></div>
                    <Link to="#">Advanced Search<FaChevronRight /></Link>
                </div>
                <input type="text" />
                <FiSearch />
            </div>
            <Link to="#">IMDBPro</Link>
            <div className="navbar__h-line"></div>
            <Link to="#">
                <button className="navbar__watchlist">
                    <span><MdBookmarkAdd />Watchlist</span>
                </button>
            </Link>
            <Link to="#">Sign In</Link> 
        </div>
    )
}

export default Navbar
