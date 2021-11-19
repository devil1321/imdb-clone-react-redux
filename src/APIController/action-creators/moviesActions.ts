import axios from 'axios'
import { Dispatch } from 'redux'
import { MoviesTypes } from '../action-types'
import { Action } from '../actions/moviesActions'

export const autocomplete = (query:string) => (dispatch:Dispatch<Action>):void => {
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: query,
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.AutoComplete,
              autocomplete:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const FindByTitle = () => (dispatch:Dispatch<Action>):void => {
    
}