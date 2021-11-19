import { ActorsTypes } from '../action-types'
import { Actors } from '../interfaces'

interface ListBornToday{
    type:ActorsTypes.ListBornToday
    payload:Actors[]
}

export type Action = ListBornToday