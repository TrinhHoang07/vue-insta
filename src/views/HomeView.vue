<script setup lang="ts">
    import { shallowRef } from 'vue';
    import image from '../assets/images/avatar.jpg';
    import SuggestAccItem from '../components/Common/SuggestAccItem.vue';

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

</script>

<template>
    <section class="home-container">
        <div class="contents">
            CONTENTS
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
        }
    }
</style>
