<script setup lang="ts">
defineProps<{
    avatar: string;
    name: string;
    subName: string;
}>()

</script>

<template>
    <div class="acc-item">
        <div class="item-info">
            <div class="image-user">
                <img :src="avatar" alt="avatar-user">
            </div>
            <div class="name-user">
                <p class="short">{{ name }}</p>
                <p class="real">{{ subName }}</p>
            </div>
        </div>
        <p class="change-user">Switch</p>
    </div>
</template>

<style scoped lang="scss">
    .acc-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 16px;

        .item-info {
            display: flex;
            align-items: center;
        }

        .image-user {
            width: 36px;
            height: 36px;
            display: flex;

            img {
                width: 100%;
                height: 100%;
                border-radius: 999px;
                object-fit: cover;
            }
        }
        .name-user {
            margin-left: 16px;
            font-size: 1.4rem;

            .short {
                font-weight: bold;
                color: #000;
            }
        }
        .change-user {
            font-size: 1.2rem;
            cursor: pointer;
            font-weight: bold;
            color: #0095F6;
            user-select: none;

            &:hover {
                opacity: 0.88;
            }
        }
    }
</style>
