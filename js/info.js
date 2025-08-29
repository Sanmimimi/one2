(function () {
    var encodedValidDomain = "YmxvZy5nb29kYm95Ym95LnRvcA==";
    var encodedValidMirrorDomain1 =
        "YmxvZy1taXJyb3ItY2hpbmEtY2YuZ29vZGJveWJveS50b3A=";
    var encodedValidMirrorDomain2 =
        "YmxvZy1taXJyb3ItY2hpbmEtdmVyY2VsLmdvb2Rib3lib3kudG9w";
    var encodedValidMirrorDomain3 =
        "YmxvZy1taXJyb3ItY2hpbmEtbmV0bGlmeS5nb29kYm95Ym95LnRvcA==";
    var encodedredirectUrl = "aHR0cHM6Ly9ibG9nLmdvb2Rib3lib3kudG9w";
    var decodedValidDomain = atob(encodedValidDomain);
    var decodedValidMirrorDomain1 = atob(encodedValidMirrorDomain1);
    var decodedValidMirrorDomain2 = atob(encodedValidMirrorDomain2);
    var decodedValidMirrorDomain3 = atob(encodedValidMirrorDomain3);
    var redirectUrl = atob(encodedredirectUrl);
    var hostname = document.location.hostname;

    function createWatermark(text) {
        var watermarkDiv = document.createElement("div");
        watermarkDiv.style.pointerEvents = "none";
        watermarkDiv.style.position = "fixed";
        watermarkDiv.style.top = "0";
        watermarkDiv.style.left = "0";
        watermarkDiv.style.width = "100%";
        watermarkDiv.style.height = "100%";
        watermarkDiv.style.zIndex = "9999";
        watermarkDiv.style.opacity = "0.1";
        watermarkDiv.style.background = "transparent";
        watermarkDiv.style.overflow = "hidden";
        watermarkDiv.style.display = "flex";
        watermarkDiv.style.justifyContent = "center";
        watermarkDiv.style.alignItems = "center";
        watermarkDiv.style.flexWrap = "wrap";

        var watermarkText = document.createElement("div");
        watermarkText.innerText = text;
        watermarkText.style.color = "black";
        watermarkText.style.fontSize = "30px";
        watermarkText.style.transform = "rotate(-30deg)";
        watermarkText.style.whiteSpace = "nowrap";
        watermarkText.style.margin = "20px";

        for (var i = 0; i < 100; i++) {
            watermarkDiv.appendChild(watermarkText.cloneNode(true));
        }

        document.body.appendChild(watermarkDiv);
    }

    if (hostname !== decodedValidDomain) {
        if (
            hostname == decodedValidMirrorDomain1 ||
            hostname == decodedValidMirrorDomain2 ||
            hostname == decodedValidMirrorDomain3
        ) {
            createWatermark(decodedValidDomain);
            var userResponse = confirm(
                "提示：您当前浏览的站点为镜像站点，可能存在更新滞后问题！建议您跳转至官方页面进行浏览！"
            );
            if (userResponse) {
                window.location.replace(redirectUrl);
            }
        } else {
            createWatermark(decodedValidDomain);
            var userResponse = confirm(
                "警告：您当前浏览的页面非官方页面，可能存在有害信息！建议您跳转至官方页面进行浏览！"
            );
            if (userResponse) {
                window.location.replace(redirectUrl);
            }
        }
    }
})();
