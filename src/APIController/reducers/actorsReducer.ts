import { ActorsTypes } from '../action-types'
import { ActorsState } from '../interfaces'
import { Action } from '../actions/actorActions'
import { getBio, setActorId } from '../action-creators/actorsActions'
import { listMostPopularCelebs, getAllFilmography, getAllVideos } from './../action-creators/actorsActions';
import { getAwardsSummary } from './../action-creators/moviesActions';

const initData:ActorsState = {
    actorId:'',
    listBornToday:[],
    listMostPopularCelebs:[],
    getBio:[],
    getAllFilmography:[],
    GetFilmographyApperances:[],
    getAllImages:[],
    getAllNews:[],
    GetAllVideos:[],
    getAwards:[],
    getAwardsSummary:[],
    getIntrestingJobs:[],
    getKnowFor:[]
}

export default (state = initData , action:Action) =>{
    switch(action.type){
        case ActorsTypes.SetActorId:
            return{
                ...state,
                actorId:action.actorId
            }
        case ActorsTypes.ListBornToday:
            return {
                ...state,
                listBornToday:action.listBornToday
            }
        case ActorsTypes.ListMostPopularCelebs:
            return {
                ...state,
                listMostPopularCelebs:action.listMostPopularCelebs
            }
        case ActorsTypes.GetBio:
            return {
                ...state,
                getBio:action.getBio
            }
        case ActorsTypes.GetAllFilmography:
            return {
                ...state,
                getAllFilmography:action.getAllFilmography
            }
        case ActorsTypes.GetFilmographyApperances:
            return {
                ...state,
                getFilmographyApperances:action.getFilmographyApperances
            }
        case ActorsTypes.GetAllImages:
            return {
                ...state,
                getAllImages:action.getAllImages
            }
        case ActorsTypes.GetAllNews:
            return {
                ...state,
                getAllNews:action.getAllNews
            }
        case ActorsTypes.GetAllVideos:
            return {
                ...state,
                getAllVideos:action.getAllVideos
            }
        case ActorsTypes.GetAwards:
            return {
                ...state,
                getAwards:action.getAwards
            }
        case ActorsTypes.GetAwardsSummary:
            return {
                ...state,
                getAwardsSummary:action.getAwardsSummary
            }
        case ActorsTypes.GetIntrestingJobs:
            return {
                ...state,
                getIntrestingJobs:action.getIntrestingJobs
            }
        case ActorsTypes.GetKnowFor:
            return {
                ...state,
                getKnowFor:action.getKnowFor
            }
        default:
           return {
               ...state
           }
    }
}