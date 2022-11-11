<template>
  <div class="card-box" :style="{'backgroundImage':`url(${posterUrl})`}">
    <div class='info'>{{ movie.title }}</div>
    <!-- <div>{{ movie.overview }}</div> -->
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
  .card-box {
    /* border : solid 2px red; */
    width : 200px;
    height : 300px;
    border-radius : 15px;
    background-size : cover;
    margin : 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info {
    opacity: 0;
  }

  .card-box:hover{
    background-color : white;
    opacity: 0.5;
    /* color : black; */
    scale: 1.05;
  }

  .card-box:hover .info{
    /* background-color : white; */
    opacity: 1;
    color : black;
  }

</style>