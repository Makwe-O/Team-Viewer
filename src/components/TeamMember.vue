<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg sm:my-8 my-2 .w-full m-auto flex justify-between p-4 hover:scale-x-150 hover:bg-white grow"
  >
    <h1 class="sm:text-xl text-md mb-2">{{ member.name }}</h1>
    <button @click="onDelete">
      <img src="../assets/bin.svg" alt="bin" width="25" />
    </button>
  </div>
</template>

<script>
import { db } from "../config/firebase";
export default {
  name: "TeamMember",
  props: {
    member: Object
  },
  methods: {
    onDelete() {
      db.doc(this.member.id)
        .delete()
        .then(() =>
          this.$toasted.show(`${this.member.name} deleted successfully`, {
            theme: "toasted-primary",
            position: "top-center",
            duration: 4000
          })
        )
        .catch(err => {
          this.$toasted.show(`An error occured ${err}`, {
            theme: "toasted-primary",
            position: "top-center",
            duration: 4000
          });
        });
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: left;
}
.grow {
  transition: all 0.4s ease-in-out;
}
.grow:hover {
  transform: scale(1.1);
}
</style>