<script setup lang="ts">
    const props = defineProps<{
        items: {
            id: number;
            title: string;
            isActive: boolean;
        }[],
        isOpen: boolean;
        handleClose: Function
    }>()

</script>

<template>
    <Transition name="bounce">
        <div v-if="props.isOpen" @click="props.handleClose()" class="actions-post-fixed">
            <div @click="(event) => event.stopPropagation()" class="actions-post-container">
                <p v-for="item in props.items" :key="item.id" :class="{active: item.isActive}">
                    {{ item.title }}
                </p>
                <p @click="props.handleClose()">Cancel</p>
            </div>
        </div>
    </Transition>
</template>

<style scoped lang="scss">
    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
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

    .actions-post-fixed {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.65);
        z-index: 999999999999;
        display: flex;

        .actions-post-container {
            width: 400px;
            border-radius: 8px;
            margin: auto;
            background-color: #fff;

            p {
                padding: 12px 8px;
                cursor: pointer;
                font-size: 1.4rem;
                font-weight: 400;
                color: #333;
                text-align: center;
                border-bottom: 1px solid #d7d7d7;
                user-select: none;

                &:first-child {
                    border-radius: 8px 8px 0 0;
                }

                &:last-child {
                    border-bottom: none;
                    border-radius: 0 0 8px 8px;
                }

                &:hover {
                    background-color: #f2f3f5;
                }
            }

            .active {
                color: red;
                font-weight: 500;
            }
        }
    }
</style>
