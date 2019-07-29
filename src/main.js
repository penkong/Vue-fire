import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'


Vue.use(VueRouter);
//router is for programmatically navigation
//we need it inside action to make it work use export
// export goes to finalize login
export const router = new VueRouter({
  //cause use browserRouter rather than hashRouter because of api
  mode: 'history', 
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


// create global filter
// from blogs
// Vue.filter('snippet', val => {
//   // val = post.body  -- piped to snippet from comp
//   if(!val || typeof (val) != 'string') return '';
//   val = val.slice(0, 50);
//   return val;
// });