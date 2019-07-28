<template>
  <div>
    <h2>{{ blogTitle }}</h2>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>


<script>
export default {
  name: "Blogs",
  data() {
    return {
      blogTitle: "blogs"
    };
  },
  methods: {
    changeTitle() {
      this.blogTitle = "Amazing Blog Site";
    }
  },
  beforeCreate() {
    alert("beforeCreate hook");
  },
  created() {
    alert("created hook");
  },
  beforeUpdate() {
    alert("beforeUpdate Hook");
  }
};
</script>

<style scoped>
</style>

