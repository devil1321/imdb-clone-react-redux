import { MoviesTypes } from '../action-types'

interface AutoComplete{
    type:MoviesTypes.AutoComplete,
    autocomplete:any[]
}

interface FindByTitle{
    type:MoviesTypes.FindByTitle,
    payload:any[]
}

export type Action = any; 