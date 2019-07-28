<template>
  <div>
    <Navbar />
    <h1>{{ title }}</h1>
    <!-- v-bind props -->
    <Blogs />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";

export default {
  name: "App",
  components: {
    Navbar,
    Blogs
  },
  data() {
    return {
      title: "VUEJS"
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
