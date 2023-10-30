<script setup lang="ts">
    import SideBarIcon from '../components/SideBarIcon/SideBarIcon.vue';
    import IconChevDown from '@/components/icons/IconChevDown.vue';
    import IconChatGroup from '@/components/icons/IconChatGroup.vue';
import InboxAccountItem from '@/components/Common/InboxAccountItem.vue';
import InboxMessageEmpty from '@/components/Common/InboxMessageEmpty.vue';
import InboxMessageItem from '@/components/Common/InboxMessageItem.vue';
</script>

<template>
    <div class="inboxs">
        <SideBarIcon />
        <main class="contents">
            <div class="accounts">
                <div class="header">
                    <h1>hoang.0702 <span><IconChevDown /> </span></h1>
                    <p>
                        <IconChatGroup />
                    </p>
                </div>
                <section class="main-acc">
                    <div class="main-header">
                        <h2>Messages</h2>
                        <p>Request</p>
                    </div>
                    <div class="contents-item">
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                        <InboxAccountItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" name-account="Trần Thị Thúy" last-message="cuteeeeeeeeeeee" time="3w"/>
                    </div>
                </section>
            </div>
            <div class="messages">
                <!-- <InboxMessageEmpty /> -->
                <InboxMessageItem preview-url="https://cdn3.ivivu.com/2022/09/bien-vo-cuc-8.jpg" :data="[]" name-user="Trần Thị Thúy" alias-name="thsuyy"/>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
    .inboxs {
        display: flex;
        width: 100%;

        .contents {
            flex: 1;
            display: flex;
            justify-content: space-between;

            .accounts {
                width: 398px;
                // padding: 0 24px;
                // padding-right: 24px;
                border-right: 1px solid #d7d7d7;

                .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 36px 24px 12px 24px;

                    h1 {
                        display: flex;
                        align-items: center;
                        font-size: 2rem;
                        font-weight: bold;
                        cursor: pointer;
                        user-select: none;

                        span {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-left: 8px;
                        }
                    }
                    
                    p {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        user-select: none;
                    }
                }

                .main-acc {
                    .main-header {
                        padding: 14px 24px 12px 24px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        h2 {
                            font-size: 1.6rem;
                            font-weight: bold;
                        }

                        p {
                            font-size: 1.4rem;
                            cursor: pointer;
                            user-select: none;
                        }
                    }

                    .contents-item {
                        max-height: calc(100vh - 132px);
                        overflow: auto;
                    }
                }
            }

            .messages {
                flex: 1;
            }
        }
    }

</style>
