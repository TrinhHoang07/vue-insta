<script setup lang="ts">
    defineProps<{
        avatar: string;
        name: string;
        time: string;
        likes: number;
        comments: number;
        data: any;
        func: Function
    }>()

    import { ref } from 'vue'
    import DotIcon from '../icons/IconDot.vue';
    import HeartIcon from '../icons/IconHeart.vue';
    import HeartIconSolid from '../icons/IconHeartSolid.vue';
    import CommentIcon from '../icons/IconComment.vue';
    import ShareIcon from '../icons/IconShare.vue';
    import SaveIcon from '../icons/IconSave.vue';
    import SaveIconSolid from '../icons/IconSaveSolid.vue';

    const isHeart = ref(true)
    const isSave = ref(true)

    const emit = defineEmits(['incrementHeart', 'restoreHeart'])

    const handleClickHeart = (checking: string) => {
        isHeart.value = !isHeart.value

        if(checking === 'plus') {
            emit('incrementHeart')
        } else {
            emit('restoreHeart')
        }
    }

</script>

<template>
    <div class="home-item-post">
        <div class="header-home-item">
            <div class="header-wrapper-info">
                <div class="avatar-preview">
                    <img :src="avatar" alt="avatar-user">
                </div>
                <h3 class="name-user">{{ name }}</h3>
                <span class="dot">.</span>
                <span class="time-post">{{ time }}</span>
            </div>
            <p @click="() => func()" class="dot-wrapper">
                <DotIcon />
            </p>
        </div>
        <div class="contents-post">
            <div class="image-post">
                <img src="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" alt="image post">
            </div>
        </div>
        <div class="actions-post">
            <div class="actions-icons">
                <div class="general-action">
                    <span @click="() => handleClickHeart('plus')" v-if="isHeart">
                        <HeartIcon />
                    </span>
                    <span @click="() => handleClickHeart('unplus')" v-else>
                        <HeartIconSolid />
                    </span>
                    <span>
                        <CommentIcon />
                    </span>
                    <span>
                        <ShareIcon />
                    </span>
                </div>
                <span @click="isSave = !isSave" v-if="isSave">
                    <SaveIcon />
                </span>
                <span @click="isSave = !isSave" v-else>
                    <SaveIconSolid />
                </span>
            </div>
            <p class="likes">{{ likes }} likes</p>
            <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur alias ratione hic provident, illo officia nisi aspernatur omnis rem debitis temporibus tempora tempore reiciendis delectus!</p>
            <p class="comments">View all {{ comments }} comments</p>
            <div class="add-comments">
                <input type="text" placeholder="Add a comment...">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .home-item-post {
        max-width: 480px;
        margin: auto;
        margin-bottom: 8px;
        padding-bottom: 16px;
        border-bottom: 1px solid #d7d7d7;

        // &:last-child {
        //     border-bottom: none;
        // }

        .header-home-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;

            .header-wrapper-info {
                display: flex;
                align-items: center;

                .avatar-preview {
                    width: 38px;
                    height: 38px;
                    display: flex;
    
                    img  {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 999px;
                    }
                }

                .name-user {
                    font-size: 1.4rem;
                    font-weight: 500;
                    color: #000;
                    margin-left: 16px;
                }

                .time-post {
                    font-size: 1.4rem;
                    color: #000;
                    opacity: 0.6;
                }

                .dot {
                    margin: 0 6px;
                    font-size: 1.8rem;
                }
            }

            .dot-wrapper {
                display: flex;
                align-items: center;
                cursor: pointer;
            }

        }

        .image-post {
            width: 100%;
            display: flex;

            img {
                width: 100%;
                object-fit: cover;
                border-radius: 6px;
            }
        }

        .actions-post {
            padding-top: 12px;

            .actions-icons {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 8px;

                .general-action {
                    span {
                        margin-right: 14px;
                    }
                }

                span {
                    cursor: pointer;
                }
            }

            .likes {
                font-size: 1.4rem;
                color: #000;
                font-weight: 600;
                user-select: none;
            }

            .description {
                font-size: 1.4rem;
                line-height: 1.4;
                font-weight: 400;
                color: #333;
                margin: 6px 0;
            }

            .comments {
                font-size: 1.4rem;
                color: #000;
                opacity: 0.6;
                cursor: pointer;
                user-select: none;
            }

            .add-comments {
                margin-top: 8px;

                input {
                    width: 100%;
                    padding: 6px 8px 6px 0;
                    outline: none;
                    border: none;
                }
            }
        }
    }
</style>