import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import GMap from '@/components/Home/GMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      // guard router
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
// going to
// come from
// step next
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requireAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      next()
    } else {
      // redirect
      next({ name: 'Login' })
    }
  } else {
    // else it had not router guard.
    next()
  }
})

export default router
