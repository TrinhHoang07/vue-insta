<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import IconSetting from '../icons/IconSetting.vue';
import IconPostProfile from '../icons/IconPostProfile.vue';
import IconSavedProfile from '../icons/IconSavedProfile.vue';
import IconTaggedProfile from '../icons/IconTaggedProfile.vue';


const route = useRoute()

</script>

<template>
    <div class="profile-info">
        <div class="preview">
            <img src="../../assets/images/cute.jpg" alt="avatar user">
        </div>
        <div class="wrapper-info">
            <div class="info-header">
                <h3>hoang.0702</h3>
                <button>Edit profile</button>
                <button>View Archive</button>
                <span>
                    <IconSetting />
                </span>
            </div>
            <div class="other-info">
                <p>
                    <span>0</span>
                    post
                </p>
                <p>
                    <span>2</span>
                    followers
                </p>
                <p>
                    <span>7</span>
                    following
                </p>
            </div>
            <h5>Hoàng</h5>
        </div>
    </div>
    <div class="nav-header">
        <RouterLink to="/profile" class="nav-link" :class="{active: route.path === 'profile'}">
            <span>
                <IconPostProfile />
            </span>
            POSTS
        </RouterLink>
        <RouterLink to="/profile/saved" class="nav-link" :class="{active: route.path === 'profile/saved'}">
            <span>
                <IconSavedProfile />
            </span>
            SAVED
        </RouterLink>
        <RouterLink to="/profile/tagged" class="nav-link" :class="{active: route.path === 'profile/tagged'}">
            <span>
                <IconTaggedProfile />
            </span>
            TAGGED
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
    .profile-info {
        display: flex;
        align-items: center;
        .preview {
            width: 150px;
            height: 150px;
            display: flex;
            margin: 0 96px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 999px;
            }
        }

        .wrapper-info {
            .info-header {
                display: flex;
                align-items: center;

                h3 {
                    font-size: 2rem;
                    font-weight: 400;
                    margin-right: 12px;
                }

                button {
                    border: none;
                    padding: 8px 16px;
                    margin: 0 4px;
                    border-radius: 8px;
                    color: #000;
                    font-size: 1.4rem;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                    cursor: pointer;
                    background-color: #d9d9d9;
                }

                span {
                    margin-left: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
            }

            .other-info {
                display: flex;
                align-items: center;
                margin-top: 16px;
                p {
                    margin-right: 32px;
                    font-size: 1.6rem;

                    span {
                        font-weight: 500;
                    }
                }
            }

            h5 {
                margin-top: 16px;
                font-weight: 500;
                font-size: 1.4rem;
            }
        }
    }

    .nav-header {
        margin-top: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 936px;
        // padding: 0 64px;
        border-top: 1px solid #d7d7d7;

        .nav-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #333;
            padding: 16px 0;
            margin-right: 48px;
            font-weight: 500;
            opacity: 0.75;
            font-size: 1.4rem;

            span {
                margin-right: 8px;
            }
        }

        .router-link-exact-active {
            border-top: 1px solid;
            color: #000;
            opacity: 1;
        }
    }
</style>