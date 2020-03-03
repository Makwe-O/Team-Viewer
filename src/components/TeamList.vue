<template>
  <div class="w-full px-8">
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
