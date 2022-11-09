let cursor = document.querySelector(".cursor");
let cursorInner = document.querySelector(".cursorInner");
document.addEventListener("mousemove", (event) => {
  cursor.style.cssText = cursorInner.style.cssText =
    "left: " + event.clientX + "px; top: " + event.clientY + "px;";
});