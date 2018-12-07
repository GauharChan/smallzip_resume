import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ReHead from '@/components/ReHead'
// import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/rehead',
      name:'rehead',
      component:ReHead
    }
    // {
    //   path: '/main',
    //   name: 'main',
    //   component: Main
    // }
  ]
})
