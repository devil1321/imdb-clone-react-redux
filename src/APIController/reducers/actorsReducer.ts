import { ActorsTypes } from '../action-types'
import { ActorsState } from '../interfaces'
import { Action } from '../actions/actorActions'

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
        case ActorsTypes.ListBornToday:
            return {
                ...state
            }
        case ActorsTypes.ListMostPopularCelebs:
            return {
                ...state
            }
        case ActorsTypes.GetBio:
            return {
                ...state
            }
        case ActorsTypes.GetAllFilmography:
            return {
                ...state
            }
        case ActorsTypes.GetFilmographyApperances:
            return {
                ...state
            }
        case ActorsTypes.GetAllImages:
            return {
                ...state
            }
        case ActorsTypes.GetAllNews:
            return {
                ...state
            }
        case ActorsTypes.GetAllVideos:
            return {
                ...state
            }
        case ActorsTypes.GetAwards:
            return {
                ...state
            }
        case ActorsTypes.GetAwardsSummary:
            return {
                ...state
            }
        case ActorsTypes.GetIntrestingJobs:
            return {
                ...state
            }
        case ActorsTypes.GetKnowFor:
            return {
                ...state
            }
        default:
           return {
               ...state
           }
    }
}