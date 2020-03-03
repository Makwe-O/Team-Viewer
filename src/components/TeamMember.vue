<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg my-8 .w-full m-auto flex justify-between p-4 "
  >
    <h1 class="font-bold text-xl mb-2">{{ member.name }}</h1>
    <img src="../assets/bin.svg" alt="bin" width="25" />
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    member: Object
  }
};
</script>
