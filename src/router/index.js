import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'MainPage',
        component: MainPage
    }, {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router