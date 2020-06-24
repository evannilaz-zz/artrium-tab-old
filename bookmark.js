const body = document.querySelector("body");
const bookmarkTab = document.querySelector("#bookmark");
const bookmarkButton = bookmarkTab.querySelector("button");
const overlay = document.querySelector("#overlay");
const bookmarkExit = overlay.querySelector("#exit");

function handleBookmarkAdd(event) {
    event.preventDefault();
    overlay.style.transform = "translateY(-90vw)";
}

function init() {
    bookmarkTab.addEventListener("submit", handleBookmarkAdd);
    bookmarkExit.addEventListener("click", function() {
        overlay.style.transform = "translateY(90vw)";
    });
}

init();