<template>
    <footer>
        <div class="footer-container">
            <a href="">Meta</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Jobs</a>
            <a href="">Help</a>
            <a href="">API</a>
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Locations</a>
            <a href="">Instagram Lite</a>
            <a href="">Threads</a>
            <a href="">Contact & Non-Users</a>
            <a href="">Meta Verified</a>
        </div>
        <div class="footer-sologan">
            <select value="en">
                <option value="vi">Tiếng Việt</option>
                <option value="en">Tiếng Anh</option>
                <option value="ch">Tiếng Trung</option>
                <option value="te">Tiếng KB</option>
                <option value="ve">Tiếng Chịu</option>
                <option value="th">Tiếng Em</option>
            </select>
            <p>© 2023 Instagram from Hoang</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 32px 0;

        .footer-container {
            a {
                text-decoration: none;
                font-size: 1.2rem;
                color: #333;
                opacity: 0.85;
                margin: 0 8px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .footer-sologan {
            display: flex;
            align-items: center;
            margin-top: 16px;

            select {
                border: none;
                font-size: 1.3rem;
                color: #666;
                cursor: pointer;
                outline: none;
                margin-right: 12px;
            }

            p {
                font-size: 1.3rem;
                color: #333;
                opacity: 0.85;
                font-weight: 400;
            }
        }
    }
</style>