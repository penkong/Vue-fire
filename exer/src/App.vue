<template>
  <div>
    <Navbar />
    <h1>{{ title }}</h1>
    <!-- v-bind props -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return { title: "VUEJS" };
  },
  methods: {}
};
</script>

<style scoped>
</style>
