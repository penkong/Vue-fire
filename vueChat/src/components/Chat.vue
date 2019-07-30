<template>
  <div>
    <h2>chat {{ this.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>