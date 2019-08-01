<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="signuper">
      <h2 class="center deep-purple-text">Signup</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias" />
      </div>
      <p class="red-text center" v-if="feedback"></p>
      <div class="field center">
        <button class="btn deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import slugify from "slugify";
import db from "../../firebase/init";
export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    signuper() {
      // it save in firebase Auth db diff from normal db
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        // .doc == find doc
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "this alias already exists";
          } else {
            // firebase package do auth process here
            this.feedback = null;
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              // it give us back cred obj back
              .then(cred => {
                console.log(cred.user);
                ref.set({
                  alias: this.alias,
                  geolocation: null,
                  user_id: cred.user.uid
                });
              })
              .then(() => this.$router.push({ name: "GMap" }))
              .catch(err => {
                console.log(err);
                this.feedback = err.message;
              });
          }
        });
      } else {
        this.feedback = "You must enter all fields";
      }
    }
  }
};
</script>

<style scoped>
.signup {
  max-width: 500px;
  margin-top: 50px;
}

.signup h2 {
  font-size: 2.5rem;
}

.signup .field {
  margin-bottom: 1rem;
}
</style>