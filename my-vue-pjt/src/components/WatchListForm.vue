<template>
  <div>
    <h3>내가 보고싶은 영화</h3>
    <input v-model='inputV' type="text">
    <button @click="addMovie">담기</button>
  </div>
</template>

<script>
export default {
  name: 'WatchListForm',
  data() {
    return {
      inputV: '',
    }
  },
  methods: {
    addMovie() {
      this.$store.dispatch('addMovie',this.inputV)
    }
  }
}
</script>

<style>

</style>