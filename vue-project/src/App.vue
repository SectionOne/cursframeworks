<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MiComponente />
  </div>
</template>

<script>
import MiComponente from './components/ElMeuComponent.vue'; // Importa el component

export default {
  name: 'App',
  components: {
    MiComponente // Registra el component
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>