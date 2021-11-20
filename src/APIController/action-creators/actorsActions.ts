import axios from 'axios'
import { Dispatch } from 'redux'
import { Action } from '../actions/actorActions'
import { AxiosActorOptions } from '../interfaces'
import { ActorsTypes } from '../action-types'

export const listBornToday = (month:string,day:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosActorOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/actors/list-born-today',
        params: {month:month, day: day},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosActorOptions>(options).then(function (response) {
         dispatch({
             type:ActorsTypes.ListBornToday,
             listBornToday:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });

}

export const listMostPopularCelebs = (homeCountry:string="US",currentCountry:string = "US",pucharseCountry:string="US") => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosActorOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/actors/list-most-popular-celebs',
        params: {homeCountry: homeCountry, currentCountry:currentCountry, purchaseCountry: pucharseCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosActorOptions>(options).then(function (response) {
         dispatch({
             type:ActorsTypes.ListMostPopularCelebs,
             listMostPopularCelebs:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getBio = (actorId:string) => async(dispatch:Dispatch<Action>) =>{
    // actor id from list born today
    var options:AxiosActorOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/actors/get-bio',
        params: {nconst:actorId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosActorOptions>(options).then(function (response) {
         dispatch({
             type:ActorsTypes.GetBio,
             getBio:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getAllFilmography = (actorId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosActorOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/actors/get-all-filmography',
        params: {nconst: actorId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosActorOptions>(options).then(function (response) {
          dispatch({
              type:ActorsTypes.GetAllFilmography,
              getAllFilmography:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getFilmographyApperances = (actorId:string,titleId:string,region:string = "US",category:string="actor") => async(dispatch:Dispatch<Action>)=>{
    // category = actor|actress|soundtrack|director|writer
    var options:AxiosActorOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/actors/get-filmography-appearances',
        params: {nconst: actorId, tconst: titleId, region:region, category: category},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosActorOptions>(options).then(function (response) {
          dispatch({
              type:ActorsTypes.GetFilmographyApperances,
              getFilmographyApperances:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}