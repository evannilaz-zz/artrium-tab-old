const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
const contextMenu = document.querySelector("#contextMenu");

function checkMobile() {
    if (mobile.test(navigator.userAgent)) {
        location.replace("blocked.html");
    }
}

function checkBeta() {
    const betaFeature = JSON.parse(localStorage.getItem("beta"));
}

function init() {
    checkMobile();
    checkBeta();
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
}

init();