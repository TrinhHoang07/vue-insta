<script setup lang="ts">
    // defineProps<{
    //     avatar: string;
    //     name: string;
    // }>()

    import { RouterLink } from 'vue-router';
    import IconCloseBig from '../icons/IconCloseBig.vue';
    import IconRight from '../icons/IconChevRight.vue';
    import IconLeft from '../icons/IconChevLeft.vue';

</script>

<template>
    <div class="story-page">
        <RouterLink to="/">
            <div class="logo-ins"></div>
        </RouterLink>
        <div class="close-icon">
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
                        MAIN STORY
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
</template>

<style scoped lang="scss">
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