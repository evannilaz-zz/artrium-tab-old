const head = document.querySelector("head");
const cssLink = head.querySelector("link");
const nav = document.querySelector("nav");
const themeRange = nav.querySelector("input");
const themeIndicator = nav.querySelector("span");

function saveTheme() {
    localStorage.setItem("theme",themeRange.value);
}

function changeTheme(themeNo) {
    if (themeNo === "1") {
        cssLink.href = "acrylicStyle.css";
        themeIndicator.innerText = "Theme: Acrylic";
    } else if (themeNo === "2") {
        cssLink.href = "solidStyle.css";
        themeIndicator.innerText = "Theme: Solid";
    } else {
        cssLink.href = "transparentStyle.css";
        themeIndicator.innerText = "Theme: Glass";
    }
    saveTheme();
}

function loadTheme() {
    const loadedTheme = localStorage.getItem("theme");
    if (loadedTheme !== null) {
        themeRange.value = loadedTheme;
        changeTheme(loadedTheme);
    }
}

function init() {
    loadTheme();
    themeRange.addEventListener("input", () => {
        changeTheme(themeRange.value);
    });
}

init()