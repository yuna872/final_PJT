<template>
  <div id="app">
    <nav>
      <router-link to="/movies">Movie</router-link> |
      <router-link to="/random">Random</router-link> |
      <router-link to="/watch-list">WatchList</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>


export default ({
  // data() {
  //   return {
  //     query: '',
  //     result: ''
  //   }
  // },
  // methods: {
  //   getResult(query) {
  //     axios.get('https://api.themoviedb.org/3/search/movie?  api_key=5af9a2dad723d90711412a6322716aa7query=' + query)
  //     .then(response => { this.results = response.data.results })
  //   }
  // },
  // created: function() {
  //   axios({
  //     method: 'get',
  //     url: 'https://api.themoviedb.org/3/search/movie',


  //   })
  // }  
})
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
