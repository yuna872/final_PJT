import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
  },
  mutations: {
    GET_ALL_MOVIES(state, movies) {
      console.log(movies)
      state.movies = movies
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
  },
  modules: {
  }
})
