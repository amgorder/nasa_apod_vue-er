<template>
<div class="app">

<header class="container-fluid bg-dark text-light">
  <div class="row">
    <div class="col">
      <h1>Lets see what the <img alt="Vue logo" src="./assets/logo.png">iew is like out there in Space!</h1>
    </div>
  </div>
</header>

<main class="container">
  <div class="row">
    <div class="col">

    
  <button type="submit" class="btn btn-dark m-2" @click="getSpaceInfo()">Launch</button>
    </div>
  </div>

<div class="row">
  <div class="col">

<!-- NOTE place image here -->
    <space-images />
    

  </div>
</div>

</main>
</div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from './AppState'
import { spaceImageService} from './services/SpaceImageService'
import SpaceImages from './components/SpaceImages.vue'

export default {
  
  name: 'App',
setup() {
  const state = reactive({
    space: computed(()=> AppState.spaceImages)
  })

  return {
    state,
    getSpaceInfo(){
    spaceImageService.getSpaceObject()

    }
      
    }
  },

components:{
SpaceImages
}
}
 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
