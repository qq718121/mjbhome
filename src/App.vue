<template>
     <div id="app">
          <router-view></router-view>
          <oban v-if="this.$store.state.is_motai"></oban>
          <Hint :h="true" :t="this.ist" v-if="this.hint" />
     </div>
</template>

<script>
import './common/css/common.css'
import oban from './components/moban/moban'
import Hint from './components/common/hint'
import { mapState } from 'vuex'

export default {
     name: 'app',
     components: {
          oban,
          Hint
     },

     computed: mapState({
          // 箭头函数可使代码更简练
          hint: state => state.hint,
          ist: state => state.ist
     })
}

</script>

<style>
#app {
      width: 100%;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      font-size: 0.252rem;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #000;
      margin: 0;
      padding: 0;
}
</style>
