<script setup lang="ts">

</script>

<template>
    <div class="profile-empty">
        <div class="container">
            <div class="image-camera"></div>
            <h1>Share Photos</h1>
            <p class="message">When you share photos, they will appear on your profile.</p>
            <p class="add-post">Share your first photo</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .profile-empty {
        display: flex;
        padding-top: 86px;
        width: 100%;

        .container {
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;

            .image-camera {
                background-image: url('../../assets/images/common.png');
                width: 62px;
                height: 62px;
                background-repeat: no-repeat;
                background-position: -128px -269px;
            }

            h1 {
                font-size: 3rem;
                margin-top: 14px;
                font-weight: bold;
                color: #000;
            }

            .message {
                margin: 8px 0;
                font-size: 1.4rem;
                color: #333;
            }

            .add-post {
                color: #0095F6;
                font-size: 1.4rem;
                font-weight: 500;
                user-select: none;

                &:hover {
                    opacity: 0.75;
                    cursor: pointer;
                }
            }
        }
    }

</style>
