<template>
  <div>
    <div class="search-bar">
      <div class='title-text'>내가 보고싶은 영화</div>
      <div style='display:flex;align-items:center;'>
        <input v-model='inputV' type="text" placeholder="제목으로 찾아보세요.">
        <button type="button" class="btn btn-outline-secondary" @click="addMovie">담기</button>
      </div>
    </div> 
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

 input {
  border : none;
  width : 300px;
  margin-right : 10px;
  height :40px;
  border-radius: 5px;
  background-color: black;
  padding : 15px;
  font-weight: bold;
  color : white;
 }

 .search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
 }

</style>