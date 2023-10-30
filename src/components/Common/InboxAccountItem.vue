<script setup lang="ts">

    const props = defineProps<{
        previewUrl: string;
        nameAccount: string;
        lastMessage: string;
        time: string
    }>()

</script>

<template>
    <div class="account-item">
        <div class="wrapper-image">
            <img :src="props.previewUrl" :alt="props.nameAccount">
        </div>
        <div class="info">
            <h3>{{ props.nameAccount }}</h3>
            <p>
                {{ props.lastMessage }}  ·  <span>{{ props.time }}</span>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .account-item {
        display: flex;
        align-items: center;
        padding: 12px 24px;
        cursor: pointer;

        .wrapper-image {
            width: 56px;
            height: 56px;
            display: flex;

            img {
                width: 100%;
                height: 100%;
                border-radius: 999px;
                object-fit: cover;
            }
        }

        .info {
            margin-left: 12px;

            h3 {
                font-size: 1.6rem;
                font-weight: 400;
            }

            p {
                display: flex;
                align-items: center;
                font-size: 1.4rem;
                opacity: 0.65;

                span {
                    font-size: 1.4rem;
                    opacity: 0.65;
                    margin-left: 4px;
                }
            }
        }

        &:hover {
            background-color: #f2f3f5;
        }
    }
</style>
