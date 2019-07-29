<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// bring db from firebase/init
import db from "../firebase/init";

export default {
  name: "Index",
  data() {
    return {
      // slug is part of url
      smoothies: []
    };
  },
  methods: {
    deleteSmoothie(id) {
      // delete doc from db
      // for specific use .doc() for fetch all use .get()
      db.collection("smoothies")
        .doc(id)
        .delete()
        .then(
          () =>
            (this.smoothies = this.smoothies.filter(
              smoothie => smoothie.id !== id
            ))
        );
    }
  },
  created() {
    db.collection("smoothies")
      .get()
      // refers state of smoothie collection at current point in time
      .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.data(), doc.id);
          let smoothie = doc.data();
          smoothie.id = doc.id;
          this.smoothies.push(smoothie);
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.8rem;
  margin-top: 1rem;
}

.index h2 {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0;
}

.index .ingredients {
  margin: 30px auto;
}

.index .ingredients li {
  display: inline-block;
}
.index .delete {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.5rem;
}
</style>
