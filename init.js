const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
const contextMenu = document.querySelector("#contextMenu");

function checkMobile() {
    if (mobile.test(navigator.userAgent)) {
        location.replace("blocked.html");
    }
}

function checkBeta() {
    const betaFeature = JSON.parse(localStorage.getItem("beta"));
    if (betaFeature === true) {
        location.replace("https://artrium.app");
    }
}

function init() {
    checkMobile();
    checkBeta();
}

init();