function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        location.replace("blocked.html");
    }
}


function init() {
    checkMobile();
}

init();