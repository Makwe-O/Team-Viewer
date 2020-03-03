<template>
  <form class="w-full max-w-sm" @submit.prevent="handleSubmit">
    <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
      <input
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Jane Doe"
        aria-label="Full name"
        v-model="formInput.name"
      />
      <button
        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="submit"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script>
import { db } from "../config/firebase";

export default {
  name: "Form",
  data() {
    return {
      formInput: { name: "" }
    };
  },
  methods: {
    handleSubmit() {
      if (this.formInput !== "") {
        db.add(this.formInput)
          .then(
            this.$toasted.show(`${this.formInput.name} added successfully`, {
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
  }
};
</script>
