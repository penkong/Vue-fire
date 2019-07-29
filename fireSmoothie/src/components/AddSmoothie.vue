<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add new Smoothie Recipe</h2>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie</label>
        <input type="text" name="title" id="title" v-model="title" />
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an Ingredient</label>
        <input type="text" name="add-ingredient" id="add-ingredient" />
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null
    };
  },
  methods: {
    AddSmoothie() {
      console.log(this.title);
    }
  }
};
</script>

<style scoped>
.add-smoothie {
  margin-top: 4rem;
  padding: 2rem;
  max-width: 600px;
}

.add-smoothie h2 {
  font-size: 2rem;
  margin: 1.5rem auto;
}

.add-smoothie .field {
  margin: 20px auto;
}
</style>