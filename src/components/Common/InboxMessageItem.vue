
<script setup lang="ts">
    import IconCall from '@/components/icons/IconCall.vue';
    import IconCallVideo from '@/components/icons/IconCallVideo.vue';
    import IconInfo from '@/components/icons/IconInfo.vue';
    import IconFaceInput from '@/components/icons/IconFaceInput.vue';
    import IconMicro from '@/components/icons/IconMicro.vue';
    import IconImage from '@/components/icons/IconImage.vue';
    import IconHeart from '@/components/icons/IconHeart.vue';

    const props = defineProps<{
        previewUrl: string;
        nameUser: string;
        aliasName: string;
        data: any[]
    }>()
</script>



<template>
    <div class="inbox-message-item">
        <div class="header">
            <div class="user-info">
                <div class="image-avatar">
                    <img :src="props.previewUrl" :alt="props.nameUser">
                </div>
                <h3>{{ props.nameUser }}</h3>
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
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
            <h1>ABC</h1>
        </div>
        <div class="footer">
            <div class="post-message">
                <span>
                    <IconFaceInput />
                </span>
                <input type="text" placeholder="Message...">
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