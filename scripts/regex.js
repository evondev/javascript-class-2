// 1. Password contains at least 1 special characters
const myPassword = "tuaN56790pl";
const passwordRegex =
  /^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/gi;
// test
if (passwordRegex.test(myPassword)) {
  console.log("Password is valid");
} else {
  console.log("Password is invalid");
}
// match
const complexContent = `
  <div>
    <p>Paragraph</p>
  </div>
`;
const regexH1 = /<h1>\w+<\/h1>/gim;
let newContent = "";
complexContent.match(regexH1)?.forEach((match) => {
  newContent += match;
});
console.log(newContent);
// 2. Learning
{
  // const regex = //gmi;
  // const str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab pariatur veniam corporis molestiae, nesciunt iusto dolorum maxime itaque accusamus placeat? Molestias ut placeat vitae ad laboriosam repudiandae, porro consectetur.`;
}
