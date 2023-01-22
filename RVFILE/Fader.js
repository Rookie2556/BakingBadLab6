function fadeInner() {
    let elements = document.querySelectorAll(":not(.RV):not(.Introduction):not(.FootLinks)");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-in");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fadeInner();
});
