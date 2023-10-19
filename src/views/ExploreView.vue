<script setup lang="ts">

    import ExploreItem from '@/components/Common/ExploreItem.vue';
    import LoadingView from '@/components/Common/LoadingView.vue';
import PreviewExplore from '@/components/Common/PreviewExplore.vue';
import FooterView from '@/components/Footer/FooterView.vue';
    import {splitArray} from '@/helper'
    import { onBeforeMount, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue';

    const dataPro = shallowRef<any[]>([])
    const _limit = ref<number>(10)
    const isLoading = ref<boolean>(false)
    const isPreview = ref<boolean>(false)

    onBeforeMount(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${_limit.value}`)
            .then(res => res.json())
            .then(data => {
                dataPro.value = data
            })
            .catch(err => console.log(err))
    })

    onMounted(() => {
        window.addEventListener('scrollend', handleLoadData)
    })

    onUnmounted(() => {
        window.removeEventListener('scrollend', handleLoadData)
    })

    watch(_limit, () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${_limit.value}`)
            .then(res => res.json())
            .then(data => {
                dataPro.value = data
                isLoading.value = false
            })
            .catch(err => console.log(err))
    })
    
    const handleLoadData = () => {
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            isLoading.value = true
            _limit.value += 10;
        }
    }

    const handleOpenPreview = () => {

        console.log('call open preview')

        isPreview.value = true
    }
    
    const handleClosePreview = () => {
        isPreview.value = false
    }


</script>

<template>
    <div class="explore">

        <PreviewExplore :handle-close="handleClosePreview" v-show="isPreview"/>

        <div class="explore-container" v-for="(item, index) in (splitArray(dataPro, 5))" :key="index">
            <ExploreItem v-for="data in item" :key="data.id" preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" :heart-count="300" :comment-count="215" :handle-open="handleOpenPreview"/>
        </div>
        <div style="text-align: center" v-if="isLoading">
            <LoadingView />
        </div>

        <FooterView />
    </div>
</template>

<style scoped lang="scss">

    .explore {
        margin: 24px 0;
        width: 100%;
        display: flex;
        flex-direction: column;

        .explore-container {
            margin: auto;
            max-width: 964px;
            max-height: 642px;
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;

            &:nth-child(2n + 1) {
                flex-direction: row;
            }
            .explore-item {
                padding: 2px;
                .preview-explore {
                    width: 317px;
                    height: 317px;
                    display: flex;
                    position: relative;
                    
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;

                    }

                    .action-item {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

                &:nth-child(3) {
                    .preview-explore {
                        height: 638px;
                    }
                }

                &:nth-child(4) {
                    transform: translateY(-321px);
                }

                &:nth-child(5) {
                    transform: translateY(-321px);
                }
            }

        }
    }

</style>
