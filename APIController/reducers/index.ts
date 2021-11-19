import { combineReducers } from 'redux'
import actorsReducer from './actorsReducer'
import moviesReducer from './moviesReducer'

const reducers = combineReducers({
    actors:actorsReducer,
    movies:moviesReducer
})

export default reducers

export type State = ReturnType<typeof reducers>