<script setup lang="ts">
    import SideBar from '../components/SideBar/SideBar.vue';

    // const props = defineProps<{
    //     component: any
    // }>()
</script>

<template>
    <SideBar />
    <main class="main">
        <router-view></router-view>
    </main>
</template>

<style lang="scss">
    @import '../assets/sass/main.module.scss';
</style>
