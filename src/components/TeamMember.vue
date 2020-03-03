<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg my-8 .w-full m-auto">
    <div class="font-bold text-xl mb-2">{{ member.name }}</div>
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
