<template>
  <div class='list-box'>
    <!-- {{ topMovies }} -->
    <!-- <MovieCard/> -->
    <MovieCard v-for="movie in topMovies" :key="movie.id" :movie="movie"/>
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
  }
</style>