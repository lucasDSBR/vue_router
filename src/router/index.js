import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import NewRoute from '../views/NewRouteView.vue'
import Register from '../views/RegisterView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
	path: '/newroute',
	name:'newroute',
	component: NewRoute
  },
  {
	path: '/register',
	name:'register',
	component: Register,
	children: [
		{
			//Nested Route
			path: 'register2',
			name: 'register2',
			component: function () {
				return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
			}
		}

	]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
