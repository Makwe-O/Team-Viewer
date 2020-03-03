<template>
  <div id="app" class="flex h-full mt-10">
    <div class="w-1/2  flex justify-center">
      <TeamList :teamList="members" />
    </div>
    <div class="w-1/2 h-12">
      <Timer />
      <Form />
    </div>
  </div>
</template>

<script>
import TeamList from "./components/TeamList.vue";
import Timer from "./components/Timer.vue";
import Form from "./components/Form.vue";
import { db } from "./config/firebase";
import "@/assets/css/tailwind.css";

export default {
  name: "App",
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
    // db.get().then(snapshot => console.log(snapshot));

    db.onSnapshot(querySnapshot => {
      let members = [];

      querySnapshot.forEach(doc => {
        let member = doc.data();
        members.push(member);
      });
      this.members = members;
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
}
</style>
