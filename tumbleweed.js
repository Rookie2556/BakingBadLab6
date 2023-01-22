window.addEventListener("load", startAnimation);
window.addEventListener("load", startMusic);
window.addEventListener("load", startQuiz);


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

function startQuiz() {
    let name = "";
    while(name.length < 4 || name.length > 15) {
        name = prompt("What's your name?");
}
    else {console.log("Welcome " + name);}
}

startQuiz()


