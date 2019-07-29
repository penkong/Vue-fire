<template>
  <nav class="main-nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <h2>User Profiles</h2>
      <ul>
        <li v-for="(id, index) in userIds" :key="index">
          <router-link :to="{ name: 'ViewProfile', params: { user_id : id}}">
            <span>profile {{ id }}</span>
          </router-link>
        </li>
      </ul>
    </ul>
    <h2>nav controls</h2>
    <ul>
      <li>
        <button @click="goHome">Redirect to Home</button>
      </li>
      <li>
        <button @click="goBack">Go back</button>
      </li>
      <li>
        <button @click="goForward">Go forward</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      userIds: ["1", "2", "3", "4"]
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
a.router-link-exact-active {
  color: purple;
}
nav {
  text-align: center;
}
nav li {
  display: inline-block;
  list-style-type: none;
  margin: 2rem;
}
</style>



