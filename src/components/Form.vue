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
export default {
  name: 'Form',
  data() {
    return {
      formInput: { name: '' }
    };
  },
  methods: {
    handleSubmit() {
      this.$http
        .post('https://team-viewr.firebaseio.com/data.json', this.formInput)
        .then(response => console.log(response))
        .catch(err => console.log(err));
      this.formInput.name = '';
    }
  }
};
</script>
