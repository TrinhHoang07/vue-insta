<script setup lang="ts">
    defineProps<{
        handleClose: Function
    }>()

    import {ref} from 'vue'
    import ActionFixed from './ActionFixed.vue';
    import IconCloseBig from '../icons/IconCloseBig.vue';
    import IconMoreStory from '../icons/IconMoreStory.vue';
    import IconChevLeft from '../icons/IconChevLeft.vue';
    import IconChevRight from '../icons/IconChevRight.vue';
    import HeartIcon from '../icons/IconHeart.vue';
    import HeartIconSolid from '../icons/IconHeartSolid.vue';
    import CommentIcon from '../icons/IconComment.vue';
    import ShareIcon from '../icons/IconShare.vue';
    import SaveIcon from '../icons/IconSave.vue';
    import SaveIconSolid from '../icons/IconSaveSolid.vue';
    import CommentItem from '../Common/CommentItem.vue';

    const isMore = ref<boolean>(false)
    const isHeart = ref(true)
    const isSave = ref(true)
    const value = ref<string>('')

    const handleOpenMore = () => {
        isMore.value = true;
    }

    const handleCloseMore = () => {
        isMore.value = false;
    }
</script>

<template>
    <Transition>
        <div class="explore-preview">
            <ActionFixed 
                :is-open="isMore"
                :handle-close="handleCloseMore"
                :items="[
                    {id: 1, title: 'Report', isActive: true}, 
                    {id: 1, title: 'Go to post', isActive: false}, 
                    {id: 1, title: 'Share to...', isActive: false},
                    {id: 1, title: 'Copy link', isActive: false},
                    {id: 1, title: 'Embed', isActive: false},
                    {id: 1, title: 'About this account', isActive: false},
                ]"
            />
            <div @click="() => handleClose()" class="close-icon">
                <IconCloseBig />
            </div>
            <div class="icon-left">
                <IconChevLeft />
            </div>
            <div class="icon-right">
                <IconChevRight />
            </div>
            <section class="container">
                <div class="main-contents">
                    <div class="icon-left">
                        <IconChevLeft />
                    </div>
                    <div class="icon-right">
                        <IconChevRight />
                    </div>
                </div>
                <div class="action-infos">
                    <div class="info-header">
                        <div class="info-user">
                            <div class="avatar">
                                <img src="../../assets/images/avatar.jpg" alt="avatar user">
                            </div>
                            <h6>thsuyyy cute .</h6>
                            <span>Follow</span>
                        </div>
                        <span @click="handleOpenMore" class="more-icon">
                            <IconMoreStory />
                        </span>
                    </div>
                    <div class="list-comments">
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                    </div>
                    <div class="info-footer">
                        <div class="actions-icons">
                            <div class="general-action">
                                <span @click="isHeart = !isHeart" v-if="isHeart">
                                    <HeartIcon />
                                </span>
                                <span @click="isHeart = !isHeart" v-else>
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
                        <div class="reaction-count">
                            <h6>2,715 likes</h6>
                            <p>1 day ago</p>
                        </div>
                        <div class="add-comment">
                            <input v-model="value" type="text" placeholder="Add a comment...">
                            <span :style="value.trim().length > 0 ? 'opacity: 1' : 'opacity: 0.45'">Post</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Transition>
</template>

<style scoped lang="scss">

// transition css
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

////////
    .explore-preview {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        z-index: 99999999;
        .close-icon {
            position: absolute;
            cursor: pointer;
            user-select: none;
            right: 24px;
            top: 24px;
        }

        .icon-left, .icon-right {
            position: absolute;
            cursor: pointer;
            user-select: none;
            width: 36px;
            height: 36px;
            background-color: #fff;
            border-radius: 999px;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.75;

            &:hover {
                opacity: 1;
            }
        }

        .icon-left {
            top: 50%;
            transform: translateY(-50%);
            left: 12px;
        }

        .icon-right {
            top: 50%;
            transform: translateY(-50%);
            right: 12px;
        }

        .container {
            margin: auto;
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100vh;
            padding: 24px 0;

            .main-contents {
                max-width: 880px;
                width: 700px;
                // background-color: orange;
                background-image: url('../../assets/images/cute.jpg');
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                position: relative;

                .icon-left, .icon-right {
                    width: 28px;
                    height: 28px;
                }
            }

            .action-infos {
                flex-grow: 1;
                flex-shrink: 0;
                max-width: 500px;
                min-width: 405px;
                background-color: #ffffff;
                border-radius: 0 4px 4px 0;
                display: flex;
                flex-direction: column;

                .info-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px;
                    border-bottom: 1px solid #ebedf1;

                    .info-user {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .avatar {
                            width: 42px;
                            height: 42px;
                            display: flex;
    
                            img {
                                width: 100%;
                                height: 100%;
                                border-radius: 999px;
                            }
                        }

                        h6 {
                            font-size: 1.4rem;
                            color: #333;
                            font-weight: 500;
                            margin-left: 16px;
                            user-select: none;
                            cursor: pointer;

                            &:hover {
                                opacity: 0.75;
                            }
                        }

                        span {
                            margin-left: 2px;
                            font-weight: 500;
                            font-size: 1.4rem;
                            color: #0095F6;
                            cursor: pointer;
                            user-select: none;

                            &:hover {
                                opacity: 0.75;
                            }
                        }
                    }

                    .more-icon {
                        font-size: 1.4rem;
                        cursor: pointer;
                        user-select: none;

                        svg {
                            fill: #333;
                        }
                    }
                }

                .list-comments {
                    padding: 14px;
                    flex: 1;
                    overflow: auto;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }

                .info-footer {
                    border-top: 1px solid #d7d7d7;
                    .actions-icons {
                        padding: 14px;
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

                    .reaction-count {
                        margin-left: 14px;
                        h6 {
                            font-weight: 500;
                            font-size: 1.5rem;
                        }
                        p {
                            font-size: 1rem;
                            text-transform: uppercase;
                            color: #333;
                            opacity: 0.75;
                        }
                    }

                    .add-comment {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-top: 1px solid #d7d7d7;
                        margin-top: 16px;
                        padding: 0 14px;

                        input {
                            padding: 16px 0;
                            flex: 1;
                            border: none;
                            outline: none;
                        }

                        span {
                            color: #0095F6;
                            font-size: 1.4rem;
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }
</style>