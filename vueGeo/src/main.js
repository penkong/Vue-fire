// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// bring firebase here to let load up user on mounted
import firebase from 'firebase'

Vue.config.productionTip = false

// it will delay rendering vue app for us until load up auth
// wait for firebase init before creating app

// for not re init app every time
let app = null
firebase.auth().onAuthStateChanged(() => {
  /* eslint-disable no-new */
  // init app if not already created
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
