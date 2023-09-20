<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar/SideBar.vue';
</script>

<template>
    <SideBar />
    <main class="main">
        <RouterView />
    </main>
</template>

<style lang="scss">
    @import './assets/sass/test.module.scss'
</style>
