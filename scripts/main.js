setup();

function setup() {
    getFox();
}

function getFox() {
    fetch("https://randomfox.ca/floof/")
        .then(response => response.json())
        .then(data => newFoxImgSrc(data.image));
}

function newFoxImgSrc(src) {
    let img = document.querySelector("img");
    img.src = src;
}