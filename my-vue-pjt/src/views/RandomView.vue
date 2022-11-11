<template>
  <div class="movie-container">
    <button @click="randomPick" class="button btnFade btnBlueGreen">PICK</button>
    <div>
      <div class="movie-content">
      <div>
        <img
          class="random-img"
          style="height:45vh; border-radius: 2%"
          :src="image(randomMovie?.poster_path)"
        />
      </div>
      <div class="random-info">
        <h1 style="color: white; text-align:left; padding-left: 1.25rem; padding-top: 1.25rem"><b>{{ randomMovie?.title }}</b></h1>
        <div 
          class="mt-4 d-flex align-items-center"
          style="font-size: 15px; color: white;padding-left: 1.25rem">
          <div>⭐ {{ randomMovie?.vote_average }}</div>
          <span class="ml-1">ㆍ</span>
          <div>{{ randomMovie?.release_date }}</div>
          <span class="ml-1">ㆍ</span>
          <div v-if="randomMovie?.adult">19세 이상</div>
          <div v-else-if="!randomMovie?.adult">미성년자 관람 가능</div>
        </div>
        <div class="movie-overview mt-3" style="padding-left: 1.25rem; text-align:left;">{{ randomMovie?.overview }}</div>
      </div>
    </div>
    </div> 
  </div>
</template>

<script>
import _ from "lodash"

export default {
  name: 'RandomView',
  data() {
    return {
      randomMovie: null
    }
  },
  methods: {
    // 새로고침 하는 함수..
    randomPick() {
      this.randomMovie = _.sample(this.topMovies)
    },
    image(img) {
      return `https://image.tmdb.org/t/p/w500/${img}`
    }
  },
  computed: {
    topMovies() {
      return this.$store.state.movies
    },
  },
  watch : {
    'topMovies': {
      handler() {
        this.randomMovie = _.sample(this.topMovies)
      },
      immediate: true
    }
  }
}
</script>

<style>

.movie-container {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.movie-content {
  width : 70%;
  display: flex;
  margin : 80px auto;
  background-color: #252525;
  padding : 30px;
  box-shadow: rgba(20, 94, 243, 0.25) 0px 6px 12px -2px;
}
.movie-title {
  margin-left: 5px;
}
.movie-overview {
  /* max-width: 80%; */
  font-size: 17px;
  color: #dddddd;
}
.button {
  display: block;
  position: relative;
  width: 120px;
  margin: auto;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: #FFF;
  border-radius: 5px;
  transition: all 0.2s ;
  border : none;
}
.btnBlueGreen {
  background: #1c3ae0;
}
.btnFade.btnBlueGreen:hover {
  background: #281eb1;
}

.random-info {
  width : 100%
}

/* rgba(50,50,93,0.25) 0px 6px 12px -2px */

</style>