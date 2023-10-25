<script setup lang="ts">
import ReelItem from '@/components/Common/ReelItem.vue';
import link from '../assets/videos/video_1.mp4';
import link2 from '../assets/videos/video_2.mp4';
import link3 from '../assets/videos/video_3.mp4';
import link4 from '../assets/videos/video_4.mp4';
import link5 from '../assets/videos/video_5.mp4';

</script>

<template>
    <div class="reel">
        <ReelItem avatar="" :heart-count="300" :comment-count="300" :video-url="link" name-audio="" description="" name-account=""/>
        <ReelItem avatar="" :heart-count="300" :comment-count="300" :video-url="link2" name-audio="" description="" name-account=""/>
        <ReelItem avatar="" :heart-count="300" :comment-count="300" :video-url="link3" name-audio="" description="" name-account=""/>
        <ReelItem avatar="" :heart-count="300" :comment-count="300" :video-url="link4" name-audio="" description="" name-account=""/>
        <ReelItem avatar="" :heart-count="300" :comment-count="300" :video-url="link5" name-audio="" description="" name-account=""/>
    </div>
</template>

<style scoped lang="scss">
    .reel {
        margin-top: 24px;
        height: calc(100vh - 24px);
        overflow-y: auto;
        scroll-snap-type: y mandatory;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>
