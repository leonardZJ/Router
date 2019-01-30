import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/news.vue'
import Massages from '../views/massages.vue'
import MassagesDetail from '../views/MassagesDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/home',
      component: Home,
      children: [
      	{
      	  path: '/home/news',
      	  component: News
      	},
      	{
      	  path: '',
      	  redirect: '/home/news'
      	},
      	{
      	  path: '/home/massages',
      	  component: Massages,
      	  children: [
      	  	{
      	  		path: '/home/massages/detail/:id',
      	  		component: MassagesDetail
      	  	}
      	  ]
      	},
      ]
    },
  ]
})
