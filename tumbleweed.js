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

funtion startMusic() {
    let music = document.getElementById("music");
    music.play();
}

startAnimation()
startMusic()
