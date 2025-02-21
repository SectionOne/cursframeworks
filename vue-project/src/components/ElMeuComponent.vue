<template>
    <div class="mi-componente">
      <h1>{{ titol }}</h1>
      <p>{{ missatge }}</p>
      <button @click="canviarMissatge">Canvia el missatge</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MiComponente', // Nom del component
    data() {
      return {
        titol: 'Benvingut al meu component!',
        missatge: 'Aquest és un component bàsic de Vue.'
      };
    },
    methods: {
      canviarMissatge() {
        this.missatge = 'Has canviat el missatge!';
      }
    }
  };
  </script>
  
  <style scoped>
  .mi-componente {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    text-align: center;
  }
  
  h1 {
    color: #42b983;
  }
  </style>