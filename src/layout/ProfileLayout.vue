<script setup lang="ts">
import ProfileHeader from '@/components/Common/ProfileHeader.vue';
import FooterView from '@/components/Footer/FooterView.vue';
</script>

<template>
    <div class="profile-layout">
        <div class="profile-wrapper">
            <div class="profile-container">
                <ProfileHeader />
                <router-view></router-view>
            </div>
        </div>
        <FooterView />
    </div>
</template>

<style scoped lang="scss">

.profile-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
    .profile-wrapper {
        display: flex;
        width: 100%;
        flex: 1;

        .profile-container {
            margin: 0 auto;
            padding: 24px 16px;
        }
    }
</style>