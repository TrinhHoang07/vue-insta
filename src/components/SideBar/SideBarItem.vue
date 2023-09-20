<script setup lang="ts">
defineProps<{
    title: string;
    path: string;
}>()

import { RouterLink, useRoute } from 'vue-router';
const route = useRoute()

</script>

<template>
    <RouterLink :to="$props.path" class="link-nav-item" :class="{active: route.name === $props.title.toLowerCase()}">
        <div class="nav-item">
            <slot></slot>
            <span>{{ $props.title }}</span>
        </div>
    </RouterLink>
</template>

<style scoped lang="scss">
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
        align-items: center;
        padding: 12px;

        &:hover {
            background-color: #f2f3f5;
            border-radius: 6px;
        }

        span {
            margin-left: 16px;
        }
    }
</style>
