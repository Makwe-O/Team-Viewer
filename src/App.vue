<template>
  <div id="app" class="flex mb-4">
    <div class="w-1/2 bg-gray-400 h-12">
      <TeamList :teamList="members" />
    </div>
    <div class="w-1/2 bg-gray-400 h-12">
      <Timer />
      <Form />
    </div>
  </div>
</template>

<script>
import TeamList from './components/TeamList.vue';
import Timer from './components/Timer.vue';
import Form from './components/Form.vue';
import '@/assets/css/tailwind.css';

export default {
  name: 'App',
  components: {
    TeamList,
    Timer,
    Form
  },
  data() {
    return {
      members: [],
      isLoading: true
    };
  },
  mounted() {
    this.$http
      .get('https://team-viewr.firebaseio.com/data.json')
      .then(response => response.json())
      .then(data => {
        const cleanData = [];
        for (let key in data) {
          cleanData.push(key);
        }
        console.log(cleanData);
        this.members = cleanData;
        this.isLoading = false;
      });
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
