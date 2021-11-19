import { MoviesTypes }  from '../action-types'
import { MoviesState } from '../interfaces'
import { Action } from '../actions/moviesActions'

const initData:MoviesState = {
    autocomplete:[],
    find:[],
    getVideos:[],
    getDetails:[],
    getTopStripe:[],
    getPopularMoviesByGenre:[],
    getTopCast:[],
    getFullCredits:[],
    getVersions:[],
    getMostPopulatMovies:[],
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
        case MoviesTypes.AutoComplete: 
            return {
                ...state,
                autocomplete:action.autocomplete
            }
        case MoviesTypes.FindByTitle:
            return{
                ...state
            }
        case MoviesTypes.GetVideos:
            return{
                ...state
            }
        case MoviesTypes.GetDetails:
            return{
                ...state
            }
        case MoviesTypes.GetTopStripe:
            return{
                ...state
            }
        case MoviesTypes.GetPopularMoviesByGenre:
            return{
                ...state
            }
        case MoviesTypes.GetTopCast:
            return{
                ...state
            }
        case MoviesTypes.GetFullCredits:
            return{
                ...state
            }
        case MoviesTypes.GetVersions:
            return{
                ...state
            }
        case MoviesTypes.GetMostPopulatMovies:
            return{
                ...state
            }
        case MoviesTypes.GetOverviewDetails:
            return{
                ...state
            }
        case MoviesTypes.GetTagLines:
            return{
                ...state
            }
        case MoviesTypes.GetPlots:
            return{
                ...state
            }
        case MoviesTypes.GetParentalGuide:
            return{
                ...state
            }
        case MoviesTypes.GetComingSoonMovies:
            return{
                ...state
            }
        case MoviesTypes.GetTechnical:
            return{
                ...state
            }
        case MoviesTypes.GetTopCrew:
            return{
                ...state
            }
        case MoviesTypes.GetRatings:
            return{
                ...state
            }
        case MoviesTypes.GetAwards:
            return{
                ...state
            }
        case MoviesTypes.GetMetaCritic:
            return{
                ...state
            }
        case MoviesTypes.GetUserReviews:
            return{
                ...state
            }
        case MoviesTypes.GetAwardsSummary:
            return{
                ...state
            }
        case MoviesTypes.GetHeroWithPromotedVideo:
            return{
                ...state
            }
        case MoviesTypes.GetComingSoonMovies:
            return{
                ...state
            }
        case MoviesTypes.GetBase:
            return{
                ...state
            }
        case MoviesTypes.GetSeasons:
            return{
                ...state
            }
        case MoviesTypes.GetVideoPlayback:
            return{
                ...state
            }
        case MoviesTypes.GetTopRatedMovies:
            return{
                ...state
            }
        case MoviesTypes.GetPopularMoviesByGenre:
            return{
                ...state
            }
        case MoviesTypes.GetBusiness:
            return{
                ...state
            }
        case MoviesTypes.GetReleaseExpectationBudle:
            return{
                ...state
            }
        case MoviesTypes.GetNews:
            return{
                ...state
            }
        case MoviesTypes.ListPopularGenres:
            return{
                ...state
            }
        case MoviesTypes.GetReviews:
            return{
                ...state
            }
        case MoviesTypes.GetMostPopularTvShows:
            return{
                ...state
            }
        case MoviesTypes.GetSynopses:
            return{
                ...state
            }
        case MoviesTypes.GetGenres:
            return{
                ...state
            }
        case MoviesTypes.GetCharNameList:
            return{
                ...state
            }
        case MoviesTypes.GetMoreLikeThis:
            return{
                ...state
            }
        case MoviesTypes.GetBestPictureWinners:
            return{
                ...state
            }
        case MoviesTypes.GetTopRatedTvShows:
            return{
                ...state
            }
        case MoviesTypes.GetImages:
            return{
                ...state
            }
        case MoviesTypes.GetAllImages:
            return{
                ...state
            }
        case MoviesTypes.GetFilmingLocations:
            return{
                ...state
            }
        case MoviesTypes.GetMetaData:
            return{
                ...state
            }
        case MoviesTypes.GetReleases:
            return{
                ...state
            }
        case MoviesTypes.GetTrivia:
            return{
                ...state
            }
        case MoviesTypes.GetQuotes:
            return{
                ...state
            }
        case MoviesTypes.GetGoofs:
            return{
                ...state
            }
        case MoviesTypes.GetCrazyCredits:
            return{
                ...state
            }
        case MoviesTypes.GetSoundTracks:
            return{
                ...state
            }
        default:
            return {
                ...state
            }
    }
}