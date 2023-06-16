/*const menu = document.querySelector(".menu");
[
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mousemove",
  "mousedown",
  "mouseup",
].forEach((item) => {
  menu.addEventListener(item, function (e) {
    console.log(item);
  });
});
*/
const menuEffect = document.createElement("div");
menuEffect.classList.add("menu-effect");
document.body.appendChild(menuEffect);
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("mouseenter", function (e) {
    const { x, y, width, height } = e.target.getBoundingClientRect();
    menuEffect.style.left = `${x + window.scrollX}px`;
    menuEffect.style.top = `${y + window.scrollY}px`;
    menuEffect.style.width = `${width}px`;
    menuEffect.style.height = `${height}px`;
  });
});
menu.addEventListener("mouseleave", function (e) {
  menuEffect.style.width = "0px";
  menuEffect.style.height = "0px";
});
