// 等待 DOM 完全加载再执行
document.addEventListener("DOMContentLoaded", function () {
    function checkumami() {
        if (typeof umami !== "undefined") {
            // 选择并绑定第一个链接的点击事件
            let TravellingLink = document.querySelector(
                'a[href="https://www.travellings.cn/go.html"]'
            );
            if (TravellingLink) {
                TravellingLink.addEventListener("click", function () {
                    umami.track("click_travellings_link");
                });
            }

            // 选择并绑定第二个链接的点击事件
            let ForeverblogLink = document.querySelector(
                'a[href="https://foreverblog.cn/go.html"]'
            );
            if (ForeverblogLink) {
                ForeverblogLink.addEventListener("click", function () {
                    umami.track("click_foreverblog_link");
                });
            }

            let FriendLink = document.querySelector('a[href="/link/"]');
            if (FriendLink) {
                FriendLink.addEventListener("click", function () {
                    umami.track("click_friendLink");
                });
            }

            let GithubLink = document.querySelector('a[title="GitHub"]');
            if (GithubLink) {
                GithubLink.addEventListener("click", function () {
                    umami.track("click_GithubLink");
                });
            }

            let FollowLink = document.getElementById("card-info-btn");
            if (FollowLink) {
                FollowLink.addEventListener("click", function () {
                    umami.track("click_FollowLink");
                });
            }
        } else {
            setTimeout(checkumami, 1000);
        }
    }
    checkumami();
});
