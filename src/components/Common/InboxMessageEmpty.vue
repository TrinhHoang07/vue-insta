
<script setup lang="ts">
import IconMessagesBig from '../icons/IconMessagesBig.vue';

</script>



<template>
    <div class="empty-message">
        <div>
            <IconMessagesBig />
        </div>
        <h2>Your messages</h2>
        <p>Send private photos and messages to a friend or group</p>
        <button>Send message</button>
    </div>
</template>

<style lang="scss" scoped>
    .empty-message {
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1.4rem;
            color: #333;
            opacity: 0.65;
            padding: 4px;
        }

        button {
            margin-top: 8px;
            padding: 10px 16px;
            color: #fff;
            background-color: #0095f6;
            border-radius: 8px;
            font-size: 1.2rem;
            font-weight: bold;
            border: none;
            cursor: pointer;

            &:hover {
                background-color: #1877f2;
            }
        }
    }
</style>