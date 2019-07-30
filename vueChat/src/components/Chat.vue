<template>
  <div class="chat container">
    <h2 class="center teal-text">Vue Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">messages</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <input type="text" />
      </div>
    </div>
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
.chat h2 {
  font-size: 2rem;
  margin-bottom: 3rem;
}

.chat span {
  font-size: 1.2rem;
}
.chat .time {
  display: block;
  font-size: 1.2rem;
}
</style>