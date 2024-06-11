<template>
  <!-- {{ projects }} -->
    <main>
      <router-view></router-view>
    </main>
  
</template>

<script>
import { store } from './store';
import axios from 'axios';
  export default {
    name: 'App',
    data() {
      return {
        store,
        
      }
    },
    
}

</script>

<style lang="scss" scoped>

</style>