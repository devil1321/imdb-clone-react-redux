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

export const FindByTitle = (query:string) => (dispatch:Dispatch<Action>):void => {
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/find',
        params: query,
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
         dispatch({
             type:MoviesTypes.FindByTitle,
             findByTitle:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getVideos = (titleId:string) => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-videos',
        params: {tconst: titleId, limit: '200', region: 'US'},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetVideos,
              getVideos:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getDetails = (titleId:string) => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-details',
        params: {tconst: 'tt0944947'},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
           dispatch({
               type:MoviesTypes.GetDetails,
               getDetails:response.data
           })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getTopStripe = (titleId:string,country:string = "US",purchaseCountry:string = "US") => (dispatch:Dispatch<Action>) =>{
    // countries AR|AU|CA|CL|ES|DE|IT|MX|NZ|PT|ES|GB|US
    // purchase his US|GB|DE|IN|IT|FR|JP|CA|ES
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-top-stripe',
        params: {tconst: titleId, currentCountry: country, purchaseCountry: purchaseCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTopStripe,
              getTopStripe:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getPopularMoviesByGenre = (genre:string) => (dispatch:Dispatch<Action>):void=>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre',
        params: {genre: genre},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetPopularMoviesByGenre,
              getPopularMoviesByGenre:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getTopCast = (titleId:string) => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-top-cast',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTopCast,
              getTopCast:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getFullCredits = (titleId:string) => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-full-credits',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetFullCredits,
              getFullCredits:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getVersions = (titleId:string) => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-versions',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetVersions,
              getVersions:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getMostPopularMovies = (homeCountry:string = "US",pucharseCountry:string = "US",currentCountry:string = "US") => (dispatch:Dispatch<Action>):void =>{
    // home US|GB|DE|IN|IT|FR|JP|CA|ES
    // pucharse US|GB|DE|IN|IT|FR|JP|CA|ES
    // current AR|AU|CA|CL|ES|DE|IT|MX|NZ|PT|ES|GB|US
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
        params: {homeCountry: homeCountry, purchaseCountry: pucharseCountry, currentCountry: currentCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
            dispatch({
                type:MoviesTypes.GetMostPopularMovies,
                getMostPopularMovies:response.data
            })
      }).catch(function (error) {
          console.error(error);
      });

}

export const getOverviewDetails = (titleId:string,currentCountry:string = "US") => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
        params: {tconst: titleId, currentCountry: currentCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

export const getTagLines = (titleId:string) => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-taglines',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTagLines,
              getTagLines:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getPlots = (titleId:string) => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-plots',
        params: {tconst:titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetPlots,
              getPlots:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getParentalGuide = (titleId:string) => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-parental-guide',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetParentalGuide,
              getParentalGuide:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getComingSoonTvShows = (currentCountry:string = "US", date:string) => (dispatch:Dispatch<Action>):void =>{
    var options:any = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-coming-soon-tv-shows',
        params: {currentCountry: currentCountry, today: date},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request(options).then(function (response) {
         dispatch({
             type:MoviesTypes.GetComingSoonTvShows,
             getComingSoonTvShows:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}