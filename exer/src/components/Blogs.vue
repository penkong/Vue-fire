<template>
  <div>
    <h2>Blogs</h2>
    <input v-model="searchTerm" type="text" />
    <div v-for="post in filterPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <!-- use filters to change data ==> pipe -->
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
      posts: [],
      searchTerm: ""
    };
  },
  methods: {},
  computed: {
    filterPosts() {
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm);
      });
    }
  },
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

