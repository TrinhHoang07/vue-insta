<script setup lang="ts">
    defineProps<{
        handleClose: Function
    }>()

import IconAddNewPostVue from '../icons/IconAddNewPost.vue';
    import IconCloseBig from '../icons/IconCloseBig.vue';
    
</script>

<template>
    <Transition>
        <div class="add-post-page">
            <div @click="() => handleClose()" class="close-icon">
                <IconCloseBig />
            </div>
            <section class="add-post-container">
                <h1>Create new post</h1>
                <div class="contents">
                    <span>
                        <IconAddNewPostVue />
                    </span>
                    <h3>Drag photos and videos here</h3>
                    <div class="select-file">
                        <label for="file_id">Select from computer</label>
                        <input type="file" id="file_id">
                    </div>
                </div>
            </section>
        </div>
    </Transition>
</template>

<style scoped lang="scss">

// transition css
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

////////
    .add-post-page {
        position: fixed;
        inset: 0;
        background-color: rgba(0,0,0,0.75);
        display: flex;
        z-index: 99999999;

        .close-icon {
            position: absolute;
            cursor: pointer;
            user-select: none;
            right: 24px;
            top: 24px;
        }

        .add-post-container {
            margin: auto;
            width: 716px;
            height: calc(100vh - 198px);
            background-color: #fff;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                width: 100%;
                text-align: center;
                font-size: 1.6rem;
                font-weight: 500;
                color: #333;
                padding: 8px;
                border-bottom: 1px solid #d7d7d7;
            }

            .contents {
                flex: 1;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                h3 {
                    margin-top: 8px;
                    font-size: 2rem;
                    color: #000;
                    font-weight: 400;
                }

                .select-file {
                    margin-top: 16px;

                    label {
                        background-color: #0095F6;
                        color: #fff;
                        font-weight: 500;
                        font-size: 1.4rem;
                        padding: 6px 16px;
                        border-radius: 8px;
                        cursor: pointer;
                    }
                    input {
                        display: none;
                    }
                }
            }
        }
    }
</style>