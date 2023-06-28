// 1. callback hell
// setTimeout(() => {
//   const value = 1;
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//       setTimeout(() => {
//         console.log("4");
//         setTimeout(() => {
//           console.log("5");
//           setTimeout(() => {}, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// 2. promise
const myMotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // handle code here
    reject("Oh no! I have not new Iphone");
  }, 1000);
});
async function myMotherAsync() {
  try {
    const results = await myMotherPromise;
    console.log("myMotherAsync ~ results:", results);
  } catch (error) {
    console.log("myMotherAsync ~ error:", error);
  } finally {
    console.log("myMotherAsync ~ finally");
  }
}
myMotherAsync();
// myMotherPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log("error");
//     console.log(error);
//   });
