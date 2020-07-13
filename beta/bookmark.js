const bdy = document.querySelector("body");
const bkList = document.querySelector("#bkList");
const crtBkBtn = document.querySelector("#crtBkBtn");
const crtBkTab = document.querySelector("#crtBk");
const cnlCrtBk = document.querySelector("#cnlCrtBk");
let bookmarks;

let bkArr = [];

function saveBookmark() {
    localStorage.setItem("bookmark", JSON.stringify(bkArr));
}

function addBookmark(url,name) {
    const link = document.createElement("a");
    const id = bkArr.length + 1;
    if (id > 10) {
        alert("Maxinum Bookmark Count is 9.");
        return;
    }
    link.href = url;
    link.innerText = name;
    link.classList.add("bookmark");
    link.id = id;
    link.style.order = id;
    bkList.appendChild(link);
    const bookmarkObject = {
        url: url,
        name: name,
        id: id
    }
    bkArr.push(bookmarkObject);
    saveBookmark();
    hideBkTab();
}

function removeBookmark(event) {
    event.preventDefault();
    const bookmark = event.target;
    bkList.removeChild(bookmark);
    const filtered = bkArr.filter((bmk) => {
        return bmk.id !== parseInt(bookmark.id);
    })
    bkArr = filtered;
    saveBookmark();
}

function showBkTab() {
    crtBkTab.style.transform = "translateY(25vh)";
}

function hideBkTab() {
    const url = crtBkTab.querySelector("#url");
    const name = crtBkTab.querySelector("#name");
    crtBkTab.style.transform = "translateY(130vh)";
    url.value = "";
    name.value = "";
}

function handleBookmarkCreate() {
    event.preventDefault();
    const url = crtBkTab.querySelector("#url");
    const name = crtBkTab.querySelector("#name");
    addBookmark(url.value,name.value);
    url.value = "";
    name.value = "";
}

function loadBookmark() {
    const loadedBookmarks = JSON.parse(localStorage.getItem("bookmark"));
    if (loadedBookmarks !== null) {
        loadedBookmarks.forEach((bookmark) => {
            addBookmark(bookmark.url, bookmark.name);
        })
    }
}
    
function init() {
    loadBookmark();
    crtBkBtn.addEventListener("click",showBkTab);
    cnlCrtBk.addEventListener("click",hideBkTab);
    crtBkTab.addEventListener("submit", handleBookmarkCreate);
    setInterval(function() {
        const textViewable = JSON.parse(localStorage.getItem("textViewable"));
        bookmarks = document.querySelectorAll(".bookmark");
        bookmarks.forEach((bookmark) => {
            bookmark.addEventListener("contextmenu", removeBookmark);
        });
        if (textViewable === false) {
            bookmarks.forEach((bookmark) => {
                bookmark.style.color = "#353b48";
            });
        }
    }, 1000);
}
    
init();