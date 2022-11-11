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
    width : 300px;
    height : 400px;
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
    opacity: 0.7;
    /* color : black; */
    scale: 1.05;
  }

  .card-box:hover .info{
    /* background-color : white; */
    opacity: 1;
    color : mintcream;
    font-weight: bold;
    font-size:300%;
    transition: opacity 1.5s;
    text-align: center;
  }

</style>