<template>
  <nav>
    <ul>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">Home</a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">About</a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
nav {
  text-align: center;
}
nav ul {
  padding: 0;
}

nav li {
  display: inline-block;
  list-style-type: none;
  margin: 2rem;
}
</style>



