<template>
  <div class="home">
    
    <ListaJugadores/>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ListaJugadores from '@/components/ListaJugadores'
export default {
  name: 'Home',
  components: {
    ListaJugadores
  }
}
</script>
