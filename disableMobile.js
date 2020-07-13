const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

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
}

init();