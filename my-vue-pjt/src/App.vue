<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand nav-logo" href="#">
          <img src="@/assets/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top logo">
           <div>최김박플릭스</div>
        </a>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link class="nav-link" to="/movies" style='text-decoration:none;color:white;'>Movie</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/random" style='text-decoration:none;color:white;'>Random</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/watch-list" style='text-decoration:none;color:white;'>WatchList</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <nav>
      
      
      
    </nav>
    <router-view/>
  </div>
</template>


<script>
export default ({
  created: function() {
    this.$store.dispatch('getAllMovies')
  },
})
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}



.nav-logo {
  display: flex;
}

.logo {
  width : 40px;
  height : 30px;
  margin : 0px 5px
}

</style>
