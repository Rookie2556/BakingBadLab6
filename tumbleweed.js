window.addEventListener("load", startAnimation);
window.addEventListener("load", startMusic);


var tumbleweed = document.getElementById("tumbleweed");

function startAnimation() {
    console.log("Animation Started");
    tumbleweed.style.animation = "tumbleweed-animation 10s linear infinite";
}

function stopAnimation() {
    tumbleweed.style.animation = "none";
}

function startMusic() {
    let music = document.getElementById("music");
    music.play();
}

startAnimation()
startMusic()

let name = "";
while(name.length < 4 || name.length > 15) {
    name = prompt("What's your name?");
}
console.log("Welcome " + name);

