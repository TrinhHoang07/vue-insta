import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layout/DefaultLayout.vue'
import FlagmentLayout from '../layout/FlagmentLayout.vue'
import ExploreView from '../views/ExploreView.vue'
import ReelsView from '../views/ReelsView.vue'
import HomeView from '../views/HomeView.vue'
import Inbox from '../views/InboxView.vue'
import ProfileViewPost from '../views/ProfileViewPost.vue';
import ProfileViewSaved from '../views/ProfileViewSaved.vue';
import ProfileViewTagged from '../views/ProfileViewTagged.vue';
import ProfileLayout from '../layout/ProfileLayout.vue';

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
                    component: ProfileLayout,
                    name: 'profile_layout',
                    redirect: '/profile',
                    children: [
                        {
                            path: '/profile',
                            component: ProfileViewPost,
                            name: 'profile_post'
                        },
                        {
                            path: '/profile/saved',
                            component: ProfileViewSaved,
                            name: 'profile_saved'
                        },
                        {
                            path: '/profile/tagged',
                            component: ProfileViewTagged,
                            name: 'profile_tagged'
                        }
                ]
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
