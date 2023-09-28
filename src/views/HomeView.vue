<script setup lang="ts">
    import { ref, shallowRef } from 'vue';
    import image from '../assets/images/avatar.jpg';
    import SuggestAccItem from '../components/Common/SuggestAccItem.vue';
    import HomeItemPost from '@/components/Common/HomeItemPost.vue';
    import StoryItem from '@/components/Common/StoryItem.vue';

    const items = shallowRef<{
        id: number;
        avatar: string;
        name: string;
        subName: string;
    }[]>([
        {
            id: 1,
            avatar: 'https://img3.thuthuatphanmem.vn/uploads/2019/07/07/anh-chu-meo-de-thuong_020434248.jpg',
            name: 'hoang07.02',
            subName: 'Hoàng'
        },
        {
            id: 2,
            avatar: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/4/7/796577/Tan-Chay-Truoc-7-Gio.jpg',
            name: '_t.thsuy',
            subName: 'Trần Thị Thúy'
        },
        {
            id: 3,
            avatar: 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/gia-ban-meo-tai-cup-0.jpg',
            name: 'nawngs__',
            subName: 'Nắng'
        },
        {
            id: 4,
            avatar: 'https://demoda.vn/wp-content/uploads/2022/03/hinh-nen-meo-tai-cup-cute.jpg',
            name: 'yifei_cc',
            subName: 'Liu Yifei'
        },
        {
            id: 5,
            avatar: 'https://img3.thuthuatphanmem.vn/uploads/2019/07/07/hinh-anh-meo-anh-tai-cup-de-thuong_020435873.jpg',
            name: 'rooosyzh09',
            subName: 'Lusi Zhao'
        }
    ])

    const isMorePost = ref(false)
    
    const handleOpenMore = () => {
        isMorePost.value = true
    }

</script>

<template>
    <Transition name="bounce">
        <div v-if="isMorePost" @click="isMorePost = !isMorePost" class="actions-post-fixed">
            <div @click="(event) => event.stopPropagation()" class="actions-post-container">
                <p class="active">Report</p>
                <p>Go to post</p>
                <p>Share to...</p>
                <p>Copy link</p>
                <p>Embed</p>
                <p>About this account</p>
                <p @click="isMorePost = !isMorePost">Cancel</p>
            </div>
        </div>
    </Transition>
    <section class="home-container">
        <div class="contents">
            <div class="wrapper-stories">
                <StoryItem avatar="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name="hoang.0702"/>
                <StoryItem avatar="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name="hoang.0702"/>
                <StoryItem avatar="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name="hoang.0702"/>
            </div>
            <HomeItemPost name="ROSE" :comments="590" :likes="300" avatar="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" data="OK" time="1d" :func="handleOpenMore"/>
            <HomeItemPost name="ROSE" :comments="590" :likes="300" avatar="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" data="OK" time="1d" :func="handleOpenMore"/>
        </div>
        <div class="bar-suggest">
            <div class="header-profile">
                <div class="header-info">
                    <div class="avatar-profile">
                        <img :src="image" alt="avatar-profile">
                    </div>
                    <div class="name-user">
                        <p class="short">hoangtrinh.07</p>
                        <p class="real">Hoàng</p>
                    </div>
                </div>
                <p class="change-user">Switch</p>
            </div>
            <div class="suggest-accounts">
                <div class="acc-header">
                    <h5>Suggested for you</h5>
                    <p>See All</p>
                </div>
                <div class="accounts-contents">
                    <SuggestAccItem v-for="item in items" :avatar="item.avatar" :name="item.name" :sub-name="item.subName" :key="item.id" />
                </div>
            </div>
            <div class="footer-suggest">
                <div class="footer-info">
                    <a href="">About</a>
                    <span>.</span>
                    <a href="">Help</a>
                    <span>.</span>
                    <a href="">Press</a>
                    <span>.</span>
                    <a href="">API</a>
                    <span>.</span>
                    <a href="">Jobs</a>
                    <span>.</span>
                    <a href="">Privacy</a>
                    <span>.</span>
                    <a href="">Terms</a>
                    <span>.</span>
                    <a href="">Locations</a>
                    <span>.</span>
                    <a href="">Language</a>
                    <span>.</span>
                    <a href="">Meta Verified</a>
                </div>
                <p>© 2023 INSTAGRAM FROM HOANG</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .home-container {
        display: flex;
        max-width: 1200px;
        padding-top: 32px;
        margin: auto;

        .contents {
            flex: 2;
            margin-right: 64px;
            display: flex;
            flex-direction: column;
            padding-bottom: 16px;

            .wrapper-stories {
                display: flex;
                align-items: center;
                margin-bottom: 24px;
            }
        }

        .bar-suggest {
            flex: 1;

            .header-profile {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 12px 0;
                padding-right: 16px;

                .header-info {
                    display: flex;
                    align-items: center;
                    .avatar-profile {
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

                    .name-user {
                        margin-left: 16px;
                        font-size: 1.4rem;

                        .short {
                            font-weight: bold;
                            color: #000;
                        }
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

            .suggest-accounts {
                .acc-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-right: 16px;

                    h5 {
                        font-size: 1.4rem;
                        color: #737373;
                        font-weight: bold;
                        letter-spacing: 0.35px;
                    }

                    p {
                        font-size: 1.2rem;
                        color: #333;
                        font-weight: bold;
                        cursor: pointer;
                        user-select: none;

                        &:hover {
                            opacity: 0.5;
                        }
                    }
                }

                .accounts-contents {
                    padding-top: 12px;
                }
            }

            .footer-suggest {
                margin-top: 24px;
                .footer-info {
                    display: flex;
                    flex-wrap: wrap;
                    font-size: 1.3rem;
                    color: #000;
                    opacity: 0.6;

                    a {
                        text-decoration: none;
                        color: #000;
                        opacity: 0.6;

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                    span {
                        margin: 0 4px;
                    }
                }

                p {
                    margin-top: 16px;
                    font-size: 1.4rem;
                    color: #000;
                    opacity: 0.6;
                    font-weight: 400;
                }
            }
        }
    }

    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }

    .actions-post-fixed {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.65);
        z-index: 999;
        display: flex;

        .actions-post-container {
            width: 400px;
            border-radius: 8px;
            margin: auto;
            background-color: #fff;

            p {
                padding: 12px 8px;
                cursor: pointer;
                font-size: 1.4rem;
                font-weight: 400;
                color: #333;
                text-align: center;
                border-bottom: 1px solid #d7d7d7;
                user-select: none;

                &:first-child {
                    border-radius: 8px 8px 0 0;
                }

                &:last-child {
                    border-bottom: none;
                    border-radius: 0 0 8px 8px;
                }

                &:hover {
                    background-color: #f2f3f5;
                }
            }

            .active {
                color: red;
                font-weight: 500;
            }
        }
    }
</style>
