<template>
  <div>
    <button @click="randomPick">pick</button>
    <br>
    {{ randomMovie?.title }}
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
    }
  },
  computed: {
    topMovies() {
      return this.$store.state.movies
    }
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

</style>