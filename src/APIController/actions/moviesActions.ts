import { MoviesTypes } from '../action-types'
import { Movies } from '../interfaces'  

interface FindByTitle{
    type:MoviesTypes.FindByTitle,
    payload:Movies[]
}

export type Action = FindByTitle