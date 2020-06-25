const body = document.querySelector("body");
const date = new Date();
const day = date.getDay();

const dateQuery = {
    0: "seoul",
    1: "london",
    2: "paris",
    3: "new york",
    4: "berlin",
    5: "rome",
    6: "venice"
};

const accessCode = "3CVHz8RtTUrydWpPKmbmNGlOBnZ4zxn6k2YvNn-bjPw";
let query = dateQuery[day];
let i = 0;

const random = Math.floor(Math.random() * 10);

function bringPhoto() {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessCode}`).then(function(response) {
        return response.json();
    }).then(function(json) {  
        const imgURL = json.results[random].urls.full;
        const imgAlt = json.results[random].alt_description;
        const imgOwner = json.results[random].user.name;
        const imgHeight = json.results[random].height;
        setBackground(imgURL,imgAlt,imgOwner,imgHeight);
        }
    )
}

function setBackground(src,alt,owner,height) {
    const image = new Image();
    const description = document.createElement("span");
    image.src = src;
    image.alt = `${alt}, by ${owner}. Provided by Unsplash.`;
    image.id = "background";
    body.appendChild(image);
}

function init() {
    bringPhoto();
}

init();