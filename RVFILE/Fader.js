window.onload = function() {
  const elements =
        document.querySelectorAll(":not(.RV):not(.Introduction):not(.FootLinks)");
  for (const i = 0; i < elements.length; i++) {
    elements[i].classList.add("fade-in");
  }
}
