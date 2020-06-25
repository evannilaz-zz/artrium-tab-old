const body = document.querySelector("body");
const bookmarkTab = document.querySelector("#addBookmark");
const overlay = document.querySelector("#overlay");
const buttons = document.querySelector("#buttons");
const closeButton = buttons.querySelector("#cancel");
const bookmarkCreate = overlay.querySelector("#create");

const BOOKMARK_LS = "bookmark";

const bookmarks = [];

function saveBookmark() {
    localStorage.setItem(BOOKMARK_LS, JSON.stringify(bookmarks));
}

function addBookmark(url,name) {
    const link = document.createElement("a");
    link.href = url;
    link.innerText = name;
    link.classList.add("bookmark");
    // body.appendChild(link);
    const bookmarkObject = {
        url: url,
        name: name
    }
    bookmarks.push(bookmarkObject);
    saveBookmark();
    hideOverlay();
}

function showOverlay(event) {
    event.preventDefault();
    overlay.style.transform = "translateY(-90vw)";
}

function hideOverlay() {
    overlay.style.transform = "translateY(90vw)";
}

function handleBookmarkCreate(event) {
    event.preventDefault();
    const url = bookmarkCreate.querySelector("#url").value;
    const name = bookmarkCreate.querySelector("#name").value;
    addBookmark(url,name);
}

function loadBookmark() {
    const loadedBookmarks = localStorage.getItem(BOOKMARK_LS);
    if (loadedBookmarks !== null) {
        const parsedBookmarks = JSON.parse(loadedBookmarks);
        parsedBookmarks.forEach(
            function(bookmark) {
                addBookmark(bookmark.url, bookmark.name);
            }
        )
    }
}

function init() {
    loadBookmark();
    bookmarkTab.addEventListener("submit",showOverlay);
    closeButton.addEventListener("click",hideOverlay);
    bookmarkCreate.addEventListener("submit", handleBookmarkCreate);
}

init();
