const studentName = "evondev";
const studentAge = 29;
const studentGender = "Male";
const studentSchool = "Cao Thang Technical College";
const studentHobby = ["Badminton", "Coding", "Listening music"];
// const student = {}; empty object
const student = {
  name: "evondev",
  age: 29,
  gender: "male",
  school: "Cao Thang",
  hobby: ["Badminton", "Coding", "Listening music"],
  "my-skill": ["html", "css"],
  complex: {
    key: {
      water: "Aquafina",
    },
  },
  myRole() {
    console.log("I am a captain");
  },
  // myRole: () => {
  //   console.log("I am a captain");
  // },
};
console.log(student["my-skill"]);
console.log(student.hobby);
delete student.school;
const newStudent = JSON.parse(JSON.stringify(student));
newStudent.complex.key.water = "Lavie";
console.log("student:", student);
console.log("newStudent:", newStudent);
// student.myRole();
// 1. if
if (student && student.devices && student.devices.keyboard) {
  // body code
  console.log(student.devices.keyboard);
}
// 2. optional chaining object?.key1?.key2
student.devices = {};
const keyboard = student?.devices?.keyboard;
console.log("keyboard:", keyboard);
// if(data)
// data.age
const posts = [
  {
    id: 1,
    title: "Responsive giao diện cực đỉnh với Container Queries",
    image:
      "https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    author: {
      name: "evondev",
      bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sed voluptatum aperiam reprehenderit dolores et repellendus saepe reiciendis eos ab nesciunt itaque, illo possimus. Id fugit dolorum deleniti beatae. Quasi.",
    },
    url: "https://evondev.com",
    content: "<div></div>",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eligendi incidunt nobis exercitationem minus nulla cum! Voluptate natus odit aspernatur quod voluptas ullam, veritatis accusamus ipsa eos, delectus obcaecati recusandae!",
    relatedPosts: [{}],
    comments: [
      {
        id: 1,
        content: "abc",
      },
    ],
  },
];
const { name, age, complex, ...others } = student;
console.log("others:", others);
function displayName({ name, ...rest }) {
  console.log(name);
  console.log(rest);
}
displayName({
  name: "evondev",
  age: 30,
  hobby: "Coding",
});
// const post = {
//   name: "abc",
// };
// const { name: namePost } = post;
for (let key in student) {
  console.log(`key: value is: ${key}: ${student[key]}`);
}
console.log(student.hasOwnProperty("name"));
console.log(Object.entries(student));
Object.seal(student);
student.name = "Oxford";
console.log("student:", student);
const person = {
  isHuman: false,
  myname: "evondev",
  printIntroduction() {
    return () => {
      console.log(`My name is ${this.myname}. Am I human? ${this.isHuman}`);
    };
  },
};
console.log(person.printIntroduction()());
// const me = Object.create(person);
// me.name = "Matthew";
// me.isHuman = true;
// console.log("person:", person);
