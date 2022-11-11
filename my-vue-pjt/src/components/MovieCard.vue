<template>
  <div>
    <img :src= posterUrl alt="">
    <h4>{{ movie.title }}</h4>
    <p>{{ movie.overview }}</p>
    <br>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie:Object
  },
  computed: {
    posterUrl() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    }
  }
}
</script>

<style>

</style>