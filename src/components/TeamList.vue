<template>
  <div class="w-full px-8 overflow">
    <TeamMember
      v-for="member in teamList"
      v-bind:key="member"
      :member="member"
    />
  </div>
</template>

<script>
import TeamMember from "./TeamMember";
export default {
  name: "TeamList",
  components: {
    TeamMember
  },
  props: {
    teamList: Array
  }
};
</script>
<style>
.overflow {
  height: 90vh;
  overflow-y: scroll;
}
.overflow::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
</style>
