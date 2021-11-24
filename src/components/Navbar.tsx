import React,{ useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaChevronRight } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { MdLocalMovies, MdMovieCreation } from 'react-icons/md'
import { BsPeopleFill, BsArrowRightSquareFill, BsCollectionPlayFill } from 'react-icons/bs'
import { FaCity } from 'react-icons/fa'
import { MdBookmarkAdd } from 'react-icons/md'
import { GiAlliedStar,GiPlanetConquest } from 'react-icons/gi'
const Navbar:React.FC = () => {

    const [category,setCategory] = useState<string>('All')

    const handleOpenNavbar = ():void =>{
        const tl = gsap.timeline()
        tl.fromTo('.navbar__category-menu',{
            opacity:0,
            y:30
        },{
            opacity:1,
            y:0,
            duration:1
        })
    }
    const handleCloseNavbar = (e:any):void =>{
        setCategory(e.target.dataset.category)
        const tl = gsap.timeline()
        tl.fromTo('.navbar__category-menu',{
            opacity:1,
            y:0
        },{
            opacity:0,
            y:30,
            duration:1
        })
    }
    const handleOpenMenu = ():void =>{
        const tl = gsap.timeline()
        tl.to('.navbar__main-menu',{transform:'translateY(0%)',duration:1})
    }
    const handleCloseMenu = ():void =>{
        const tl = gsap.timeline()
        tl.to('.navbar__main-menu',{transform:'translateY(-100%)',duration:1})
    }
    return (
        <div className="navbar">
            <Link to="#" className="navbar__logo">IMDb</Link>
            <button className="navbar__menu" onClick={()=>{handleOpenMenu()}}>Menu <GiHamburgerMenu /></button>
            <div className="navbar__search">
                <div className="navbar__category" onClick={()=>{handleOpenNavbar()}}>{category}<IoMdArrowDropdown /></div>
                <div className="navbar__h-line"></div>
                <div className="navbar__category-menu" >
                    <p onClick={(e:any)=>{handleCloseNavbar(e)}} data-category="All"><FiSearch />All</p>
                    <p onClick={(e:any)=>{handleCloseNavbar(e)}} data-category="Titles"><MdLocalMovies />Titles</p>
                    <p onClick={(e:any)=>{handleCloseNavbar(e)}} data-category="TV Episodes"><MdMovieCreation />TV Episodes</p>
                    <p onClick={(e:any)=>{handleCloseNavbar(e)}} data-category="Celebs"><BsPeopleFill />Celebs</p>
                    <p onClick={(e:any)=>{handleCloseNavbar(e)}} data-category="Companies"><FaCity />Companies</p>
                    <p onClick={(e:any)=>{handleCloseNavbar(e)}} data-category="Keywords"><BsArrowRightSquareFill />Keywords</p>
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
            <div className="navbar__main-menu">
                <div className="navbar__main-menu-header">
                    <h2>IMDb</h2>
                    <div className="navbar__close-btn" onClick={()=>{handleCloseMenu()}}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="navbar__main-menu-main">
                    <div className="navbar__movies --menu-item-wrapper">
                        <h2><MdLocalMovies /> Movies</h2>
                        <div className="navbar__movies-menu --menu-inner">
                            <Link to="#">Release Calendar</Link>
                            <Link to="#">DVD &amp; Blu-ray Releases</Link>
                            <Link to="#">Top 250 Movies</Link>
                            <Link to="#">Most Popular Movies</Link>
                            <Link to="#">Browse Movies By Genre</Link>
                            <Link to="#">Top Box Office</Link>
                            <Link to="#">Showtimes &amp; Tickets</Link>
                            <Link to="#">In Theaters</Link>
                            <Link to="#">Coming Soon</Link>
                            <Link to="#">Movie News</Link>
                            <Link to="#">India Movie Spotlight</Link>
                        </div>
                    </div>
                    <div className="navbar__tv-shows --menu-item-wrapper">
                        <h2><MdMovieCreation /> TV Shows</h2>
                        <div className="navbar__tv-shows-menu --menu-inner">
                            <Link to="#">What`s on TV &amp; Streaming</Link>
                            <Link to="#">Top 250 TV Shows</Link>
                            <Link to="#">Most Popular TV Shows</Link>
                            <Link to="#">Browse TV Shows By Genre</Link>
                            <Link to="#">TV News</Link>
                            <Link to="#">India TV Spotlight</Link>
                        </div>
                    </div>
                    <div className="navbar__awards-and-events --menu-item-wrapper">
                        <h2><GiAlliedStar /> Awards &amp; Events</h2>
                        <div className="navber__awards-and-events-menu --menu-inner">
                            <Link to="#">Oscars</Link>
                            <Link to="#">Best Picture Winners</Link>
                            <Link to="#">Golden Globes</Link>
                            <Link to="#">Emmys</Link>
                            <Link to="#">STARMeter Awards</Link>
                            <Link to="#">San Diego Comic-Con</Link>
                            <Link to="#">New York Comin-Con</Link>
                            <Link to="#">Sundance Film Festival</Link>
                            <Link to="#">Torronto Int`l Film Festival</Link>
                            <Link to="#">Awards Cenral</Link>
                            <Link to="#">Festival Central</Link>
                            <Link to="#">All Events</Link>
                        </div>
                    </div>
                    <div className="navbar__celebs --menu-item-wrapper ">
                        <h2><BsPeopleFill /> Celebs</h2>
                        <div className="navbar__celebs-menu --menu-inner">
                             <Link to="#">Born Today</Link>
                             <Link to="#">Most Popular Celebs</Link>
                             <Link to="#">Celebrity News</Link>
                        </div>
                    </div>
                    <div className="navbar__watch --menu-item-wrapper ">
                        <h2><BsCollectionPlayFill /> Watch</h2>
                        <div className="navbar__watch-menu --menu-inner">
                            <Link to="#">What To Watch</Link>
                            <Link to="#">Lastest Trailers</Link>
                            <Link to="#">IMDb Orginals</Link>
                            <Link to="#">IMDb Picks</Link>
                            <Link to="#">IMDb Podcasts</Link>
                        </div>
                    </div>

                    <div className="navbar__community --menu-item-wrapper">
                        <h2><GiPlanetConquest /> Community</h2>
                        <div  className="navbar__community-menu --menu-inner">
                            <Link to="#">Help Center</Link>
                            <Link to="#">Contributor Zone</Link>
                            <Link to="#">Polls</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
