<template>
  <div class="edit-smoothie container" v-if="smoothie">
    <h2>Edit {{ smoothie.title }} Smoothie</h2>
    <form @submit.prevent="EditSmoothie">
      <div class="field title">
        <label for="title">Smoothie</label>
        <input type="text" name="title" id="title" v-model="smoothie.title" />
      </div>
      <div class="field" v-for="(ing,index) in smoothie.ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]" />
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
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from "slugify";
import db from "../firebase/init";

export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null,
      another: null,
      feedback: null
    };
  },
  created() {
    let ref = db
      .collection("smoothies")
      .where("slug", "==", this.$route.params.smoothie_slug)
      .get()
      .then(snapshot =>
        snapshot.forEach(doc => {
          this.smoothie = doc.data();
          this.smoothie.id = doc.id;
        })
      );
  },
  methods: {
    addIng() {
      if (this.another) {
        this.smoothie.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value";
      }
    },
    deleteIng(ing) {
      this.smoothie.ingredients = this.ingredients.filter(
        ingredient => ingredient !== ing
      );
    },
    EditSmoothie() {
      if (this.smoothie.title) {
        this.feedback = null;
        // create a slug(url);
        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!#%\-:@]/g,
          lower: true
        });
        db.collection("smoothies")
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(err => console.log(err));
      } else {
        this.feedback = "You must enter Smoothie title";
      }
    }
  }
};
</script>

<style scoped>
.edit-smoothie {
  margin-top: 4rem;
  padding: 2rem;
  max-width: 600px;
}

.edit-smoothie h2 {
  font-size: 2rem;
  margin: 1.5rem auto;
}

.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}

.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4rem;
  cursor: pointer;
}
</style>