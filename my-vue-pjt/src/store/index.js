import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    myMovies: [],
  },
  getters: {
  },
  mutations: {
    GET_ALL_MOVIES(state, movies) {
      state.movies = movies
    },
    ADD_MOVIE(state, info) {
      if (state.myMovies.find((movie) => movie.info.title === info.title )) {
        alert('이미 있음')
      } else {
        state.myMovies.push({info,isCanceled:false})  
      } 
    },
    CANCEL_TOGGLE(state, movieItem) {
      state.myMovies = state.myMovies.map((movie) => {
        if (movieItem === movie){
          movie.isCanceled = !movie.isCanceled          
        }
        return movie
      })
    }
  },
  actions: {
    getAllMovies: function(context) {
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: {
          api_key: process.env.VUE_APP_API_KEY,
          language: 'ko-KR',
        }
      })
        .then((res) => {
          context.commit('GET_ALL_MOVIES', res.data.results)
          console.log(res)
        })
    },
    addMovie(context, inputV) {
      console.log(inputV)
      console.log(context.state.movies)
      const info = context.state.movies.find((movie) => movie.title === inputV)
      context.commit('ADD_MOVIE', info)
    }
  },
  modules: {
  }
})
