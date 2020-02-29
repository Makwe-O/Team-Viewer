<template>
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
  >
    Hi {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Maks'
    };
  }
};
</script>
