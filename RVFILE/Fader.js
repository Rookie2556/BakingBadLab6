window.onload = function() {
  const elements =
        document.querySelectorAll(":not(.class1):not(.class2):not(.class3)");
  for (const i = 0; i < elements.length; i++) {
    elements[i].classList.add("fade-in");
  }
}
