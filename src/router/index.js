import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: { title: 'TORCH' },
    },
    {
      path: '/question',
      name: 'question',
      redirect: '/question/q1',
      component: () => import('../views/Question.vue'),
      meta: { title: 'TORCH' },
      children: [
        {
          path: '/question/q1',
          name: 'q1',
          component: () => import('../components/Q1.vue'),
          meta: { title: 'Question Page', type: 'q1' }
        },
        {
          path: '/question/q2',
          name: 'q2',
          component: () => import('../components/HelloWorld.vue'),
          meta: { title: 'Question Page', type: 'q2' }
        },
        {
          path: '/question/q3',
          name: 'q3',
          component: () => import('../components/HelloWorld.vue'),
          meta: { title: 'Question Page', type: 'q3' }
        }
      ]
    },
    {
      path: '*',
      name: 'notfound',
      component: () => import('../views/NotFound.vue'),
      meta: { title: 'Notfound' }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // 獲取視窗寬度
//   let winWidth = 0
//   if (window.innerWidth) winWidth = window.innerWidth
//   else if (document.body && document.body.clientWidth) winWidth = document.body.clientWidth
//   if (to.path !== from.path) {
//     // chrome
//     document.body.scrollTop = 0
//     // firefox
//     document.documentElement.scrollTop = 0
//     // safari
//     window.pageYOffset = 0
//   }
//   next()
// })

export default router
