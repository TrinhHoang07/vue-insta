<script setup lang="ts">
import { shallowRef, ref } from 'vue';
import SideBarIconItem from './SideBarIconItem.vue';
import image from '../../assets/images/avatar.jpg';
import HomeIcon from '../icons/IconHome.vue';
import SearchIcon from '../icons/IconSearch.vue';
import ExploreIcon from '../icons/IconExplore.vue';
import ReelsIcon from '../icons/IconReels.vue';
import LogoIcon from '../icons/IconLogoSmall.vue';
import MoreIcon from '../icons/IconMore.vue';
import MessagesIcon from '../icons/IconMessages.vue';
import NotificationsIcon from '../icons/IconNotifications.vue';
import CreateIcon from '../icons/IconCreate.vue';
import { RouterLink, useRoute } from 'vue-router';
import Search from '../Search/SearchView.vue';

    const route = useRoute()
    
    const items = shallowRef<{
        id: number;
        title: string;
        path: string;
        icon: any
    }[]>([
        // {
        //     id: 1,
        //     title: 'Home',
        //     path: '/',
        //     icon: HomeIcon
        // },
        // {
        //     id: 2,
        //     title: 'Search',
        //     path: '#',
        //     icon: SearchIcon
        // },
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
            path: '/inboxs',
            icon: MessagesIcon
        },
        // {
        //     id: 6,
        //     title: 'Notifications',
        //     path: '/notifications',
        //     icon: NotificationsIcon
        // },
        // {
        //     id: 7,
        //     title: 'Create',
        //     path: '#',
        //     icon: CreateIcon
        // },
    ])

    const isShow = ref<boolean>(false)
    const handleCloseSearch = () => {
        isShow.value = false;
    }

</script>

<template>
    <nav class="nav">
        <div>
            <RouterLink to="/" class="logo-app">
                <LogoIcon />
            </RouterLink>

            <!-- testttt -->

            <RouterLink to="/" class="link-nav-item" :class="{active: route.name === 'Home'.toLowerCase()}">
                <div class="nav-item">
                    <HomeIcon />
                </div>
            </RouterLink>

            <Search :isShow="isShow" :closeFunc="handleCloseSearch"/>

            <div @click="isShow = !isShow" class="link-nav-item">
                <div id="btn-search" class="nav-item">
                    <SearchIcon />
                </div>
            </div>
            <!-- testttt -->

            <SideBarIconItem v-for="item in items" :key="item.id" :title="item.title" :path="item.path">
                <component :is="item.icon"></component>
            </SideBarIconItem>

            <!-- test -->
            <div class="link-nav-item">
                <div class="nav-item">
                    <NotificationsIcon />
                </div>
            </div>

            <!-- test -->
            <div class="link-nav-item">
                <div class="nav-item">
                    <CreateIcon />
                </div>
            </div>
            <!-- test -->

            <RouterLink to="/profile" class="link-nav-item" :class="{active: route.name === 'profile'}">
                <div class="nav-item">
                    <div class="profile-image">
                    <img :src="image" alt="avatar"> 
                    </div>
                </div>
            </RouterLink>
        </div>
        <RouterLink to="#" class="link-nav-item">
            <div class="nav-item">
                <MoreIcon />
            </div>
        </RouterLink>
    </nav>
</template>

<style scoped lang="scss">
    .logo-app {
        display: block;
        padding-left: 12px;
        margin: 24px 0;
        color: #333;
    }
    .nav {
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-right: 1px solid #d7d7d7;
        background-color: #fff;
        z-index: 99999;
        min-height: 100vh;
        max-height: 100vh;
    }

    .link-nav-item {
        text-decoration: none;
        font-size: 1.6rem;
        color: #333;
        cursor: pointer;
        user-select: none;
    }
    
    .active {
        font-weight: bold;
        color: #000;
    }

    .nav-item {
        display: flex;
        padding: 12px;
        margin: 8px 0;
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
