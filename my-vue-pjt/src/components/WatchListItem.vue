<template>
  <div class="mymovie" @click='onCancel' >
    <div>
      <img class='mymovie-img' :src="posterUrl" alt="">
    </div>
    <div class='mymovie-info'>
      <div class='mymovie-title' v-bind:class="{'is-canceled': movie.isCanceled}">{{ movie.info.title }} {{ cancel }}</div>
      <div>줄거리 : {{ overView }}</div>
      <div>⭐ {{ movie.info.vote_average }}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  data() {
    return {
      cancel:''
    }
  },
  props: {
    movie:Object
  },
  methods: {
    onCancel() {
      this.$store.commit('CANCEL_TOGGLE',this.movie)
      if (this.movie.isCanceled) {
        this.cancel = '이미 본 영화입니다'
      } else {
        this.cancel = ''
      }
    }
  },
  computed: {
    posterUrl() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.info.poster_path}`
    },
    overView() {
      return this.movie.info.overview.slice(0, 140) + "..."
    }
  }
}
</script>

<style>
.is-canceled {
  text-decoration: line-through;
}

.mymovie {
  /* border : solid 2px white; */
  color : white;
  display: flex;
  margin-top : 80px;
  background-color: #252525;
  width : 80%;
  margin : auto;
  margin-bottom: 80px;
  box-shadow: rgba(20, 94, 243, 0.25) 0px 6px 12px -2px;
}

.mymovie-title {
  font-size : 30px;
  font-weight : bold;
}

.mymovie-img {
  width : 200px;
  height: 300px;
  margin-right : 50px;
  border-radius: 15px;
}

.mymovie-info {
  padding : 30px;
  font-size: 25px;
}

</style>