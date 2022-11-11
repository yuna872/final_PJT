<template>
  <div>
    <p>info : {{movie.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  props: {
    movie:Object
  }
}
</script>

<style>

</style>