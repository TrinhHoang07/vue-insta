<script setup lang="ts">
import IconCommentSolid from '../icons/IconCommentSolid.vue';
import IconHeartSolidTrans from '../icons/IconHeartSolidTrans.vue';

    const props = defineProps<{
        previewUrl: string;
        heartCount: number;
        commentCount: number;
    }>()

</script>

<template>
    <div class="explore-item">
        <div class="preview-explore">
            <img :src="props.previewUrl" alt="preview-user">
            <div class="action-item">
                <div class="info-action">
                    <span>
                        <IconHeartSolidTrans />
                    </span>
                    <p>{{ props.heartCount }}</p>
                </div>
                <div class="info-action">
                    <span>
                        <IconCommentSolid />
                    </span>
                    <p>{{ props.commentCount }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
                cursor: pointer;
                inset: 0;
                background-color: rgba(0,0,0,0.5);
                justify-content: center;
                align-items: center;
                transition: all 0.05s ease;
                display: flex;
                user-select: none;
                visibility: hidden;

                .info-action {
                    display: flex;
                    align-items: center;
                    margin: 0 12px;
                    color: #fff;
                    
                    p {
                        font-weight: 600;
                        margin-left: 6px;
                    }

                    span {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    svg {
                        fill: #fff;
                        font-size: 2rem;
                    }
                }
            }

            &:hover .action-item {
                visibility: visible;
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
</style>
