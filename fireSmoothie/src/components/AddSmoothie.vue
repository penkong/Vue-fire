<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add new Smoothie Recipe</h2>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie</label>
        <input type="text" name="title" id="title" v-model="title" />
      </div>
      <div class="field" v-for="(ing,index) in ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="ingredients[index]" />
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an Ingredient</label>
        <input
          type="text"
          name="add-ingredient"
          id="add-ingredient"
          @keydown.tab.prevent="addIng"
          v-model="another"
        />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from "slugify";
import db from "../firebase/init";
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null
    };
  },
  methods: {
    AddSmoothie() {
      if (this.title) {
        this.feedback = null;
        // create a slug(url);
        this.slug = slugify(this.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!#%\-:@]/g,
          lower: true
        });
        db.collection("smoothies")
          .add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(err => console.log(err));
      } else {
        this.feedback = "You must enter Smoothie title";
      }
    },
    addIng() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value";
      }
    },
    deleteIng(ing) {
      this.ingredients = this.ingredients.filter(
        ingredient => ingredient !== ing
      );
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
  position: relative;
}

.add-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4rem;
  cursor: pointer;
}
</style>