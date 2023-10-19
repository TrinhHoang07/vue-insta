<script setup lang="ts">

    // const props = defineProps<{
        
    // }>()

</script>

<template>
    <div class="comment-item">
        <div class="avatar-user">
            <img src="../../assets/images/avatar.jpg" alt="avatar-user">
        </div>
        <div class="contents">
            <div class="comment-text">
                <p> 
                    <span>hoang.0702</span>
                    Noi dung comment: yeu Thsuyyyy cute
                </p>
            </div>
            <p class="date-time">
                <span>2d</span>
                <span>Reply</span>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .comment-item {
        display: flex;
        margin-bottom: 14px;

        &:last-child {
            margin-bottom: 0;
        }
        // align-items: center;

        .avatar-user {
            width: 38px;
            height: 38px;
            display: flex;
            flex-shrink: 0;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
                border-radius: 999px;
            }
        }

        .contents {
            margin-left: 16px;
            .comment-text {
                display: flex;
                align-items: center;

                p {
                    font-size: 1.4rem;
                    color: #333;
                    margin-left: 8px;

                    span {
                        font-size: 1.4rem;
                        font-weight: 500;
                        color: #000;
                        cursor: pointer;
                    }
                }
            }

            .date-time {
                span {
                    font-size: 1.2rem;
                    color: #333;
                    font-weight: 500;
                    opacity: 0.88;
                    cursor: pointer;

                    &:last-child {
                        margin-left: 12px;
                    }
                }
            }
        }
    }
</style>
