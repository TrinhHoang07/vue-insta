<script setup lang="ts">
import IconComment from '../icons/IconComment.vue';
import IconHeart from '../icons/IconHeart.vue';
import IconMoreStory from '../icons/IconMoreStory.vue';
import IconSave from '../icons/IconSave.vue';
import IconShare from '../icons/IconShare.vue';
import IconSong from '../icons/IconSong.vue';
import IconAudioOff from '../icons/IconAudioOff.vue';
import IconAudioOn from '../icons/IconAudioOn.vue';
import { ref, watch, type VNodeRef, onMounted } from 'vue';
import IconPlay from '../icons/IconPlay.vue';

    const props = defineProps<{
        videoUrl: any;
        avatar: string;
        nameAccount: string;
        description: string;
        nameAudio: string;
        heartCount: number;
        commentCount: number;
    }>()

    const isMute = ref<boolean>(false)
    const isPlay = ref<boolean>(false)
    const videoRef = ref<VNodeRef | undefined>()

    onMounted(() => {
        const options = {
            root: null, // Mặc định là viewport
            rootMargin: '0px',
            threshold: 0.5 // Kiểm tra khi thành phần được nhìn thấy 50%
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0.5) {
                    isPlay.value = true
                } else {
                    if(videoRef.value) {
                        (videoRef.value as unknown as HTMLVideoElement).currentTime = 0;
                    }
                    isPlay.value = false
                }
            })
        }, options);
        observer.observe(videoRef.value as unknown as HTMLVideoElement);
    })

    const handleMute = () => {
        isMute.value = false;
    }

    const handleUnMute = () => {
        isMute.value = true;
    }

    watch(isPlay, () => {
        if(isPlay.value) {
            (videoRef.value as unknown as HTMLVideoElement).play();
        } else {
            (videoRef.value as unknown as HTMLVideoElement).pause();
        }
    })

    watch(isMute, () => {
        if(isMute.value) {
            (videoRef.value as unknown as HTMLVideoElement).muted = true
        } else {
            (videoRef.value as unknown as HTMLVideoElement).muted = false
        }
    })

</script>

<template>
    <div class="reel-item">
        <div class="reel-container">
            <div class="reel-video">
                <video @ended="isPlay = false" @click="isPlay = !isPlay" ref="videoRef" :src="props.videoUrl"></video>
                <div v-show="!isPlay" @click="isPlay = true" class="pos-click-playing">
                    <div class="clicked-play">
                        <IconPlay />
                    </div>
                </div>
                <div class="sound-audio">
                    <IconAudioOff @click="handleMute" v-if="isMute"/>
                    <IconAudioOn @click="handleUnMute" v-else/>
                </div>
                <div class="child-pos-container">
                    <div class="pos-header">
                        <div class="avatar-user">
                            <img src="../../assets/images/avatar.jpg" alt="avatar-user">
                        </div>
                        <p>Name account </p>
                        <span>•</span>
                        <p>Follow</p>
                    </div>
                    <div class="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti</p>
                    </div>
                    <div class="origin-song">
                        <IconSong />
                        <p>name song</p>
                        <span>•</span>
                        <p>Original audio</p>
                    </div>
                </div>
            </div>
            <div class="reel-actions">
                <div class="action-item">
                    <IconHeart />
                    <p>{{ props.heartCount }}</p>
                </div>
                <div class="action-item">
                    <IconComment />
                    <p>{{ props.commentCount }}</p>
                </div>
                <div class="action-item">
                    <IconShare />
                </div>
                <div class="action-item">
                    <IconSave />
                </div>
                <div class="action-item">
                    <IconMoreStory />
                </div>
                <div class="avatar-song">
                    <img src="../../assets/images/cute.jpg" alt="avatar song">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .reel-item {
        display: flex;
        margin-bottom: 16px;
        // height: calc(100vh - 70px);
        scroll-snap-align: start;

        .reel-container {
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: flex-end;

            .reel-video  {
                width: 469px;
                position: relative;
                display: flex;

                video {
                    width: 100%;
                    height: auto;
                    border-radius: 4px;
                }

                .pos-click-playing {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .clicked-play {
                        width: 72px;
                        height: 72px;
                        background-color: rgba(0,0,0,0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 999px;
                        transition: all 0.2s ease;
                        animation: scale-HT 0.2s ease;

                        svg {
                            width: 24px;
                            height: 24px;
                        }
                    }
                }

                .sound-audio {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    cursor: pointer;
                    background-color: rgba(219,219,219,.2);
                    border-radius: 999px;
                }

                .child-pos-container {
                    position: absolute;
                    bottom: 24px;
                    left: 24px;
                }

                .pos-header {
                    display: flex;
                    align-items: center;
                    color: #fff;
                    user-select: none;
                    

                    .avatar-user {
                        display: flex;
                        width: 32px;
                        height: 32px;
                        margin-right: 12px;

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 999px;
                            object-fit: cover;
                        }
                    }

                    span {
                        margin: 0 6px;
                    }

                    p {
                        font-size: 1.4rem;
                        font-weight: 600;
                    }
                }

                .description {
                    user-select: none;
                    p {
                        color: #fff;
                        font-size: 1.4rem;
                        margin-top: 12px;
                    }
                }

                .origin-song {
                    user-select: none;
                    display: flex;
                    align-items: center;
                    color: #fff;
                    font-size: 1.4rem;

                    svg {
                        margin-right: 4px;
                    }

                    span {
                        margin: 0 6px;

                    }
                }
            }

           .reel-actions {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 16px;
                margin-left: 16px;

                .action-item {
                    font-size: 1.6rem;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    margin-top: 24px;
                    user-select: none;

                    svg {
                        fill: #333;
                        cursor: pointer;

                        &:hover {
                            opacity: 0.55;
                        }
                    }
                }

                .avatar-song {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    margin-top: 16px;
                    cursor: pointer;
                    user-select: none;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 4px;
                        object-fit: cover;

                        &:hover {
                            opacity: 0.5;
                        }
                    }
                }
           }
        }
    }

    @keyframes scale-HT {
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
</style>