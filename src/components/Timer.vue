<template>
  <Fragment>
    <div v-if="!this.setTime">
      <form class="rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >Set Time In Minuites</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            placeholder="Enter time in muites. e.g 1"
            v-model="time"
          />
          <button
            @click="startTimer"
            type="submit"
            class="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded mt-4"
          >Begin</button>
        </div>
      </form>
    </div>
    <div v-else>
      <h1 class="timer">
        {{ minuite.toLocaleString(undefined, { minimumIntegerDigits: 2 }) }}:{{
        second.toLocaleString(undefined, { minimumIntegerDigits: 2 })
        }}
      </h1>
      <div>
        <button class="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded mx-2 my-1">Start</button>
        <button class="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded mx-2 my-1">Pause</button>
        <button class="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded mx-2 my-1">Reset</button>
        <button
          @click="handSetNewTime"
          class="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded mx-2"
        >Set Time</button>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "Timer",
  components: {
    Fragment
  },
  data() {
    return {
      setTime: false,
      time: null,
      minuite: 0,
      second: 0
    };
  },
  methods: {
    setupCountdown() {
      let secondConverter = Number(this.time) * 60;
      this.minuite = Math.floor(secondConverter / 60);
      this.second = secondConverter - this.minuite * 60;
    },
    handleSubmit() {
      if (Number(this.time) <= 0) {
        this.$toasted.show(`Please add a number greater than 1`, {
          theme: "toasted-primary",
          position: "top-center",
          duration: 4000
        });
      } else {
        this.setTime = true;
        this.setupCountdown();
      }
    },
    handSetNewTime() {
      this.setTime = false;
    },
    startTimer() {
      console.log("start");
    },
    pauseTimer() {
      console.log("pause");
    }
  }
};
</script>

<style scoped>
.timer {
  font-size: 4em;
  font-family: "Roboto Mono", monospace;
}
</style>
