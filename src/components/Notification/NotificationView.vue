<script setup lang="ts">
    const props = defineProps<{
        isShow: boolean,
        closeFunc: Function
    }>()
    import { onMounted, onUnmounted } from 'vue';
    import {isParent} from '../../helper';

    const handleClickOutside = (event: MouseEvent) => {
       if(!isParent(event.target, '#noti') && !isParent(event.target, '#btn-noti')) {
           props.closeFunc()
        }
    }

    onMounted(() => {
        console.log('mounted')
        window.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        console.log('unmounted')
        window.removeEventListener('click', handleClickOutside)
    })

</script>

<template>
    <section id="noti" class="noti" v-bind:style="isShow ? 'transform: translateX(0)' : 'transform: translateX(-620px)'">
        <h3>Notifications</h3>
        <div class="contents">
            <p>
                Bạn không có thông báo!
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss">

    .noti {
        width: 398px;
        height: 100vh;
        position: fixed;
        left: 81px;
        left: 220px;
        top: 0;
        bottom: 0;
        box-shadow: 4px 0 24px rgba(0, 0, 0,.15);
        border-radius: 0 16px 16px 0;
        padding: 16px;
        background-color: #fff;
        transition: all 0.2s ease;
        z-index: 9999;

        h3 {
            font-size: 2.6rem;
            color: #000;
            font-weight: bold;
            margin-bottom: 16px;
        }

        .contents {
            p {
                font-size: 1.4rem;
                color: #333;
                font-weight: 500;
            }
        }
        
    }
</style>
