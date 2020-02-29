<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TeamList />
  </div>
</template>

<script>
import TeamList from './components/TeamList.vue';
import '@/assets/css/tailwind.css';

export default {
  name: 'App',
  components: {
    TeamList
  }
};
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
