<script setup lang="ts">

</script>

<template>
    <div class="profile-empty">
        <div class="collections">
            <p class="warn">Only you can see what you've saved</p>
            <p class="add-collection">
                + New Collection
            </p>
        </div>
        <div class="container">
            <div class="image-camera"></div>
            <h1>Save</h1>
            <p class="message">Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .profile-empty {
        display: flex;
        padding-top: 32px;
        width: 100%;
        flex-direction: column;

        .collections {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 64px;

            .warn {
                font-size: 1.2rem;
                color: #333;
                opacity: 0.75;
                font-weight: 400;
            }

            .add-collection {
                font-size: 1.4rem;
                color: #0095F6;
                font-weight: 500;
                user-select: none;
                cursor: pointer;
            }
        }

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
                background-position: -192px -269px;
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
                max-width: 350px;
            }
        }
    }

</style>
