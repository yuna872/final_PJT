<template>
  <div>
    <WatchListForm/>
    <WatchListItem v-for='movie in myMovies' :key='movie.id' :movie="movie"/>
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm'
import WatchListItem from '@/components/WatchListItem'

export default {
  name: 'WatchListView',
  components: {
    WatchListForm,
    WatchListItem,
  },
  computed: {
    myMovies() {
      return this.$store.state.myMovies
    }
  },
}
</script>

<style>

</style>