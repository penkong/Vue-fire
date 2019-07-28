<template>
  <div>
    <h2>Blogs</h2>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <!-- use filters to change data -->
      <p>{{ post.body | snippet }}</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      posts: []
    };
  },
  methods: {},
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(res => {
        console.log(res);
        this.posts = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
</style>

