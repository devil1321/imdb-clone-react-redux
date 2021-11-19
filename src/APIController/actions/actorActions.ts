import { ActorsTypes } from '../action-types'

interface ListBornToday{
    type:ActorsTypes.ListBornToday
    payload:any[]
}

export type Action = any