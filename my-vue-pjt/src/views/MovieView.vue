<template>
  <div>
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
  created: function() {
    this.$store.dispatch('getAllMovies')
  },
  computed: {
    topMovies() {
      return this.$store.state.movies
    }
  },
}
</script>

<style>

</style>