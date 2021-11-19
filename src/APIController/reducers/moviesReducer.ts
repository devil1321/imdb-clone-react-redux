import { MoviesTypes }  from '../action-types'
import { MoviesState } from '../interfaces'
import { Action } from '../actions/moviesActions'

const initData:MoviesState = {
    movies:[]
}

export default (state = initData,action:Action) =>{
    switch(action.type){
        case MoviesTypes.FindByTitle:
            return{
                ...state
            }
        default:
            return {
                ...state
            }
    }
}