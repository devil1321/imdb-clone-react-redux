import axios, { Axios } from 'axios'
import { Dispatch } from 'redux'
import { MoviesTypes } from '../action-types'
import { Action } from '../actions/moviesActions'
import { AxiosMoviesOptions } from './../interfaces';

export const setCurrentTitleId = (titleId:string) => (dispatch:Dispatch<Action>) =>{ 
    dispatch({
        type:MoviesTypes.SetCurrentTitleId,
        currentTitleId:titleId
    })
}

export const autocomplete = (query:string) => async(dispatch:Dispatch<Action>) => {
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {
            q:query
        },
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.AutoComplete,
              autocomplete:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const FindByTitle = (query:string) => async(dispatch:Dispatch<Action>) => {
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/find',
        params: {
            q:query
        },
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
         dispatch({
             type:MoviesTypes.FindByTitle,
             findByTitle:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getVideos = (titleId:string,limit:string = "200",region:string = "US") => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-videos',
        params: {tconst: titleId, limit: limit, region: region},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetVideos,
              getVideos:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getDetails = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-details',
        params: {tconst: 'tt0944947'},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
           dispatch({
               type:MoviesTypes.GetDetails,
               getDetails:response.data
           })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getTopStripe = (titleId:string,country:string = "US",purchaseCountry:string = "US") => async(dispatch:Dispatch<Action>) =>{
    // countries AR|AU|CA|CL|ES|DE|IT|MX|NZ|PT|ES|GB|US
    // purchase his US|GB|DE|IN|IT|FR|JP|CA|ES
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-top-stripe',
        params: {tconst: titleId, currentCountry: country, purchaseCountry: purchaseCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTopStripe,
              getTopStripe:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getPopularMoviesByGenre = (genre:string) => async(dispatch:Dispatch<Action>)=>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre',
        params: {genre: genre},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetPopularMoviesByGenre,
              getPopularMoviesByGenre:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getTopCast = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-top-cast',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTopCast,
              getTopCast:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getFullCredits = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-full-credits',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetFullCredits,
              getFullCredits:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getVersions = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-versions',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetVersions,
              getVersions:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getMostPopularMovies = (homeCountry:string = "US",pucharseCountry:string = "US",currentCountry:string = "US") => async(dispatch:Dispatch<Action>) =>{
    // home US|GB|DE|IN|IT|FR|JP|CA|ES
    // pucharse US|GB|DE|IN|IT|FR|JP|CA|ES
    // current AR|AU|CA|CL|ES|DE|IT|MX|NZ|PT|ES|GB|US
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
        params: {homeCountry: homeCountry, purchaseCountry: pucharseCountry, currentCountry: currentCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
            dispatch({
                type:MoviesTypes.GetMostPopularMovies,
                getMostPopularMovies:response.data
            })
      }).catch(function (error) {
          console.error(error);
      });

}

export const getOverviewDetails = (titleId:string,currentCountry:string = "US") => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
        params: {tconst: titleId, currentCountry: currentCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

export const getTagLines = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-taglines',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTagLines,
              getTagLines:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getPlots = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-plots',
        params: {tconst:titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetPlots,
              getPlots:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getParentalGuide = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-parental-guide',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetParentalGuide,
              getParentalGuide:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getComingSoonTvShows = (currentCountry:string = "US", date:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-coming-soon-tv-shows',
        params: {currentCountry: currentCountry, today: date},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
         dispatch({
             type:MoviesTypes.GetComingSoonTvShows,
             getComingSoonTvShows:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}
export const getTechnical = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-technical',
        params: {tconst: 'tt0944947'},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTechnical,
              getTechnical:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getTopCrew = (titleId:string) =>async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-top-crew',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTopCrew,
              getTopCrew:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getRatings = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-ratings',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetRatings,
              getRatings:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getAwards = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-awards',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetAwards,
              getAwards:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getMetaCritic = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-metacritic',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetMetaCritic,
              getMetaCritic:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getUserReviews = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-user-reviews',
        params: {tconst:titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetUserReviews,
              getUserReviews:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getAwardsSummary = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-awards-summary',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetAwardsSummary,
              getAwardsSummary:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getHeroWithPromotedVideo = (titleId:string,purchaseCountry:string = "US",currentCountry:string = "US") => async(dispatch:Dispatch<Action>)=>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-hero-with-promoted-video',
        params: {tconst: titleId, purchaseCountry: purchaseCountry, currentCountry: currentCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetHeroWithPromotedVideo,
              getHeroWithPromotedVideo:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getComingSoonMovies = (homeCountry:string="US",purchaseCountry:string = "US",currentCountry:string = "US") => async(dispatch:Dispatch<Action>)=>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-coming-soon-movies',
        params: {homeCountry: homeCountry, purchaseCountry: purchaseCountry, currentCountry: currentCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetComingSoonMovies,
              getComingSoonMovies:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getBase = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-base',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetBase,
              getBase:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getSeasons = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-seasons',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
            dispatch({
                type:MoviesTypes.GetSeasons,
                getSeasons:response.data
            })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getVideoPlayback = (viconst:string,regions:string="US") => async(dispatch:Dispatch<Action>) =>{
    // viconst from get videos from id
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-video-playback',
        params: {viconst: viconst, region: regions},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetVideoPlayback,
              getVideoPlayback:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getTopRatedMovies = () => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies',
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
         dispatch({
             type:MoviesTypes.GetTopRatedMovies,
             getTopRatedMovies:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getProductionStatus = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-production-status',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetProductionStatus,
              getProductionStatus:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getBusiness = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-business',
        params: {tconst: 'tt0796366'},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
        dispatch({
            type:MoviesTypes.GetBusiness,
            getBusiness:response.data
        })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getReleaseExpectationBudle = (titleId:string,currentCountry:string = "US",purchaseCountry:string = "US") => async(dispatch:Dispatch<Action>)=>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-release-expectation-bundle',
        params: {tconst: titleId, currentCountry: currentCountry, purchaseCountry: purchaseCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetReleaseExpectationBudle,
              getReleaseExpectationBudle:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getNews = (titleId:string,limit:string = '100') => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-news',
        params: {tconst: titleId, limit: limit},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
         dispatch({
             type:MoviesTypes.GetNews,
             getNews:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}

export const listPopularGenres = () => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/list-popular-genres',
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.ListPopularGenres,
              listPopularGenres:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getReviews = (titleId:string,currentCountry:string = "US",purchaseCountry:string = "US") => async(dispatch:Dispatch<Action>)=>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-reviews',
        params: {tconst: titleId, currentCountry: currentCountry, purchaseCountry: purchaseCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetReviews,
              getReviews:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getMostPopularTvShows = (homeCountry:string = "US",pucharseCountry:string="US",currentCountry:string = "US")=> async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows',
        params: {homeCountry: homeCountry, purchaseCountry: pucharseCountry, currentCountry: currentCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetMostPopularTvShows,
              getMostPopularTvShows:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getSynopses = (titleId:string) => async(dispatch:Dispatch<Action>)=>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-synopses',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

export const getGenres = (titleId:string) => async(dispatch:Dispatch<Action>)=>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-genres',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

export const getCharNameList = (id :string,titleId:string,currentCountry:string = "US",purchaseCountry:string = "US",marketplace:string)=> async(dispatch:Dispatch<Action>) =>{
    // id from most-popular-celebs || list-born-today value started with nm
    // marketplace val from amazonProductId from getTopStripe
    var options:Action = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-charname-list',
        params: {
          id: id,
          tconst: titleId,
          currentCountry: currentCountry,
          marketplace: marketplace,
          purchaseCountry: purchaseCountry
        },
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}

export const getMoreLikeThis = (titleId:string,currentCountry:string = "US",purchaseCountry:string = "US")=> async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-more-like-this',
        params: {tconst: titleId, currentCountry: currentCountry, purchaseCountry: purchaseCountry},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetMoreLikeThis,
              getMoreLikeThis:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getBestPictureWinners = () => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-best-picture-winners',
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
    }
  };
  
  axios.request<AxiosMoviesOptions>(options).then(function (response) {
      dispatch({
          type:MoviesTypes.GetBestPictureWinners,
          getBestPictureWinners:response.data
      })
  }).catch(function (error) {
      console.error(error);
  });
}

export const getTopRatedTvShows = () => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows',
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTopRatedTvShows,
              getTopRatedTvShows:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getImages = (titleId:string,limit:string="100") => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-images',
        params: {tconst: titleId, limit: limit},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
         dispatch({
             type:MoviesTypes.GetImages,
             getImages:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getAllImages = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-all-images',
        params: {tconst:titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };

      axios.request(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetAllImages,
              getAllImages:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getFilmingLocations = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-filming-locations',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetFilmingLocations,
              getFilmingLocations:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getMetaData = (titleIds:string[],region:string="US") => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: `https://imdb8.p.rapidapi.com/title/get-meta-data/${titleIds.map(id => `ids=${id}&`)}region=${region}`,
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetMetaData,
              getMetaData:response.data
            })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getReleases = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-releases',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetReleases,
              getReleases:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getTrivia = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-trivia',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetTrivia,
              getTrivia:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getQuotes = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-quotes',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
         dispatch({
             type:MoviesTypes.GetQuotes,
             getQuotes:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getGoofs =  (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-goofs',
        params: {tconst: 'tt6320628'},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetGoofs,
              getGoofs:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getCrazyCredits = (titleId:string) => async(dispatch:Dispatch<Action>) =>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-crazycredits',
        params: {tconst: 'tt6320628'},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      axios.request<AxiosMoviesOptions>(options).then(function (response) {
          dispatch({
              type:MoviesTypes.GetCrazyCredits,
              getCrazyCredits:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getSoundTracks = (titleId:string) => async(dispatch:Dispatch<Action>)=>{
    var options:AxiosMoviesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-sound-tracks',
        params: {tconst: titleId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
    }
  
    axios.request<AxiosMoviesOptions>(options).then(function (response) {
        dispatch({
            type:MoviesTypes.GetSoundTracks,
            getSoundTracks:response.data
        })
    }).catch(function (error) {
        console.error(error);
    });
}