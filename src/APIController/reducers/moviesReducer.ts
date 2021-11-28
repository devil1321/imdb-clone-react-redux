import { MoviesTypes }  from '../action-types'
import { MoviesState } from '../interfaces'
import { Action } from '../actions/moviesActions'
import { getComingSoonMovies, getMostPopularTvShows, getQuotes, getRatings, getSoundTracks, getTechnical, getTopRatedTvShows } from '../action-creators/moviesActions'
import { getTopCrew, getVideoPlayback, getTopRatedMovies, getCharNameList, getMoreLikeThis, getReleases, getGoofs } from './../action-creators/moviesActions';
import { getAwards } from '../action-creators/actorsActions';

const initData:MoviesState = {
    currentCountry:'',
    currentTitleId: 'tt0944947',
    autocomplete:[],
    find:[],
    getVideos:[],
    getDetails:[],
    getTopStripe:[],
    getPopularMoviesByGenre:[],
    getTopCast:[],
    getFullCredits:[],
    getVersions:[],
    getMostPopularMovies:[],
    getOverviewDetails:[],
    getTagLines:[],
    getPlots:[],
    getParentalGuide:[],
    getComingSoonTvShows:[],
    getTechnical:[],
    getTopCrew:[],
    getRatings:[],
    getAwards:[],
    GetMetaCritic:[],
    getUserReviews:[],
    getAwardsSummary:[],
    getHeroWithPromotedVideo:[],
    getComingSoonMovies:[],
    getBase:[],
    getSeasons:[],
    getVideoPlayback:[],
    getTopRatedMovies:[],
    getProductionStatus:[],
    getBusiness:[],
    GetReleaseExpectationBudle:[],
    getNews:[],
    listPopularGenres:[],
    getReviews:[],
    getMostPopularTvShows:[],
    getSynopses:[],
    getGenres:[],
    getCharNameList:[],
    getMoreLikeThis:[],
    getBestPictureWinners:[],
    getTopRatedTvShows:[],
    getImages:[],
    getAllImages:[],
    getFilmingLocations:[],
    getMetaData:[],
    getReleases:[],
    getTrivia:[],
    getQuotes:[],
    getGoofs:[],
    getCrazyCredits:[],
    getSoundTracks:[],
}

