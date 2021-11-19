import { ActorsTypes } from '../action-types'
import { ActorsState } from '../interfaces'
import { Action } from '../actions/actorActions'

const initData:ActorsState = {
    actors:[]
}

export default (state = initData , action:Action) =>{
    switch(action.type){
        case ActorsTypes.ListBornToday:
            return {
                ...state
            }
        default:
           return {
               ...state
           }
    }
}