<template>
  <div class="noise">
  <router-view/>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return {

    }
  },
  methods: {
  } 

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* .noise {
  background-image: url(@/components/UI/img/noise.gif);
  background-size: 70px; 
  opacity: 0.1; 
  height: 100%; width: 100%; 
  position: fixed; 
  top: 0; 
  left: 0; 
  z-index: 9999; 
  pointer-events: none;
  backdrop-filter: blur(15px);
} 
*/

::-webkit-scrollbar {
  width: 0;
}



</style>
