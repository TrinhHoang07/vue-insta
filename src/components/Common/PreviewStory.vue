<script setup lang="ts">
    defineProps<{
        handleClose: Function
    }>()

    import {ref} from 'vue'
    import { RouterLink } from 'vue-router';
    import ActionFixed from './ActionFixed.vue';
    import IconCloseBig from '../icons/IconCloseBig.vue';
    import IconRight from '../icons/IconChevRight.vue';
    import IconLeft from '../icons/IconChevLeft.vue';
    import IconPlay from '../icons/IconPlay.vue';
    import IconMute from '../icons/IconMute.vue';
    import IconVolume from '../icons/IconVolume.vue';
    import IconPause from '../icons/IconPause.vue';
    import IconMoreStory from '../icons/IconMoreStory.vue';

    const isPlaying = ref<boolean>(true)
    const isMute = ref<boolean>(true)
    const isMore = ref<boolean>(false)

    const handleOpenMore = () => {
        isMore.value = true;
    }

    const handleCloseMore = () => {
        isMore.value = false;
    }

    const handlePlaying = () => {
        isPlaying.value = !isPlaying.value;

        // handle logic here
    }

    const handleMute = () => {
        isMute.value = !isMute.value;

        // handle logic here
    }
</script>

<template>
    <Transition>
        <div class="story-page">
            <ActionFixed 
                :is-open="isMore"
                :handle-close="handleCloseMore"
                :items="[
                    {id: 1, title: 'Report Inappropriate', isActive: true},
                    {id: 2, title: 'About this account', isActive: false},
                ]"
            />
            <RouterLink to="/">
                <div class="logo-ins"></div>
            </RouterLink>
            <div @click="() => handleClose()" class="close-icon">
                <IconCloseBig />
            </div>
            <section class="preview-story">
                <div class="story-container">
                    <div class="story-side">
                        <div>
                            <img src="https://nhadepso.com/wp-content/uploads/2023/03/loa-mat-voi-101-hinh-anh-avatar-meo-cute-dang-yeu-dep-mat_1.jpg" alt="avatar">
                        </div>
                        <h3>Thsuy cute</h3>
                    </div>
                    <div class="story-main">

                        <div class="right-icon icon-control">
                            <IconRight />
                        </div>
                        <div class="left-icon icon-control">
                            <IconLeft />
                        </div>

                        <div class="main-contents">
                            <div class="main-container">
                                <div class="count-story">
                                    <div class="item-count">
                                        <div class="item-under">
                                            <div class="item-up-process"></div>
                                        </div>
                                    </div>
                                    <div class="item-count">
                                        <div class="item-under">
                                            <div class="item-up-process"></div>
                                        </div>
                                    </div>
                                    <div class="item-count">
                                        <div class="item-under">
                                            <div class="item-up-process"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-info-story">
                                    <div class="user-info">
                                        <div class="user-avatar">
                                            <img src="https://nhadepso.com/wp-content/uploads/2023/02/tong-hop-65-hinh-nen-meo-cute-dang-yeu-de-thuong-kho-cuong_2.jpg" alt="user avatar">
                                        </div>
                                        <RouterLink class="profile-link" to="/profile/__hoang.0702">
                                            <h6>__hoang.0702</h6>
                                        </RouterLink>
                                        <span>22h</span>
                                    </div>
                                    <div class="actions">
                                        <span @click="handlePlaying" v-if="isPlaying">
                                            <IconPlay />
                                        </span>
                                        <span @click="handlePlaying" v-else>
                                            <IconPause />
                                        </span>
                                        <span @click="handleMute" v-if="isMute">
                                            <IconMute />
                                        </span>
                                        <span @click="handleMute" v-else>
                                            <IconVolume/>
                                        </span>
                                        <span @click="handleOpenMore"><IconMoreStory /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="story-side">
                        <div>
                            <img src="https://nhadepso.com/wp-content/uploads/2023/03/loa-mat-voi-101-hinh-anh-avatar-meo-cute-dang-yeu-dep-mat_1.jpg" alt="avatar">
                        </div>
                        <h3>Thsuy cute</h3>
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
    .story-page {
        position: fixed;
        inset: 0;
        background-color: #222;
        display: flex;
        z-index: 99999999;

        .logo-ins {
            position: absolute;
            top: 16px;
            left: 16px;
            background-image: url('https://static.cdninstagram.com/rsrc.php/v3/yR/r/se2xF0jIikF.png'); 
            background-position: 0px 0px; 
            background-size: auto; 
            width: 103px; 
            height: 29px; 
            background-repeat: no-repeat; 
            display: inline-block;
        }

        .close-icon {
            position: absolute;
            cursor: pointer;
            user-select: none;
            right: 24px;
            top: 24px;
        }

        .preview-story {
            margin: auto;
            width: 100%;

            .story-container {
                display: flex;
                align-items: center;
                justify-content: center;

                .story-main {
                    width: 500px;
                    color: #fff;
                    height: 100vh;
                    padding: 16px 0;
                    margin: 0 96px;
                    position: relative;

                    .icon-control {
                        width: 32px;
                        height: 32px;
                        background-color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 999px;
                        cursor: pointer;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        opacity: 0.65;

                        &:hover {
                            opacity: 1;
                        }
                    }

                    .right-icon {
                        right: -48px;
                    }

                    .left-icon {
                        left: -48px;
                    }
                    
                    .main-contents {
                        background-color: #000;
                        height: 100%;
                        text-align: center;
                        background-image: url('https://images2.thanhnien.vn/Uploaded/duyphuc/2022_09_03/hinh-42-9047.jpg');
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;

                        .main-container {
                            padding: 16px;
                            .count-story {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin: 0 -2px;
    
                                .item-count {
                                    flex: 1;
                                    margin: 0 2px;
    
                                    .item-under {
                                        height: 3px;
                                        background-color: rgba(255, 255, 255, .35);
                                        width: 100%;
                                        border-radius: 16px;
                                        position: relative;
    
                                        .item-up-process {
                                            position: absolute;
                                            inset: 0;
                                            background-color: #fff;
                                            border-radius: 16px;
                                            width: 55%;
                                        }
                                    }
                                }
                            }

                            .main-info-story {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-top: 12px;


                                .user-info {
                                    display: flex;
                                    align-items: center;

                                    .profile-link {
                                        color: #fff;
                                        text-decoration: none;
                                    }

                                    h6 {
                                        font-size: 1.5rem;
                                        font-weight: 500;
                                        margin-left: 12px;
                                    }

                                    span {
                                        font-size: 1.4rem;
                                        margin-left: 12px;
                                        opacity: 0.75;
                                        font-weight: 500;
                                    }

                                    .user-avatar {
                                        width: 36px;
                                        height: 36px;
                                        display: flex;

                                        img {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                            border-radius: 999px;                                      
                                        }
                                    }
                                }

                                .actions {
                                    display: flex;
                                    align-items: center;

                                    span {
                                        margin-left: 16px;
                                        cursor: pointer;
                                        user-select: none;
                                    }
                                }
                            }
                        }

                    }
                }

                .story-side {
                    width: 200px;
                    height: 350px;
                    background-color: #888;
                    text-align: center;
                    border-radius: 6px;
                    background-image: url('https://nhanvietluanvan.com/wp-content/uploads/2023/05/anh-nen-meo-cute.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;


                    div {
                        width: 64px;
                        height: 64px;
                        display: flex;

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 999px;
                            object-fit: cover;
                        }
                    }

                    h3 {
                        font-size: 1.6rem;
                        font-weight: 500;
                        color: #fff;
                        margin-top: 6px;
                    }
                }
            }
        }
    }
</style>