export default (state = initData,action:Action) =>{
    switch(action.type){
        case MoviesTypes.SetCurrentTitleId:
            return {
                ...state,
                currentTitleId:action.currentTitleId
            }
        case MoviesTypes.AutoComplete: 
            return {
                ...state,
                autocomplete:action.autocomplete
            }
     
        case MoviesTypes.FindByTitle:
            return{
                ...state,
                find:action.findByTitle
            }
        case MoviesTypes.GetVideos:
            return{
                ...state,
                getVideos:action.getVideos
            }
        case MoviesTypes.GetDetails:
            return{
                ...state,
                getDetails:action.getDetails
            }
        case MoviesTypes.GetTopStripe:
            return{
                ...state,
                getTopStripe:action.getTopStripe
            }
        case MoviesTypes.GetPopularMoviesByGenre:
            return{
                ...state,
                getPopularMoviesByGenre:action.getPopularMoviesByGenre
            }
        case MoviesTypes.GetTopCast:
            return{
                ...state,
                getTopCast:action.getTopCast
            }
        case MoviesTypes.GetFullCredits:
            return{
                ...state,
                getFullCredits:action.getFullCredits
            }
        case MoviesTypes.GetVersions:
            return{
                ...state,
               getVersions:action.getVersions
            }
        case MoviesTypes.GetMostPopularMovies:
            return{
                ...state,
                getMostPopularMovies:action.getMostPopularMovies
            }
        case MoviesTypes.GetOverviewDetails:
            return{
                ...state,
                getOverviewDetails:action.getOverviewDetails
            }
        case MoviesTypes.GetTagLines:
            return{
                ...state,
                getTagLines:action.getTagLines
            }
        case MoviesTypes.GetPlots:
            return{
                ...state,
                getPlots:action.getPlots
            }
        case MoviesTypes.GetParentalGuide:
            return{
                ...state,
                getParentalGuide:action.getParentalGuide
            }
        case MoviesTypes.GetComingSoonMovies:
            return{
                ...state,
                getComingSoonTvShows:action.getComingSoonTvShows
            }
        case MoviesTypes.GetTechnical:
            return{
                ...state,
                getTechnical:action.getTechnical
            }
        case MoviesTypes.GetTopCrew:
            return{
                ...state,
                getTopCrew:action.getTopCrew
            }
        case MoviesTypes.GetRatings:
            return{
                ...state,
                getRatings:action.getRatings
            }
        case MoviesTypes.GetAwards:
            return{
                ...state,
                getAwards:action.getAwards
            }
        case MoviesTypes.GetMetaCritic:
            return{
                ...state,
                getMetaCritic:action.getMetaCritic
            }
        case MoviesTypes.GetUserReviews:
            return{
                ...state,
                getUserReviews:action.getUserReviews
            }
        case MoviesTypes.GetAwardsSummary:
            return{
                ...state,
                getAwardsSummary:action.getAwardsSummary
            }
        case MoviesTypes.GetHeroWithPromotedVideo:
            return{
                ...state,
                getHeroWithPromotedVideo:action.getHeroWithPromotedVideo
            }
        case MoviesTypes.GetComingSoonMovies:
            return{
                ...state,
                getComingSoonMovies:action.getComingSoonMovies
            }
        case MoviesTypes.GetBase:
            return{
                ...state,
                getBase:action.getBase
            }
        case MoviesTypes.GetSeasons:
            return{
                ...state,
                getSeasons:action.getSeasons
            }
        case MoviesTypes.GetVideoPlayback:
            return{
                ...state,
                getVideoPlayback:action.getVideoPlayback
            }
        case MoviesTypes.GetTopRatedMovies:
            return{
                ...state,
                getTopRatedMovies:action.getTopRatedMovies
            }
        case MoviesTypes.GetPopularMoviesByGenre:
            return{
                ...state,
                getPopularMoviesByGenre:action.getPopularMoviesByGenre
            }
        case MoviesTypes.GetBusiness:
            return{
                ...state,
                getBusiness:action.getBusiness
            }
        case MoviesTypes.GetReleaseExpectationBudle:
            return{
                ...state,
                getReleaseExpectationBudle:action.getReleaseExpectationBudle
            }
        case MoviesTypes.GetNews:
            return{
                ...state,
                getNews:action.getNews
            }
        case MoviesTypes.ListPopularGenres:
            return{
                ...state,
                listPopularGenres:action.listPopularGenres
            }
        case MoviesTypes.GetReviews:
            return{
                ...state,
                getReviews:action.getReviews
            }
        case MoviesTypes.GetMostPopularTvShows:
            return{
                ...state,
                getMostPopularTvShows:action.getMostPopularTvShows
            }
        case MoviesTypes.GetSynopses:
            return{
                ...state,
                getSynopses:action.getSynopses
            }
        case MoviesTypes.GetGenres:
            return{
                ...state,
                getGenres:action.getGenres
            }
        case MoviesTypes.GetCharNameList:
            return{
                ...state,
                getCharNameList:action.getCharNameList
            }
        case MoviesTypes.GetMoreLikeThis:
            return{
                ...state,
                getMoreLikeThis:action.getMoreLikeThis
            }
        case MoviesTypes.GetBestPictureWinners:
            return{
                ...state,
                getBestPictureWinners:action.getBestPictureWinners
            }
        case MoviesTypes.GetTopRatedTvShows:
            return{
                ...state,
                getTopRatedTvShows:action.getTopRatedTvShows
            }
        case MoviesTypes.GetImages:
            return{
                ...state,
                getImages:action.getImages
            }
        case MoviesTypes.GetAllImages:
            return{
                ...state,
                getAllImages:action.getAllImages
            }
        case MoviesTypes.GetFilmingLocations:
            return{
                ...state,
                getFilmingLocations:action.getFilmingLocations
            }
        case MoviesTypes.GetMetaData:
            return{
                ...state,
                getMetaData:action.getMetaData
            }
        case MoviesTypes.GetReleases:
            return{
                ...state,
                getReleases:action.getReleases
            }
        case MoviesTypes.GetTrivia:
            return{
                ...state,
                getTrivia:action.getTrivia
            }
        case MoviesTypes.GetQuotes:
            return{
                ...state,
                getQuotes:action.getQuotes
            }
        case MoviesTypes.GetGoofs:
            return{
                ...state,
                getGoofs:action.getGoofs
            }
        case MoviesTypes.GetCrazyCredits:
            return{
                ...state,
                getCrazyCredits:action.getCrazyCredits
            }
        case MoviesTypes.GetSoundTracks:
            return{
                ...state,
                getSoundTracks:action.getSoundTracks
            }
        default:
            return {
                ...state
            }
    }
}