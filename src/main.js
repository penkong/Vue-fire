import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// create global filter
// from blogs
Vue.filter('snippet', val => {
  // val = post.body  -- piped to snippet from comp
  if(!val || typeof (val) != 'string') return '';
  val = val.slice(0, 50);
  return val;
});




new Vue({
  render: h => h(App),
}).$mount('#app')
