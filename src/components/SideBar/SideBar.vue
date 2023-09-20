<script setup lang="ts">
import { shallowRef } from 'vue';
import SideBarItem from './SideBarItem.vue';
import image from '../../assets/images/avatar.jpg';
import HomeIcon from '../icons/IconHome.vue';
import SearchIcon from '../icons/IconSearch.vue';
import ExploreIcon from '../icons/IconExplore.vue';
import ReelsIcon from '../icons/IconReels.vue';
import LogoIcon from '../icons/IconLogo.vue';
import MoreIcon from '../icons/IconMore.vue';
import MessagesIcon from '../icons/IconMessages.vue';
import NotificationsIcon from '../icons/IconNotifications.vue';
import CreateIcon from '../icons/IconCreate.vue';
import { RouterLink, useRoute } from 'vue-router';

    const route = useRoute()
    
    const items = shallowRef<{
        id: number;
        title: string;
        path: string;
        icon: any
    }[]>([
        {
            id: 1,
            title: 'Home',
            path: '/',
            icon: HomeIcon
        },
        {
            id: 2,
            title: 'Search',
            path: '/#',
            icon: SearchIcon
        },
        {
            id: 3,
            title: 'Explore',
            path: '/explore',
            icon: ExploreIcon
        },
        {
            id: 4,
            title: 'Reels',
            path: '/reels',
            icon: ReelsIcon
        },
        {
            id: 5,
            title: 'Messages',
            path: '/messages',
            icon: MessagesIcon
        },
        {
            id: 6,
            title: 'Notifications',
            path: '/notifications',
            icon: NotificationsIcon
        },
        {
            id: 7,
            title: 'Create',
            path: '/create',
            icon: CreateIcon
        },
    ])

</script>

<template>
    <nav class="nav">
        <div>
            <RouterLink to="/" class="logo-app">
                <LogoIcon />
            </RouterLink>
            <SideBarItem v-for="item in items" :key="item.id" :title="item.title" :path="item.path">
                <component :is="item.icon"></component>
            </SideBarItem>
            <RouterLink to="/profile" class="link-nav-item" :class="{active: route.name === 'profile'}">
                <div class="nav-item">
                    <div class="profile-image">
                    <img :src="image" alt="avatar"> 
                    </div>
                    <span>Profile</span>
                </div>
            </RouterLink>
        </div>
        <RouterLink to="#" class="link-nav-item">
            <div class="nav-item">
                <MoreIcon />
                <span>More</span>
            </div>
        </RouterLink>
    </nav>
</template>

<style scoped lang="scss">

    .logo-app {
        display: block;
        padding-left: 12px;
        margin: 24px 0;
    }
    .nav {
        width: 220px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-right: 1px solid #d7d7d7;
        min-height: 100vh;
    }

    .link-nav-item {
        text-decoration: none;
        font-size: 1.6rem;
        color: #333;
    }
    
    .active {
        font-weight: bold;
        color: #000;
    }

    .nav-item {
        display: flex;
        padding: 12px;
        align-items: center;

        &:hover {
            background-color: #f2f3f5;
            border-radius: 6px;
        }

        span {
            margin-left: 16px;
        }
    }

    .profile-image {
        display: flex;

        img {
            width: 24px;
            height: 24px;
            border-radius: 999px;
        }
    }
</style>
