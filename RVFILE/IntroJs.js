let GrabAll = document.querySelectorAll(
    ":not(.RV):not(.LinksOnTop):not(.Introduction):not(.FootLinks)");

setTimeout(function(){
  let elements = document.querySelectorAll(".fade-in");
  for(var i=0; i<elements.length; i++) {
    elements[i].style.opacity = "1";
  }
}, 2000); // 2000 milliseconds = 2 seconds

