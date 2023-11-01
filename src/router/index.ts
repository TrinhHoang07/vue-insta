import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layout/DefaultLayout.vue'
import FlagmentLayout from '../layout/FlagmentLayout.vue'
import ExploreView from '../views/ExploreView.vue'
import ReelsView from '../views/ReelsView.vue'
import HomeView from '../views/HomeView.vue'
import Inbox from '../views/InboxView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'defaultLayout',
            component: DefaultLayout,
            redirect: '/',
            children: [
                {
                    path: '/',
                    component: HomeView,
                    name: 'home'
                },
                {
                    path: '/explore',
                    component: ExploreView,
                    name: 'explore'
                },
                {
                    path: '/reels',
                    component: ReelsView,
                    name: 'reels'
                },
                {
                    path: '/profile',
                    component: ProfileView,
                    name: 'profile'
                }
            ]
        },
        {
            path: '/inbox',
            name: 'flagmentLayout',
            component: FlagmentLayout,
            redirect: '/inbox',
            children: [
                {
                    path: '/inboxs/:id?',
                    component: Inbox,
                    name: 'inbox'
                },
            ]
        }
    ]
})

export default router
