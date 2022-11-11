<template>
  <div>
    <p v-bind:class="{'is-canceled': movie.isCanceled}" @click='onCancel'>{{movie.info.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  props: {
    movie:Object
  },
  methods: {
    onCancel() {
      this.$store.commit('CANCEL_TOGGLE',this.movie)
    }
  }
}
</script>

<style>
.is-canceled {
  text-decoration: line-through;
}
</style>