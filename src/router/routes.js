import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
    {   
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/home/',
                redirect: '/video'
            },
            {
                path: '/home/music',
                component: () => import('../views/Home/Music.vue')
            },
            {
                path: '/home/video',
                component: () => import('../views/Home/Video.vue')
            },
            {
                path: '/home/book',
                component: () => import('../views/Home/Book.vue')
            },
            {
                path: '/home/image',
                component: () => import('../views/Home/Image.vue')
            }
        ]
    },
    {   
        path: '/',
        component: Main,
        children: [
            {
                path: '/',
                redirect: '/video'
            },
            {
                name:'yt', 
                path: '/music',
                component: () => import('../views/Main/Music.vue')
            },
            {
                name: 'crypto',
                path: '/video',
                component: () => import('../views/Main/Video.vue')
            },
            {   
                path: '/book',
                component: () => import('../views/Main/Image.vue')
            },
            {
                name: 'simulador',
                path: '/image',
                component: () => import('../views/Main/Book.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router