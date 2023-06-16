// 1. click
/*const btn = document.querySelector(".button");
function handleClickButton(event) {
  console.log("button clicked");
  console.log(event);
}
btn && btn.addEventListener("click", handleClickButton);
const btnText = document.querySelector(".button-text");
btnText &&
  btnText.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("button text clicked");
  });
document.body.addEventListener("click", function () {
  console.log("body clicked");
});
const singleLink = document.querySelector(".single-link");
singleLink &&
  singleLink.addEventListener("click", function (e) {
    e.preventDefault();
  });
const form = document.querySelector("form");
form &&
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(this);
  });
  */
// Button circle effects
const buttonEffect = document.querySelector(".button-effect");
buttonEffect &&
  buttonEffect.addEventListener("click", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    for (let index = 0; index < 5; index++) {
      const circle = document.createElement("span");
      circle.classList.add("effect-circle");
      circle.style.top = y + "px";
      circle.style.left = x + "px";
      circle.style.animationDelay = index * 0.1 + "s";
      this.appendChild(circle);
      circle &&
        circle.addEventListener("animationend", function () {
          circle.remove();
        });
    }
  });
// modal
const btnModal = document.querySelector(".button-modal");
const modal = document.querySelector("#modal-simple");
const modalClose = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");
btnModal &&
  btnModal.addEventListener("click", function () {
    if (!modal) return;
    modal.classList.add("is-open");
  });
function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
}
modalClose && modalClose.addEventListener("click", closeModal);
modalOverlay && modalOverlay.addEventListener("click", closeModal);
// [modalClose, modalOverlay].forEach((item) => {
//   item &&
//     item.addEventListener("click", function () {
//       closeModal();
//     });
// });
