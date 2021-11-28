import React,{ useState,useEffect } from 'react'
import Layout from '../templates/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from '../APIController/reducers'
import * as MoviesActions from '../APIController/action-creators/moviesActions'
import { FaRegPlayCircle,FaChevronLeft,FaChevronRight } from 'react-icons/fa'
import { MdBookmarkAdd } from 'react-icons/md'
const Home = () => {
    const [isSet,setIsSet] = useState<boolean>(false)
    const [isLoad,setIsLoad] = useState<boolean>(false)
    const [gettedMovies,setGettedMovies] = useState<any[]>([]);

    const dispatch = useDispatch()
    const  moviesObjects:any  = useSelector((state:State)=> state.movies)
    const  moviesActions:any  = bindActionCreators(MoviesActions,dispatch)
    const renderVCarousel = () =>{
        if(moviesObjects?.find?.results?.length > 0){

            return moviesObjects.find.results.map((result:any) =>{
                const { id, image, numberOfEpisodes, seriesStartYear, seriesEndYear,runningTimeInMinutes, title } = result
                return <div key={id} className="home__hero-v-carousel-item">
                        <div className="home__hero-v-carousel-image-wrapper">
                            <img src={image?.url} alt="hero" />
                        </div>
                        <div className="home__hero-v-carousel-text">
                            <div className="home__hero-v-carousel-img-sm">
                                <MdBookmarkAdd />
                                <img src={image?.url} alt="hero" />
                            </div>
                            <FaRegPlayCircle />
                            <div>
                                <h2>'{title}'</h2>
                                <div className="home__hero-v-carousel-year">
                                    <h3>{seriesStartYear} {seriesStartYear ? '-' : null} {seriesEndYear} <h3>{runningTimeInMinutes}:00</h3></h3>
                                </div>
                                <h3>Number Of Episodes: {numberOfEpisodes}</h3>
                            </div>
                            
                        </div>
                    </div>
            
        })
    }
    }

    const renderHCarousel = () =>{
        if(moviesObjects?.find?.results?.length > 0){
            return moviesObjects.find.results.map((result:any) =>{
                const { id, image, title,principals } = result
                return <div key={id} className="home__hero-h-carousel-item">
                        <img src={image?.url} alt="hero" />
                        <div className="home__hero-h-carousel-text">
                            <FaRegPlayCircle />
                            <h2>{title}</h2>
                            <h3>{principals.map((principal:any,index:number) =>{
                                const { name } = principal
                                if(index === principals.length -1){
                                    return name
                                }else{
                                    return name + ', '
                                }
                            })}</h3>
                        </div>
                    </div>
            
        })
    }
    }

    useEffect(()=>{
        moviesActions.getHeroWithPromotedVideo(moviesObjects.currentTitleId)
        moviesActions.findByTitle('game of th')
    },[])
    return (
        <Layout>
            <div className="home">
                <div className="home__hero">
                    <div className="home__hero-v-carousel-wrapper">
                        <div className="home__hero-v-carousel-controls">
                            <div className="home__hero-v-carousel-prev"><FaChevronLeft/></div>
                            <div className="home__hero-v-carousel-next"><FaChevronRight/></div>
                        </div>
                        <div className="home__hero-v-carousel">
                            {renderVCarousel()}
                        </div>
                    </div>
                    <div className="home__hero-h-carousel-wrapper">
                        <div className="home__hero-h-carousel">
                            {renderHCarousel()}
                        </div>
                        <h3>Browse Trailsers <FaChevronRight /></h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}   

export default Home
