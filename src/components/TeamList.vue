<template>
  <Fragment>
    <PulseLoader v-if="this.isLoading" class="items-center flex loader" />

    <div class="w-full px-8 overflow" v-else-if="this.members.length > 0">
      <TeamMember v-for="member in members" v-bind:key="member.id" :member="member" />
    </div>
    <h3 v-else>No Memebers Present {{this.memebers.length}}</h3>
  </Fragment>
</template>

<script>
import TeamMember from "./TeamMember";
import { Fragment } from "vue-fragment";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { db } from "../config/firebase";
export default {
  name: "TeamList",
  components: {
    TeamMember,
    Fragment,
    PulseLoader
  },
  data() {
    return {
      members: [],
      isLoading: true
    };
  },
  mounted() {
    db.orderBy("name", "asc").onSnapshot(querySnapshot => {
      let members = [];

      querySnapshot.forEach(doc => {
        let member = doc.data();
        members.push(member);
      });
      this.members = members;
      this.isLoading = false;
    });
  }
};
</script>
<style>
.loader {
  height: 90vh;
}
.overflow {
  height: 90vh;
  overflow-y: scroll;
}
.overflow::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
  border-radius: 3px;
}
</style>
