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
if (student?.devices?.keyboard) {
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
{
  // this
  console.log(`----- object this ------`);
  const person = {
    title: "Truong Kien Cuong",
    age: 20,
    getInformation() {
      // this: person
      // const _this = this;
      // const getDetailsInfo = () => {
      //   // this: window object
      //   console.log(this);
      //   return `${this.title} is ${this.age} years old`;
      // };
      function getDetailsInfo() {
        // this: window object
        console.log(this);
        return `${this.title} is ${this.age} years old`;
      }
      return getDetailsInfo.bind(this);
    },
  };
  person.greet = function () {
    return `hi`;
  };
  console.log(person.getInformation()());
}
{
  // Function constructor
  // const student1 = {
  //   name: "Tran Anh Tuan",
  //   age: 20,
  // };
  // const student2 = {
  //   name: "Truong Kien Cuong",
  //   age: 20,
  // };
  // const student3 = {
  //   name: "Nguyen Minh Chien",
  //   age: 20,
  // };
  console.log(`-----Function Constructor-----`);
  function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.greet = function () {
    //   console.log("Hello World");
    // };
  }
  // Object.prototype.greet = function () {
  //   console.log("Say Hi");
  // };
  // Person.prototype.greet = function () {
  //   console.log("Say Hi");
  // };
  const tuan = new Person("Tuan", 29);
  console.log(tuan.__proto__);
  // tuan.greet();
  // tuan.hobby = ["Badminton"];
  // console.log("tuan:", tuan);
  const cuong = new Person("Cuong", 18);
  // cuong.greet();
  // cuong.game = "CSGo";
  // console.log("cuong:", cuong);
  // const chien = new Person("Chien", 22);
  // const phat = new Person("Phat", 24);
  // new Array, new String, new Number -> built-in Constructor
}
{
  // Classes
  console.log(`-----Classes-----`);
  // function Person(name, age){
  //   this.name = name;
  //   this.age = age;
  // }
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log("Hello World");
      return "Hello World";
    }
    get myName() {
      return this.name;
    }
    set myName(newName) {
      this.name = newName;
    }
    static hobby() {
      console.log("I love to learn Javascript very much");
    }
  }
  const tuan = new Person("Tran Anh Tuan", 30);
  // console.log(tuan.myName);
  // tuan.myName = "Evondev";
  // console.log(tuan.myName);
  // Person.greet();
  // tuan.greet();
  // const student = {
  //   name: "Evondev",
  //   age: 30,
  //   className: "IT",
  //   school: "Ton Duc Thang",
  // };
  // NodeJS NestJS Typescript
  // Functional
  class Student extends Person {
    constructor(name, age) {
      super(name, age);
    }
    greet() {
      console.log(`${super.greet()} Hello I am your student`);
    }
  }
  const cuong = new Student("Cuong", 18);
  cuong.greet();
}
{
  // call, apply, bind
  console.log("----call, apply, bind----");
  const post = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    info() {
      return `${this.title} is written by ${this.author}.`;
    },
  };
  function getPostDetails(publishDate, rating) {
    return `${this.title} is written by ${this.author}. Publised in ${publishDate} and have ${rating} stars`;
  }
  // console.log(getPostDetails());
  console.log(getPostDetails.call(post, 2023, 4));
  console.log(getPostDetails.call(post, "2020", 5));
  console.log(
    getPostDetails.apply(
      {
        title: "IndianaJones",
        author: "Advanture",
      },
      ["2020", 5]
    )
  );
  // const n = [1, 2, 3, 4, 5];
  // const max1 = Math.max.call(null, 1, 2, 3, 4, 5);
  // const max2 = Math.max.apply(null, n);
  // console.log("max2:", max2);
  const newPost = post.info.bind(post);
  console.log(newPost());
  // console.log("newPost:", newPost.info());
}
