import { createRouter, createWebHistory } from 'vue-router'
import ExploreView from '../views/ExploreView.vue'
import ReelsView from '../views/ReelsView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/explore',
            name: 'explore',
            component: ExploreView
        },
        {
            path: '/reels',
            name: 'reels',
            component: ReelsView
        },
    ]
})

export default router
