<template>
  <div class="view-profile">
    <h2>Profile for {{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "ViewProfile",
  data() {
    return {
      userId: this.$route.params.user_id
    };
  },
  methods: {
    updateId() {
      this.userId = this.$route.params.user_id;
    }
  },
  // because on navigation useId does not updata we use watch
  watch: {
    // what we watch = value here is func name
    $route: "updateId"
  }
};
</script>

<style scoped>
</style>