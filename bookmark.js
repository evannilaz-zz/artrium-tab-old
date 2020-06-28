const bookmarkTab = document.querySelector("#bookmarkList");
const overlay = document.querySelector("#overlay");
const closeButton = document.querySelector("#cancel");
const bookmarkCreate = overlay.querySelector("#create");
let bookmarks;

const BOOKMARK_LS = "bookmark";

let bookmarkList = [];

function saveBookmark() {
    localStorage.setItem(BOOKMARK_LS, JSON.stringify(bookmarkList));
}

function addBookmark(url,name) {
    const link = document.createElement("a");
    const id = bookmarkList.length + 1;
    link.href = url;
    link.innerText = name;
    link.classList.add("bookmark");
    link.id = id;
    link.style.order = id;
    bookmarkTab.appendChild(link);
    const bookmarkObject = {
        url: url,
        name: name,
        id: id
    }
    bookmarkList.push(bookmarkObject);
    saveBookmark();
    hideOverlay();
}

function removeBookmark(event) {
    event.preventDefault();
    const bookmark = event.target;
    bookmarkTab.removeChild(bookmark);
    const filtered = bookmarkList.filter((bmk) => {
        return bmk.id !== parseInt(bookmark.id);
    })
    bookmarkList = filtered;
    saveBookmark();
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
    const url = bookmarkCreate.querySelector("#url");
    const name = bookmarkCreate.querySelector("#name");
    addBookmark(url.value,name.value);
    alert(`Bookmark '${name.value}' successfully created!`)
    url.value = "";
    name.value = "";
}

function loadBookmark() {
    const loadedBookmarks = localStorage.getItem(BOOKMARK_LS);
    if (loadedBookmarks !== null) {
        const parsedBookmarks = JSON.parse(loadedBookmarks);
        parsedBookmarks.forEach((bookmark) => {
            addBookmark(bookmark.url, bookmark.name);
        })
    }
}
    
function init() {
    loadBookmark();
    bookmarkTab.addEventListener("submit",showOverlay);
    closeButton.addEventListener("click",hideOverlay);
    bookmarkCreate.addEventListener("submit", handleBookmarkCreate);
    setInterval(function() {
        bookmarks = document.querySelectorAll(".bookmark");
        bookmarks.forEach((bookmark) => {
            bookmark.addEventListener("contextmenu", removeBookmark);
        })
    }, 1000);
}
    
init();