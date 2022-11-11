<template>
<div class='container1'>
  <div class='title-text'>HOT! 인기영화</div>
  <div class='list-box'>
    <!-- {{ topMovies }} -->
    <!-- <MovieCard/> -->
    <MovieCard v-for="movie in topMovies" :key="movie.id" :movie="movie"/>
  </div>
</div>
  
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  name: 'MovieView',
  components : {
    MovieCard
  },
  computed: {
    topMovies() {
      return this.$store.state.movies
    }
  },
}
</script>

<style>
  .list-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin : auto;
    /* border : solid 2px red; */
  }

  .container1 {
    display: flex;
    flex-direction: column;
    margin : auto;
    width : 80%;
  }

  .title-text {
    color : white;
    font-weight: bold;
    font-size : 25px;
  }
</style>