const bookmarkTab = document.querySelector("#bookmarkList");
const overlay = document.querySelector("#overlay");
const closeButton = document.querySelector("#cancel");
const removeButton = document.querySelectorAll(".remove");
const bookmark = document.querySelectorAll(".bookmark");
const bookmarkCreate = overlay.querySelector("#create");
console.log(bookmark);

const BOOKMARK_LS = "bookmark";

const bookmarks = [];

function saveBookmark() {
    localStorage.setItem(BOOKMARK_LS, JSON.stringify(bookmarks));
}

function addBookmark(url,name) {
    const link = document.createElement("a");
    const br = document.createElement("br");
    const rmBtn = document.createElement("button");
    const id = bookmarks.length;
    link.href = url;
    link.innerText = name;
    link.classList.add("bookmark");
    link.id = id;
    link.style.order = id;
    rmBtn.type = "button";
    rmBtn.classList.add("remove");
    rmBtn.innerText = "Remove";
    link.appendChild(br);
    link.appendChild(rmBtn);
    bookmarkTab.appendChild(link);
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
    bookmark.forEach((bmk) => {
        bmk.addEventListener("mouseover", function() {
            console.log(bmk.parentNode);
        });
    })
}
    
init();
