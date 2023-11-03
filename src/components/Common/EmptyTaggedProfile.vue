<script setup lang="ts">

</script>

<template>
    <div class="profile-empty">
        <div class="container">
            <div class="image-camera"></div>
            <h1>Photos of you</h1>
            <p class="message">When people tag you in photos, they'll appear here.</p>
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
                background-position: -256px -269px;
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
        }
    }

</style>
