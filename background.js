const body = document.querySelector("body");
const date = new Date();
const month = date.getMonth();
let random = Math.floor(Math.random() * 7);

const dateQuery = {
    citys: {
        0: "antartica",
        1: "london",
        2: "paris",
        3: "new york",
        4: "berlin",
        5: "rome",
        6: "venice"
    },
    arts: {
        0: "interior",
        1: "nature",
        2: "business",
        3: "animal",
        4: "technology",
        5: "architecture",
        6: "fashion"
    }
}

const accessCode = "3CVHz8RtTUrydWpPKmbmNGlOBnZ4zxn6k2YvNn-bjPw";
let query;

if (month % 2 === 0) {
    query = dateQuery.citys[random]
} else {
    query = dateQuery.arts[random];
}

random = Math.floor(Math.random() * 10);

function bringPhoto() {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessCode}`).then(function(response) {
        return response.json();
    }).then(function(json) {
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            alert("Background Image is not supported for Mobile.");
        } else {
            const imgURL = json.results[random].urls.full;
            const imgAlt = json.results[random].alt_description;
            const imgOwner = json.results[random].user.name;
            const imgHeight = json.results[random].height;
            setBackground(imgURL,imgAlt,imgOwner,imgHeight);
        }
        }
    )
}

function setBackground(src,alt,owner,height) {
    const image = new Image();
    const description = document.createElement("span");
    description.id = "imgDsc";
    description.innerText = `Taken by ${owner}. From Unsplash.`;
    image.src = src;
    image.alt = `${alt}, by ${owner}. Provided by Unsplash.`;
    image.id = "background";
    body.appendChild(image);
    body.appendChild(description);
}

function init() {
    bringPhoto();
}

init();


function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("[Alert] Tintious is not for Mobile, but PC. Thank you.");
        clearScreen();
    }
}
