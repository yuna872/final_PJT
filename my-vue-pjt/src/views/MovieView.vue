<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'MovieView',
  created: function() {
    this.$store.dispatch('getAllMovies')
  },
}
</script>

<style>

</style>