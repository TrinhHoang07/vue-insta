<script setup lang="ts">
    const props = defineProps<{
        isShow: boolean,
        closeFunc: Function
    }>()
    import { onMounted, onUnmounted } from 'vue';
    import CloseIcon from '../icons/IconClose.vue';
    import {isParent} from '../../helper';

    const handleClickOutside = (event: MouseEvent) => {
       if(!isParent(event.target, '#search') && !isParent(event.target, '#btn-search')) {
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
    <section id="search" class="search" v-bind:style="isShow ? 'transform: translateX(0)' : 'transform: translateX(-620px)'">
        <h3>Search</h3>
        <div class="input-search">
            <input type="text" placeholder="Search">
            <div class="icon-close">
                <CloseIcon />
            </div>
        </div>
        <div class="contents">
            <!-- has history -->
            <div class="header-contents">
                <h5>Recent</h5>
                <span>Clear all</span>
            </div>
            <div class="containers">
                <div class="account-item"></div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

    .search {
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
            font-size: 2.4rem;
            color: #000;
            font-weight: 500;
            margin-bottom: 16px;
        }

        .input-search {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #d7d7d7;
            background-color: #f2f3f5;
            border-radius: 6px;

            .icon-close {
                margin-right: 12px;
                cursor: pointer;
            }
            
            input {
                width: 100%;
                background-color: #f2f3f5;
                padding: 12px 12px 12px 14px;
                outline: none;
                border-radius: 6px;
                border: none;
            }
        }

        .contents {
            .header-contents {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 24px;
                padding-top: 16px;
                border-top: 1px solid #d7d7d7;

                h5 {
                    font-weight: 500;
                    font-size: 1.6rem;
                }

                span {
                    color: dodgerblue;
                    font-size: 1.4rem;
                    font-weight: 600;
                    cursor: pointer;
                    user-select: none;
                }
            }

        }
    }
</style>
