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
  const regex = /<a href="\S+">\s?\S+\s?<\/a>/gim;
  const str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab pariatur veniam corporis molestiae, nesciunt iusto dolorum maxime itaque accusamus placeat? <a href="#">evondev.com</a> Molestias ut placeat vitae ad laboriosam repudiandae, porro consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, <a href="https://evon.dev">evon.dev</a> consequatur hic? Pariatur sapiente obcaecati fuga repudiandae, earum recusandae vero quo unde eius a quidem delectus ipsum aspernatur eos illum molestias!`;
  const newStr = str.replace(regex, "");
  console.log(newStr);
}
