<template>
  <div id="app">
    <router-view></router-view>
   <oban v-if="this.$store.state.is_motai"></oban>
  </div>
</template>

<script>
  import './common/css/common.css'
  import oban from './components/moban/moban'

  export default {
  name: 'app',
  components: {
      oban
  }
}

</script>

<style>
#app {
  width:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size:0.252rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin: 0;
  padding: 0;
}
</style>
