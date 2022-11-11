<template>
  <div class='container3'>
    <div>
      <WatchListForm/>
    </div>
    <div class='watch-box'>
      <WatchListItem v-for='movie in myMovies' :key='movie.info.id' :movie="movie"/>
    </div>
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

  .container3 {
    width : 80%;
    margin : auto;
  }

  .watch-box {
    margin-top : 40px;
  }

</style>