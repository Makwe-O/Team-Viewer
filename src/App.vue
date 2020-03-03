<template>
  <div id="app" class="flex h-full mt-10">
    <div class="w-1/2  flex justify-center">
      <TeamList />
    </div>
    <div class="w-1/2 flex flex-col justify-center">
      <Timer />
      <Form />
    </div>
  </div>
</template>

<script>
import TeamList from "./components/TeamList.vue";
import Timer from "./components/Timer.vue";
import Form from "./components/Form.vue";

import "@/assets/css/tailwind.css";

export default {
  name: "App",
  components: {
    TeamList,
    Timer,
    Form
  }
};
</script>

<style>
#app {
  font-family: "Spartan", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
