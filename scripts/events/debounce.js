function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
// function total(...args) {
//   console.log(args);
// }
// total(5, 7, 9, 12, 15);
window.addEventListener("scroll", debounce(handleScroll, 500));
function handleScroll() {
  console.log("scroll again");
}
const input = document.querySelector("input.input");
input.addEventListener("keydown", debounce(handleInput, 500));
function handleInput(e) {
  const { value } = e.target;
  console.log("handleInput ~ value:", value);
}
