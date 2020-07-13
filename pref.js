const cssLink = document.querySelector("link");
const themeRange = document.querySelector("#range");
const themeText = document.querySelector("#themeI");
const swtBg = document.querySelectorAll(".swtBg");
let textViewable = true;
let betaFeature = false;

function savePref() {
    localStorage.setItem("theme", themeRange.value);
    localStorage.setItem("textViewable", JSON.stringify(textViewable));
    localStorage.setItem("beta", JSON.stringify(betaFeature));
}

function handleSwtClick(event) {
    const swt = event.target;
    if (swt.className === "swtBg" || swt.className === "swtBg swtBY") {
        const swtTgg = swt.querySelector(".swtTg");
        swt.classList.toggle("swtBY");
        swtTgg.classList.toggle("swtTY");
        if (swt.id === "txtTrb") {
            if (!swt.className.includes(" ")) {
                textViewable = true;
            } else {
                textViewable = false;
            }
        } else if (swt.id === "beta") {
            console.log(swt);
            if (!swt.className.includes(" ")) {
                betaFeature = false;
            } else {
                betaFeature = true;
            }
        }
    } else {
        const swtBg = swt.parentElement;
        swtBg.classList.toggle("swtBY");
        swt.classList.toggle("swtTY");
        if (swt.id === "txtTrb") {
            if (!swt.className.includes(" ")) {
                textViewable = true;
            } else {
                textViewable = false;
            }
        } else if (swt.id === "beta") {
            if (!swt.className.includes(" ")) {
                betaFeature = false;
            } else {
                betaFeature = true;
            }
        }
    }
    savePref();
}

function loadTheme() {
    const theme = localStorage.getItem("theme");
    const textViewable = JSON.parse(localStorage.getItem("textViewable"));
    const betaFeature = JSON.parse(localStorage.getItem("beta"));
    if (theme !== null) {
        themeRange.value = theme;
        if (theme === "1") {
            themeText.innerText = "Theme: Acrylic";
        } else if (theme === "2") {
            themeText.innerText = "Theme: Solid";
        } else {
            themeText.innerText = "Theme: Glass";
        }
    }
    if (textViewable !== null || betaFeature !== null) {
        if (textViewable === false) {
            const swt = document.querySelector("#txtTrb.swtBg");
            const swtTgg = swt.querySelector(".swtTg");
            swt.classList.toggle("swtBY");
            swtTgg.classList.toggle("swtTY");
        }
        
        if (betaFeature === true) {
            const swt = document.querySelector("#beta.swtBg");
            const swtTgg = swt.querySelector(".swtTg");
            swt.classList.toggle("swtBY");
            swtTgg.classList.toggle("swtTY");
        }
    }
}

function init() {
    loadTheme();
    themeRange.addEventListener("input", () => {
        if (themeRange.value === "1") {
            themeText.innerText = "Theme: Acrylic";
        } else if (themeRange.value === "2") {
            themeText.innerText = "Theme: Solid";
        } else {
            themeText.innerText = "Theme: Glass";
        }
        savePref();
    });
    swtBg.forEach((swt) => {
        swt.addEventListener("click", handleSwtClick);
    });
}

init();