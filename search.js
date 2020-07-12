const searchForm = document.querySelector("#search");
const searchInput = searchForm.querySelector("input");

function handleSearch(event) {
    event.preventDefault();
    var query = searchInput.value;
    if (query[0] === "/") {
        query = query.replace("/", "");
        if (query.includes("https://")) {
            query = query.replace("https://", "");
        } else if (query.includes("http://")) {
            query = query.replace("http://", "");
        }
        console.log(query);
        location.href = `http://${query}`;
    } else {
        query = query.replace(/ /g, "%20");
        location.href = `https://www.google.com/search?q=${query}`;
    }
}

function loadTextAvailable() {
    const textViewable = JSON.parse(localStorage.getItem("textViewable"));
    if (textViewable === false) {
        searchInput.style.color = "#353b48";
    }
}

function init() {
    loadTextAvailable();
    searchForm.addEventListener("submit", handleSearch);
}

init();