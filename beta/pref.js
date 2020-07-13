const cssLink = document.querySelector("link");
const themeRange = document.querySelector("#range");
const themeText = document.querySelector("#themeI");
const swtBg = document.querySelectorAll(".swtBg");
const prefDel = document.querySelector("#delPref");
let textViewable = true;
let plcViewable = true;
let betaFeature = false;

function savePref() {
    localStorage.setItem("theme", themeRange.value);
    localStorage.setItem("textViewable", JSON.stringify(textViewable));
    localStorage.setItem("beta", JSON.stringify(betaFeature));
    localStorage.setItem("plcViewable", JSON.stringify(plcViewable));
}

function clearPref() {
    localStorage.removeItem("theme");
    localStorage.removeItem("textViewable");
    localStorage.removeItem("beta");
    localStorage.removeItem("plcViewable");
    location.reload();
}

function handleSwtClick(event) {
    const swt = event.target;
    if (swt.className === "swtBg" || swt.className === "swtBg swtBgOn") {
        const swtTgg = swt.querySelector(".swtTg");
        swt.classList.toggle("swtBgOn");
        swtTgg.classList.toggle("swtTgOn");
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
        } else if (swt.id === "plcTrb") {
            if (!swt.className.includes(" ")) {
                plcViewable = true;
            } else {
                plcViewable = false;
            }
        }
    } else {
        const swtBg = swt.parentElement;
        swtBg.classList.toggle("swtBgOn");
        swt.classList.toggle("swtTgOn");
        if (swtBg.id === "txtTrb") {
            if (!swt.className.includes(" ")) {
                textViewable = true;
            } else {
                textViewable = false;
            }
        } else if (swtBg.id === "beta") {
            if (!swt.className.includes(" ")) {
                betaFeature = false;
            } else {
                betaFeature = true;
            }
        } else if (swtBg.id === "plcTrb") {
            if (!swt.className.includes(" ")) {
                plcViewable = true;
            } else {
                plcViewable = false;
            }
        }
    }
    savePref();
}

function loadPref() {
    const theme = localStorage.getItem("theme");
    const textViewable = JSON.parse(localStorage.getItem("textViewable"));
    const betaFeature = JSON.parse(localStorage.getItem("beta"));
    const plcViewable = JSON.parse(localStorage.getItem("plcViewable"));
    if (theme !== null) {
        themeRange.value = theme;
        if (theme === "1") {
            themeText.innerText = "Theme: Acrylic";
            const warn = document.createElement("div");
            warn.innerText = "Acrylic Theme may slow down your PC.";
            warn.style.fontSize = "13px";
            themeText.appendChild(warn);
        } else if (theme === "2") {
            themeText.innerText = "Theme: Solid";
        } else {
            themeText.innerText = "Theme: Glass";
        }
    }
    if (textViewable !== null || betaFeature !== null || plcViewable !== null) {
        if (textViewable === false) {
            const swt = document.querySelector("#txtTrb.swtBg");
            const swtTgg = swt.querySelector(".swtTg");
            swt.classList.toggle("swtBgOn");
            swtTgg.classList.toggle("swtTgOn");
        }
        
        if (betaFeature === true) {
            const swt = document.querySelector("#beta.swtBg");
            const swtTgg = swt.querySelector(".swtTg");
            swt.classList.toggle("swtBgOn");
            swtTgg.classList.toggle("swtTgOn");
        }

        if (plcViewable === false) {
            const swt = document.querySelector("#plcTrb.swtBg");
            const swtTgg = swt.querySelector(".swtTg");
            swt.classList.toggle("swtBgOn");
            swtTgg.classList.toggle("swtTgOn");
        }
    }
}

function init() {
    loadPref();
    themeRange.addEventListener("input", () => {
        if (themeRange.value === "1") {
            themeText.innerText = "Theme: Acrylic";
            const warn = document.createElement("div");
            warn.innerText = "Acrylic Theme may slow down your PC.";
            warn.style.fontSize = "13px";
            themeText.appendChild(warn);
        } else if (themeRange.value === "2") {
            themeText.innerText = "Theme: Solid";
            if (themeText.querySelector("div")) {
                themeText.removeChild("div");
            }
        } else {
            themeText.innerText = "Theme: Glass";
            if (themeText.querySelector("div")) {
                themeText.removeChild("div");
            }
        }
        savePref();
    });
    swtBg.forEach((swt) => {
        swt.addEventListener("click", handleSwtClick);
    });
    prefDel.addEventListener("click", clearPref);
}

init();