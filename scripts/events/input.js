const input = document.querySelector("input.input");
// ["keyup", "keydown", "change", "keypress", "input"].forEach((event) => {
//   input.addEventListener(event, (e) => {
//     console.log("Event: ", event);
//     console.log(e.target.value);
//   });
// });
["blur"].forEach((event) => {
  input.addEventListener(event, (e) => {
    console.log("Event: ", event);
    console.log(e.key);
  });
});
function handleOTPInput() {
  let indexFocus = 0;
  let value = "";
  const otpInputs = document.querySelectorAll(".otp-input");
  if (otpInputs.length === 0) return;
  otpInputs[indexFocus].focus();
  otpInputs.forEach((input, index) => {
    input.addEventListener("keyup", function (e) {
      const inputValue = e.target.value;
      indexFocus++;
      value += e.key;
      if (indexFocus > otpInputs.length - 1) indexFocus = 0;
      otpInputs[indexFocus].focus();
      console.log("indexFocus:", indexFocus);
      if (value.length === otpInputs.length) {
        // handle something here
        console.log("complete otp");
        otpInputs.forEach((item) => item.setAttribute("readonly", true));
      }
    });
  });
}
handleOTPInput();
// Login form
const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const specialCharacters = "!@#$%^&*()_+";
  const characters = specialCharacters.split("");
  const email = this.email.value;
  const password = this.password.value;
  let message = "";
  let isValid = true;
  if (!email || !password) {
    message = "Please enter email and password";
    isValid = false;
  }
  if (password.length < 8) {
    message = "Password must be at least 8 characters";
    isValid = false;
  }
  const isIncludeSpecialCharacter = characters.some((character) =>
    password.includes(character)
  );
  if (!isIncludeSpecialCharacter) {
    message = "Password must be include special character";
    isValid = false;
  }
  if (!isValid) {
    console.log(message);
    return;
  }
  console.log(`hooray!`);
});
