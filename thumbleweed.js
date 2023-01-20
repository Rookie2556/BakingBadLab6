window.addEventListener("load", startAnimation);

var tumbleweed = document.getElementById("tumbleweed");

function startAnimation() {
    console.log("Animation Started");
    tumbleweed.style.animation = "tumbleweed-animation 10s linear infinite";
}

function stopAnimation() {
    tumbleweed.style.animation = "none";
}

startAnimation()
