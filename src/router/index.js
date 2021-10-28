import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Detail from '../views/Detail.vue'

const routes = [{
        path: '/',
        name: 'MainPage',
        component: MainPage,
        props: true,
    },
    {
        path: '/Detail',
        name: 'Detail',
        component: Detail,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router