<script setup lang="ts">
    import IconCall from '@/components/icons/IconCall.vue';
    import IconCallVideo from '@/components/icons/IconCallVideo.vue';
    import IconInfo from '@/components/icons/IconInfo.vue';
    import IconFaceInput from '@/components/icons/IconFaceInput.vue';
    import IconMicro from '@/components/icons/IconMicro.vue';
    import IconImage from '@/components/icons/IconImage.vue';
    import IconHeart from '@/components/icons/IconHeart.vue';
    import { reactive, ref, watch } from 'vue';
    import InboxMessageEmpty from './InboxMessageEmpty.vue';
    import { useRoute } from 'vue-router';

    const router = useRoute()
    const inputValue = ref<string>('')
    const isHasID = ref<boolean>(false)

    watch(router, () => {
        if(router.params["id"].length > 0) {
            isHasID.value = true
        } else {
            isHasID.value = false
        }

    }, {
        deep: true,
        immediate: true
    })

    const data = reactive<{
        user?: string,
        message?: string,
        time?: string,
        id?: number;
    }[]>([
        {
            id: 1,
            user: 'me',
            message: 'hello guy!',
            time: '1/11/2023'
        },
        {
            id: 2,
            user: 'me',
            message: 'nice to meet you!',
            time: '1/11/2023'
        },
        {
            id: 3,
            user: 'you',
            message: 'hiiiii',
            time: '1/11/2023'
        },
        {
            id: 4,
            user: 'you',
            message: 'nice to meet you too',
            time: '1/11/2023'
        },
        {
            id: 5,
            user: 'me',
            message: 'hehehehehe',
            time: '1/11/2023'
        },
    ])

    const handleAddMessage = (event: KeyboardEvent) => {
        if(event.key === 'Enter' && inputValue.value.trim().length > 0) {

            data.push({
                id: Math.floor(Math.random() * 100),
                message: inputValue.value,
                time: '1/11/2023',
                user: 'me'
            })

            inputValue.value = ''
        }
    }
</script>

<template>
    <InboxMessageEmpty v-if="!isHasID"/>
    <div class="inbox-message-item" v-else>
        <div class="header">
            <div class="user-info">
                <div class="image-avatar">
                    <img src="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" alt="thsuyyy">
                </div>
                <h3>Trần Thị Thúy</h3>
            </div>
            <div class="actions">
                <span>
                    <IconCall />
                </span>
                <span>
                    <IconCallVideo />
                </span>
                <span>
                    <IconInfo />
                </span>
            </div>
        </div>
        <div class="contents">
            <div v-for="item in data" :key="item.id">
                <div class="message-content" v-if="item.user === 'you'">
                    <div class="avatar-friend">
                        <img src="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" alt="thsuyyy">
                    </div>
                    <p class="message-data">{{ item.message }}</p>
                </div>
                <div class="message-content" style="justify-content: flex-end;" v-else>
                    <p class="message-data" style="background-color: #3797f0;color: #fff;">{{ item.message }}</p>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="post-message">
                <span>
                    <IconFaceInput />
                </span>
                <input v-model="inputValue" @keyup="handleAddMessage" type="text" placeholder="Message...">
                <span>
                    <IconMicro />
                </span>
                <span>
                    <IconImage />
                </span>
                <span>
                    <IconHeart />
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .inbox-message-item {
        display: flex;
        flex-direction: column;
        height: 100vh;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px;
            border-bottom: 1px solid #d7d7d7;

            .user-info {
                display: flex;
                align-items: center;

                .image-avatar {
                    width: 44px;
                    height: 44px;
                    display: flex;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 999px;
                    }
                }

                h3 {
                    padding-left: 8px;
                    font-size: 1.6rem;
                    font-weight: 500;
                }
            }

            .actions {
                display: flex;
                align-items: center;
                span {
                    display: flex;
                    align-items: center;
                    margin-left: 16px;
                    cursor: pointer;
                }
            }
        }

        .contents {
            flex: 1;
            overflow: auto;
            padding: 0 12px;

            .message-content {
                display: flex;
                align-items: center;
                margin: 4px 0;

                .avatar-friend {
                    width: 32px;
                    height: 32px;
                    display: flex;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 999px;
                    }
                }

                p {
                    padding: 6px 12px;
                    border-radius: 999px;
                    background-color: #efefef;
                    color: #333;
                    margin-left: 8px;
                    font-size: 1.4rem;
                    font-weight: 400;
                    max-width: 580px;
                    text-align: left;
                }
            }
        }

        .footer {
            padding: 12px 16px;
            .post-message {
                display: flex;
                align-items: center;
                border: 1px solid #d7d7d7;
                border-radius: 999px;
                padding: 12px 16px;

                input {
                    flex: 1;
                    border: none;
                    outline: none;
                }

                span {
                    display: flex;
                    align-items: center;
                    margin-right: 14px;
                    cursor: pointer;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>