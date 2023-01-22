document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll(":not(.RV):not(.Introduction):not(.FootLinks)");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-in");
    }
});

//Add a function similar to above so I can repeat when needed.
function fadeInner() {
}

//the above is unused and empty for the time being
  
fadeInner();

