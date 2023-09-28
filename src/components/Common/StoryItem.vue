<script setup lang="ts">
    defineProps<{
        avatar: string;
        name: string;
    }>()

</script>

<template>
    <div class="story-item">
        <div class="wrapper-avatar">
            <div class="avatar">
                <img :src="avatar" :alt="name">
            </div>
        </div>
        <p class="name-user">{{ name }}</p>
    </div>
</template>

<style scoped lang="scss">
    .story-item {
        margin-right: 16px;
        cursor: pointer;
        +.story-item {
            margin-right: 16px;
        }

        .wrapper-avatar {
            width: 58px;
            height: 58px;
            border: 3px solid #ec6846;
            border-radius: 999px;
            padding: 2px;
        }
        
        .avatar {
            display: flex;
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                border-radius: 999px;
            }
        }

        .name-user {
            font-size: 1.4rem;
            font-weight: 400;
            color: #333;
            max-width: 58px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
</style>